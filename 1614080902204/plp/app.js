//app.js
const AV = require('./utils/av-weapp.js');
App({
  onLaunch: function () {
    AV.init({
      appId: 'EJx0NSfYap2nSGsEWeM5n5WX-gzGzoHsz',
      appKey: 'FBVPg5GjFVIV2s8awT97SNQj',
    });
    AV.User.loginWithWeapp().then(user => {
      this.globalData.user = user.toJSON();
    }).catch(console.error);
  }
})