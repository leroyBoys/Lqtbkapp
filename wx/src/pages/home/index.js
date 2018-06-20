// 获取全局应用程序实例对象
const app = getApp()
// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    projectSource: 'https://github.com/liuxuanqiang/wechat-weapp-mall',
    userListInfo: []
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
    wx.myapp.shop.request('my', 'POST').then((res) => {
      that.setData({
        userListInfo: res
      })
    });

  },
  bindViewTap: function () {
    wx.redirectTo({
      url: '/pages/useredite/useredite',
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
