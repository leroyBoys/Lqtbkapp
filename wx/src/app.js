/**
 * API module
 * @type {Object}
 * 用于将微信官方`API`封装为`Promise`方式
 * > 小程序支持以`CommonJS`规范组织代码结构
 */
const myapp = require("utils/myapp.js")
App({
  /**
   * Global shared
   * 可以定义任何成员，用于在整个应用中共享
   */
  globalData: {
    userInfo: null
  },
  /**
   * 生命周期函数--监听小程序初始化
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch () {
  	//初始化方法 绑定
    myapp.init(this);
  },
  /**
   * 生命周期函数--监听小程序显示
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow () {
 
    console.log(" ========== Application is showed ========== ")
  },
  /**
   * 生命周期函数--监听小程序隐藏
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide () {
    console.log(" ========== Application is hid ========== ")
  },
  /**
   * 检测是否登录
   * @param {Object} fromurl
   */
  checkLogin:function(fromurl){
      if (!this.globalData.userInfo) {
        wx.redirectTo({
          url: "/pages/login/login?from=" + fromurl,
        });
        return false;
      }
      return true;
  }
})
