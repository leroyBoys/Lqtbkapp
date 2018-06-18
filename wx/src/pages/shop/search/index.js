// pages/shop/search/index.js

Page({
  systemConfig:{
    functions:["form","saoma"]
  },
  /**
   * 页面的初始数据
   */
  data: {
    shownavindex:0,
    hideForm:false,
    youhui:[
      {
        name: '优惠券',
        value: '1',
        checked: !1,
      },
      {
        name: '打折',
        value: '2',
        checked: !1,
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.myapp.initPage(this,"/pages/shop/search/form.js")
    
    if (options){
      this.setData(options);
    }
  },

  showForm:function(){
    if (!this.data.hideForm){
      return
    }
    this.data.hideForm = false;
    this.setData({
      hideForm: false
    });
  },
  hideForm: function () {
    if (this.data.hideForm) {
      return
    }
    this.data.hideForm = true;
    this.setData({
      hideForm: true
    });
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