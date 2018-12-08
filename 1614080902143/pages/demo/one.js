Page({
  onLoad: function () {
    wx.request({
      url: 'https://locathost:8080/',
      data: {},
      method: 'GET',
      success: function (res) {
        console.log("返回成功的数据:" + res.data)
        console.log("返回成功的数据:" + JSON.stringify(res.data))
      },
      fail: function (fail) {
      },
      complete: function (arr) {
      }
    })
  },
  formSubmit: function (e) {
    var that = this;
    var formData = e.detail.value; //获取表单所有input的值  
    wx.request({
      url: '',
      data: formData,
      header: { 'Content-Type': 'application/json' },
      success: function (res) {
        console.log(res.data)
      }
    })
  },
  data: {
    optionList: [
      {
        icon: ''
      },
      {
        icon: ''
      }
    ],

    showAddBtn: 1,

    date: "2018-12-01",
    time: "12:01",

  },
  updateVoteType: function () {
    let _optionList = this.data.optionList;
    let _voteType = this.data.voteType;

    _voteType = [];

    _optionList.map(function (obj, i) {

      if (i === 0) {
        _voteType.push('单选');
      } else {
        _voteType.push('多选，最多' + (i + 1) + '项');
      }

      console.log(i)
      console.log(_voteType)

    })
    _voteType.push('多选，无限制');

    this.setData({ voteType: _voteType });
    console.log(111)
  },

  bindVoteTypeChange: function (e) {
    this.setData({
      voteTypeIndex: e.detail.value
    })
  },
  bindTimeChange: function (e) {
    this.setData({
      time: e.detail.value
    })
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  recordValue: function (e) {
    let _optionList = this.data.optionList;
    let _index = e.target.dataset.index;
    let value = e.detail.value;
    _optionList[_index].value = value;

    this.setData({ optionList: _optionList });

  },
  addOption: function (e) {
    let _optionList = this.data.optionList;

    _optionList.push({ icon: '/images/common/5.png' })
    this.setData({ optionList: _optionList });

    // 选项大于15个后移除添加按钮
    if (_optionList.length >= 15) {
      this.setData({ showAddBtn: 0 });
    }

    // 更新投票选项
    this.updateVoteType();

  },
  delOption: function (e) {
    let _index = e.target.dataset.index;
    let _optionList = this.data.optionList;

    _optionList.splice(_index, 1);

    this.setData({ optionList: _optionList });

    // 更新投票选项
    this.updateVoteType();

  },

});