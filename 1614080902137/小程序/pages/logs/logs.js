//logs.js

Page({
  data: {
    Stu: [
      {
        userName: "1614080902101",
        passWord: "123456"
      },
      {
        userName: "1614080902102",
        passWord: "123456"
      },
      {
        userName: "1614080902103",
        passWord: "123456"
      },
      {
        userName: "1614080902104",
        passWord: "123456"
      },
      {
        userName: "1614080902105",
        passWord: "123456"
      },
      {
        userName: "1614080902106",
        passWord: "123456"
      },
      {
        userName: "1614080902107",
        passWord: "123456"
      },
      {
        userName: "1614080902108",
        passWord: "123456"
      },
      {
        userName: "1614080902109",
        passWord: "123456"
      },
      {
        userName: "1614080902110",
        passWord: "123456"
      },
      {
        userName: "1614080902111",
        passWord: "123456"
      },
      {
        userName: "1614080902112",
        passWord: "123456"
      },
      {
        userName: "1614080902113",
        passWord: "123456"
      },
      {
        userName: "1614080902114",
        passWord: "123456"
      },
      {
        userName: "1614080902115",
        passWord: "123456"
      },
      {
        userName: "1614080902116",
        passWord: "123456"
      },
      {
        userName: "1614080902117",
        passWord: "123456"
      },
      {
        userName: "1614080902118",
        passWord: "123456"
      },
      {
        userName: "1614080902119",
        passWord: "123456"
      },
      {
        userName: "1614080902120",
        passWord: "123456"
      },
      {
        userName: "1614080902121",
        passWord: "123456"
      },
      {
        userName: "1614080902122",
        passWord: "123456"
      },
      {
        userName: "1614080902123",
        passWord: "123456"
      },
      {
        userName: "1614080902124",
        passWord: "123456"
      },
      {
        userName: "1614080902125",
        passWord: "123456"
      },
      {
        userName: "1614080902126",
        passWord: "123456"
      },
      {
        userName: "1614080902127",
        passWord: "123456"
      },
      {
        userName: "1614080902128",
        passWord: "123456"
      },
      {
        userName: "1614080902129",
        passWord: "123456"
      },
      {
        userName: "1614080902130",
        passWord: "123456"
      },
      {
        userName: "1614080902131",
        passWord: "123456"
      },
      {
        userName: "1614080902132",
        passWord: "123456"
      },
      {
        userName: "1614080902133",
        passWord: "123456"
      },
      {
        userName: "1614080902134",
        passWord: "123456"
      },
      {
        userName: "1614080902135",
        passWord: "123456"
      },
      {
        userName: "1614080902136",
        passWord: "123456"
      },
      {
        userName: "1614080902137",
        passWord: "123456"
      },
      {
        userName: "1614080902138",
        passWord: "123456"
      },
      {
        userName: "1614080902139",
        passWord: "123456"
      },
      {
        userName: "1614080902140",
        passWord: "123456"
      },
      {
        userName: "1614080902141",
        passWord: "123456"
      },
      {
        userName: "1614080902142",
        passWord: "123456"
      },
      {
        userName: "1614080902143",
        passWord: "123456"
      },
      {
        userName: "1614080902144",
        passWord: "123456"
      },
      {
        userName: "1614080902145",
        passWord: "123456"
      },
      {
        userName: "1614080902146",
        passWord: "123456"
      }
    ],
    Admin: [
      {
        userName: "admin",
        passWord: "123456"
      }
    ],
    Cost: [
      {
        dormID: "02604",
        cost: 100
      },
      {
        dormID: "02605",
        cost: 200
      },
      {
        dormID: "02606",
        cost: 300
      },
      {
        dormID: "02607",
        cost: 400
      },
      {
        dormID: "02608",
        cost: 500
      },
      {
        dormID: "02609",
        cost: 600
      },
      {
        dormID: "02610",
        cost: 700
      }
    ],
    logs: []
  },
  onLoad: function () {
    wx.setStorage({
      key: 'stu',
      data: this.data.Stu,
    })
    wx.setStorage({
      key: 'admin',
      data: this.data.Admin,
    })
    wx.setStorage({
      key: 'cost',
      data: this.data.Cost,
    })
    wx.redirectTo({
      url: '../index/index',
    }) 
  }
})
