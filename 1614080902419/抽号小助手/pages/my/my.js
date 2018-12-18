// pages/my/my.js
Page({
    // 页面的初始数据
    data: {
        historyPrize:[
            {
                id:123456,
                status:'进行中...'
            },
            {
                id: 789101,
                status: '进行中...'
            },
            {
                id: 1614080902419,
                status: '进行中...'
            }
        ],
    },

    // 生命周期函数--监听页面加载
    onLoad: function (options) {
        wx.setNavigationBarTitle({
            title: '我的抽奖',
        })
    },

    // 生命周期函数--监听页面显示
    onShow: function () {
        
    },

    // 生命周期函数--监听页面卸载
    onUnload: function () {
        console.log('my已经被卸载');
    },
})