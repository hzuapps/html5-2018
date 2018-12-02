// pages/t_table/t_table.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mes: {
  }},
  /**
   * 生命周期函数--监听页面加载
   */
  addmemory:function(e)
  {
    var id = e.currentTarget.id;
    console.log(id);
    var mess;
    wx.getStorage({
      key: 'mes',
      success: res => {
        mess=res.data.message[id];
        console.log(mess)
      }
    })
    wx.showActionSheet({
      itemList: ['添加至追更目录','取消'],
      success: res=> {
        if (!res.cancel) {
          wx.saveFile({
            tempFilePath: mess,
            success(res) {
              const savedFilePath = mes
              console.log(savedFilePath)
            },
            fail(res)
            {
              console.log('fail')
            }
          })
        }
      }
    });
  },
  onLoad: function (options) {
    wx.getStorage({
      key: 'mes',
      success: res=> {
        this.setData({
          mes: res.data
        })
        console.log(res.data)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})