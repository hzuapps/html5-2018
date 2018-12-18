let DataStore = require('../../js/DataStore.js');
let ds = DataStore.getInstance();

Page({

    // 页面的初始数据
    data: {
        theme: '',
        prize: '',
        wanningNum: '',
        minute: '',
        second: '',
        id: '',
        luckyNum: 0, //是否显示幸运号码

        //滚动的数字
        rollNum: ['000', '000', '000'],
        //隐藏按钮和id
        hiddenButAndId: false,
    },

    // 生命周期函数--监听页面加载
    onLoad: function(options) {
        wx.setNavigationBarTitle({
            title: '正在抽奖',
        })
        this.setData({
            theme: ds.params.theme,
            prize: ds.params.prize,
            wanningNum: ds.params.wanningNum,
            id: ds.params.id
        });
        this.dealWithTime();
    },

    // 生命周期函数--监听页面显示
    onShow: function() {

    },

    // 生命周期函数--监听页面卸载
    onUnload: function() {
        console.log('underway已经被卸载');
    },

    //点击开始按钮
    clickBeginning: function() {
        //隐藏按钮和id
        this.setData({
            hiddenButAndId: true
        });
        let data = {
            code: 103,
            id: ds.params.id
        };
        ds.socket.send({
            data: JSON.stringify(data)
        });
        this.handleCommand();
    },


    //处理接受的信息
    handleCommand: function() {
        console.log('开始处理');
        ds.socket.onMessage((data)=> {
            // console.log(data);
            let temp = JSON.parse(data.data);
            switch (temp.resCode) {
                case 202:
                    this.showTime(temp);
                    break;
                case 203:
                    this.showNum(temp);
                    break;
            }
        });
    },


    //显示倒计时
    showTime: function(data) {
        console.log(data);
        this.setData({
            minute: data.minute,
            second: data.second
        });
        if (this.data.minute === '00' && this.data.second === '00') {
            ds.socket.close({
                success: function() {
                    console.log('关闭成功');
                }
            });
            // 显示幸运号码
            this.setData({
                luckyNum: 1
            });
        }
    },

    //显示抽奖号码
    showNum: function(data) {
        console.log(data);
        this.setData({
            rollNum: data.num
        });
    },


    //处理时间小于10的时间
    dealWithTime:function(){
        this.setData({
            minute: ds.params.minute < 10 ? ('0' + ds.params.minute) : ds.params.minute,
            second: ds.params.second < 10 ? ('0' + ds.params.second) : ds.params.second,
        });
    }
})