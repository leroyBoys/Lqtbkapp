// page/address/edit.js
Page({
  data: {id:1},
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  clik(){
    if (this.data.id++%2==0){
      this.setData({
        msg: null
    });
    }else{
      this.setData({
        msg: "你好恭喜" + this.data.id
      });
    }
   
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})