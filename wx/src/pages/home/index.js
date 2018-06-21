// 获取全局应用程序实例对象
const app = getApp()
// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    projectSource: 'https://github.com/liuxuanqiang/wechat-weapp-mall',
    userListInfo: [{
      icon: "icon-aaa",
      text: "我的拼团",
      isunread: true,
      unreadNum: 1,
      clickFunction:null,
      url:null,
      isHide:true
    }, {
        icon: "icon-shouhuodizhi",
        clickFunction:"clickLink",
        url:"/pages/user/address/list",
      text: "收货地址管理"
    }, {
        icon: "icon-iconfontfuwushichang",
      text: "联系客服"
    }, {
        icon: "icon-help",
        clickFunction: "clickLink",
        url: "/pages/user/questions",
      text: "常见问题"
    }, {
        icon: "icon-set",
        clickFunction: "clickLink",
        url: "/pages/user/setting",
      text: "系统设置"
    }]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
    wx.myapp.initPage(this);
    var that = this
    //调用应用实例的方法获取全局数据
   if (!app.checkLogin("/pages/home/index")) {
      return;
    };

    this.setData({
      userInfo: app.globalData.userInfo
    })
  },
  bindViewTap: function () {
    wx.navigateTo({
      url: '/pages/user/editor',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady () {
    console.log(" ---------- onReady ----------")
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow () {

  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide () {
    console.log(" ---------- onHide ----------")
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload () {
    console.log(" ---------- onUnload ----------")
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh () {
    console.log(" ---------- onPullDownRefresh ----------")
  }
})
