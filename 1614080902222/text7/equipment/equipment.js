var app = getApp()
Page({
  data: {
    navbar: ['武器', '防具', '首饰','特殊装备'],
    currentTab: 0,
    open1:false,
    open2:false,
    open3:false,
    open4:false,
    open5:false,
    open11: false,
    open22: false,
    open33: false,
    open44: false,
    open55: false,
    open111:false,
    open222:false,
    open333:false,
    open444:false
    
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  showitem1: function () {
    
    this.setData({
      
      open1: !this.data.open1,
     
      open2: false,
      open3: false,
      open4: false,
      open5: false,
      open11: false,
      open22: false,
      open33: false,
      open44: false,
      open55: false,
      open111: false,
      open222: false,
      open333: false,
      open444: false
    })
  },
  showitem2: function () {
  
    this.setData({
     
      open2: !this.data.open2,
      open1: false,
 
      open3: false,
      open4: false,
      open5: false,
      open11: false,
      open22: false,
      open33: false,
      open44: false,
      open55: false,
      open111: false,
      open222: false,
      open333: false,
      open444: false
    })
  },
  showitem3: function () {

    this.setData({

      open3: !this.data.open3,
      open1: false,
      open2: false,
    
      open4: false,
      open5: false,
      open11: false,
      open22: false,
      open33: false,
      open44: false,
      open55: false,
      open111: false,
      open222: false,
      open333: false,
      open444: false
    })
  },
  showitem4: function () {

    this.setData({

      open4: !this.data.open4,
      open1: false,
      open2: false,
      open3: false,

      open5: false,
      open11: false,
      open22: false,
      open33: false,
      open44: false,
      open55: false,
      open111: false,
      open222: false,
      open333: false,
      open444: false
    })
  },
  showitem5: function () {

    this.setData({

      open5: !this.data.open5,
      open1: false,
      open2: false,
      open3: false,
      open4: false,
 
      open11: false,
      open22: false,
      open33: false,
      open44: false,
      open55: false,
      open111: false,
      open222: false,
      open333: false,
      open444: false
    })
  },

  showitem11: function () {

    this.setData({

      open11: !this.data.open11,
      open1: false,
      open2: false,
      open3: false,
      open4: false,
      open5: false,
     
      open22: false,
      open33: false,
      open44: false,
      open55: false,
      open111: false,
      open222: false,
      open333: false,
      open444: false

    })
  },
  showitem22: function () {

    this.setData({

      open22: !this.data.open22,
      open1: false,
      open2: false,
      open3: false,
      open4: false,
      open5: false,
      open11: false,
    
      open33: false,
      open44: false,
      open55: false,
      open111: false,
      open222: false,
      open333: false,
      open444: false
    })
  },
  showitem33: function () {

    this.setData({

      open33: !this.data.open33,
      open1: false,
      open2: false,
      open3: false,
      open4: false,
      open5: false,
      open11: false,
      open22: false,

      open44: false,
      open55: false,
      open111: false,
      open222: false,
      open333: false,
      open444: false
    })
  },
  showitem44: function () {

    this.setData({

      open44: !this.data.open44,
      open1: false,
      open2: false,
      open3: false,
      open4: false,
      open5: false,
      open11: false,
      open22: false,
      open33: false,
   
      open55: false,
      open111: false,
      open222: false,
      open333: false,
      open444: false
    })
  },
  showitem55: function () {

    this.setData({

      open55: !this.data.open55,
      open1: false,
      open2: false,
      open3: false,
      open4: false,
      open5: false,
      open11: false,
      open22: false,
      open33: false,
      open44: false,
  
      open111: false,
      open222: false,
      open333: false,
      open444: false
    })
  },
  showitem111: function () {

    this.setData({

      open111: !this.data.open111,
      open1: false,
      open2: false,
      open3: false,
      open4: false,
      open5: false,
      open11: false,
      open22: false,
      open33: false,
      open44: false,
      open55: false,

      open222: false,
      open333: false,
      open444: false
    })
  },
  showitem222: function () {

    this.setData({

      open222: !this.data.open222,
      open1: false,
      open2: false,
      open3: false,
      open4: false,
      open5: false,
      open11: false,
      open22: false,
      open33: false,
      open44: false,
      open55: false,
      open111: false,

      open333: false,
      open444: false
    })
  },
  showitem333: function () {

    this.setData({

      open333: !this.data.open333,
      open1: false,
      open2: false,
      open3: false,
      open4: false,
      open5: false,
      open11: false,
      open22: false,
      open33: false,
      open44: false,
      open55: false,
      open111: false,
      open222: false,
 
      open444: false
    })
  },
  showitem444: function () {

    this.setData({

      open444: !this.data.open444,
      open1: false,
      open2: false,
      open3: false,
      open4: false,
      open5: false,
      open11: false,
      open22: false,
      open33: false,
      open44: false,
      open55: false,
      open111: false,
      open222: false,
      open333: false
   
    })
  },
}) 