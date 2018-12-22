// pages/post/create.js
const appInstance = getApp();
const AV = appInstance.$$AV;
const Utils = appInstance.$$Utils;
Page({
  data:{
    tempFilePaths: [],
    disabledSubmitBtn: false
  },
  doUpload() {
    var that = this;
    wx.chooseImage({
      success(res) {
        const tempFilePaths = that.data.tempFilePaths.concat(res.tempFilePaths);
        if (tempFilePaths.length > 4) {
          return appInstance.showErrorMsg({
            title: '图片不能超过四张'
          });
        }
        that.setData({
          tempFilePaths: tempFilePaths
        });
      }
    })
  },
  doPreviewImage(event) {
    wx.previewImage({
      current: event.currentTarget.dataset.fileUrl,
      urls: this.data.tempFilePaths
    });
  },
  doDelImage(event) {
    const tempFilePaths = this.data.tempFilePaths.concat([]);
    const index = tempFilePaths.findIndex(filePath => event.currentTarget.dataset.url == filePath);
    tempFilePaths.splice(index, 1);
    this.setData({
      tempFilePaths
    });
  },
  doSubmit(event) {
    const content = event.detail.value.content;
    if(typeof content === 'string' && (content.length == 0 || content.length > 500)) {
      return appInstance.showErrorMsg({
        title: '内容有误'
      });  
    }
    this.createPost(event.detail.value);
  },
  createPost(form) {
    this.setData({
      'disabledSubmitBtn': true
    });
    const alertError = (err) => {
        console.error(err);
        wx.hideLoading();
        appInstance.showErrorMsg({
          title: '发布失败'
        });
        this.setData({
          'disabledSubmitBtn': false
        });
    }
    if(this.data.tempFilePaths.length > 0) {
      wx.showLoading({
        title: '上传文件中...',
      });
    }
    let files = null;
    appInstance.getCurrentUser()
      .then(_user => {
        return appInstance.uploadFiles(this.data.tempFilePaths, file => {
          let acl = new AV.ACL();
          acl.setPublicReadAccess(true);
          acl.setWriteAccess(AV.User.current(), true);
          file.setACL(acl);
        });
      })
      .then(_files => {
        files = _files;
        files = files.map(file => {
          return {
            objectId: file.id,
            url: file.get('url')
          }
        });
        return new Promise((resolve, reject) => {
          wx.getSystemInfo({
            complete(sysInfo) {
              resolve(sysInfo);
            }
          });
        });
      })
      .then(sysInfo => {
        let device = '火星设备';
        if (form.anoymous === false) {
          try {
            device = sysInfo && typeof sysInfo.model === 'string' ? Utils.getPhoneName(sysInfo.model) : null;
          } catch (e) {}
        }
        let post = {
          content: form.content,
          photos: files,
          anoymous: form.anoymous,
          device,
          groupId: appInstance.getCurrGroup().objectId
        };
        AV.Cloud.run('createPost', post)
          .then(() => {
            wx.hideLoading();
            wx.showToast({
              title: '发布成功',
              icon: 'success'
            });
            appInstance.globalData.forceUpdatePosts = true;
            wx.navigateBack();
          })
          .catch(appInstance.catchError)
          .catch(alertError);

        })
        .catch(alertError)
  }
});