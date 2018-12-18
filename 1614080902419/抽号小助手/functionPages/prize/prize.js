let DataStore = require('../../js/DataStore.js');
let ds = DataStore.getInstance();
let websocket; //网络连接

const width = wx.getSystemInfoSync().windowWidth;
const height = wx.getSystemInfoSync().windowHeight;
let numArray = []; //人数数组
let minArray = []; //分钟数组
let secArray = [0, 10, 20, 30, 40, 50]; //秒钟数组
for (let i = 2; i < 1000; i++) {
    numArray.push(i);
}
for (let i = 0; i <= 30; i++) {
    minArray.push(i);
}
Page({
    data: {
        themeValue: '', //抽奖主题的值
        pirzeValue: '', //奖品名称的值
        wanningNum: 1, //中奖人数
        prizeStyle: '倒计时抽奖', //抽奖方式

        // 抽奖总人数变量
        numArray: numArray,
        numIndex: 0,

        //抽奖时间变量
        multiArray: [minArray, secArray],
        multiIndex: [0, 3],
    },

    // 生命周期函数--监听页面加载
    onLoad: function(options) {
        wx.setNavigationBarTitle({
            title: '创建抽奖',
        });
        let ctx = wx.createCanvasContext('canvas', this);
        ctx.drawImage('/images/bg.png', 0, 0, 1920, 1080, 0, 0, 1920 * 0.2, 1080 * 0.2);
        ctx.draw();
        // this.request();
    },

    //生命周期函数--监听页面卸载
    onUnload: function() {
        console.log('页面已卸载');
    },

    //抽奖的方式
    onPrizeStyle: function() {
        let that = this;
        wx.showActionSheet({
            itemList: ['倒计时抽奖', '手动开奖', '定时开奖'],
            success(res) {
                let list = ['倒计时抽奖', '手动开奖', '定时开奖'];
                that.setData({
                    prizeStyle: list[res.tapIndex]
                });
            },
            fail(res) {
                console.log(res.errMsg);
            }
        })
    },

    //人数发生改变
    bindPickerChange: function(e) {
        console.log(e.detail);
        this.setData({
            numIndex: e.detail.value
        });
    },

    //时间发生改变
    bindMultiPickerChange: function(e) {
        console.log(e.detail);
        this.setData({
            multiIndex: e.detail.value
        })
    },

    //获取输入的主题的值
    themeInput: function(e) {
        this.setData({
            themeValue: e.detail.value
        });
    },

    //获取输入的奖品的值
    prizeInput: function(e) {
        this.setData({
            pirzeValue: e.detail.value
        });
    },

    //增加中奖的人数
    addWanningNum: function() {
        this.setData({
            wanningNum: this.data.wanningNum + 1
        });
    },

    //减少中奖的人数
    deleteWanningNum: function() {
        if (this.data.wanningNum <= 1) {
            this.Modal('中奖人数不能小于1');
            return;
        }
        this.setData({
            wanningNum: this.data.wanningNum - 1
        });
    },

    //创建抽奖
    createPrize: function() {
        // console.log(this.data.themeValue, this.data.pirzeValue,this.data.wanningNum);
        if (!this.checkIsMatchCondition()) {
            return;
        }
        this.connect();
    },

    //判断是否符合抽奖条件
    checkIsMatchCondition: function() {
        if (this.data.themeValue === '') {
            this.Modal('抽奖主题不能为空');
            return false;
        }
        if (this.data.pirzeValue === '') {
            this.Modal('奖品不能为空');
            return false;
        }
        if (this.data.wanningNum >= this.data.numArray[this.numIndex]) {
            this.Modal('抽奖人数需大于中奖人数');
            return false;
        }
        return true;
    },

    //消息提示框
    Modal: function(content) {
        wx.showModal({
            title: '提示',
            content: content,
            showCancel: false
        });
    },

    connect: function() {
        wx.showLoading({
            title: '正在创建',
        });
        let params = {
            theme: this.data.themeValue,
            prize: this.data.pirzeValue,
            wanningNum: this.data.wanningNum,
            sum: this.data.numArray[this.data.numIndex],
            minute: this.data.multiArray[0][this.data.multiIndex[0]],
            second: this.data.multiArray[1][this.data.multiIndex[1]],
            id:'',
            bgUrl: '',
        };
        let data = {
            code: 101,
            styleCode: 1001,
            status: false,
            params: params
        };
        websocket = wx.connectSocket({
            url: 'ws://127.0.0.1:3000/?data=' + JSON.stringify(data),
        });
        websocket.onMessage(function(data) {
            console.log(JSON.parse(data.data));
            //返回id时跳转
            let temp = JSON.parse(data.data);
            if(temp.resCode === 201){
                wx.hideLoading();
                ds.socket = websocket;
                params.id = temp.id;
                ds.params = params;
                wx.redirectTo({
                    url: '../underway/underway',
                });
            }
        });
    },
    send: function() {
        let data = {
            code: 102,
            id: 100000000001
        };
        JSON.stringify(data);
        websocket.send({
            data: JSON.stringify(data)
        });
    },
    begin: function() {
        let data = {
            code: 103,
            id: 100000000001
        };
        JSON.stringify(data);
        websocket.send({
            data: JSON.stringify(data)
        });
    },
    disconnect: function() {
        websocket.close({
            success: function() {
                console.log('关闭成功');
            }
        });
    },
})