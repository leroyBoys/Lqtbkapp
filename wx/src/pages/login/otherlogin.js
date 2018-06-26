// pages/login/otherlogin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fromURl: null
  },

  login: function (event) {
    let value = event.detail.value;

    if (value.name.length == 0 || value.password.length == 0) {
      wx.myapp.alert('用户名和密码不能为空');
    } else {

      wx.myapp.shop.request("/user/login","POST",value).then(res=>{
        if (!res || res.code){
          wx.myapp.alert('用户名或者密码错误');
          return
        }
        // 这里修改成跳转的页面  
        wx.showToast({
          title: '登录成功',
          icon: 'success',
          duration: 2000
        })
      })
   
    }
  }  ,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.fromURL = options ? options.from : null;
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