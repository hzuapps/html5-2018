//suggest.js
  //获取应用实例
  var app = getApp();
  Page({
    data: {
      sugData:[] 
    },
    changeInputValue(ev){
      this.setData({
       inputVal:ev.detail.value
     })
   },
 //删除评价
   DelSug(ev){
     var n=ev.target.dataset.index;
 
     var list = this.data.sugData;
     list.splice(n,1);
     
     this.setData({
       sugData:list
     });
   },
 //添加评价
   addSug(){
     var list = this.data.sugData;
     list.push({
       sug:this.data.inputVal
     });
     //更新
     this.setData({
       sugData:list,
       inputVal:''
     }); 
   },
 })
