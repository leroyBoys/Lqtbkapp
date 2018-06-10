// 获取全局应用程序实例对象
const app = getApp()
const util = require("../../utils/util.js")

// 创建页面实例对象
Page({
  /** 系统配置 */
  systemConfig:{
    /**页面跳转的时候是否保存数据，如果false（默认）则直接卸载，下次重新加载 */
    isSave:true
  },
  /**
   * 页面的初始数据
   */
  data: {
    /** 头部广告 */
    ads:[],
    /** 类目列表 */
    cates:[],
    /** 广播频道 */
    channel:[],
    /** 展示模块(自动分页加载) */
    showDatas:[]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
    wx.tk_initFunctionPage(this);
    this.getMian();
  },

  getMian(){
    let page = this;
    wx.tk_util.request(wx.tk_config.baseURL+"index","GET").then((res)=>{
      console.log(res);
        page.setData(res);
    });
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
    console.log(" ---------- onShow =======----------")

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
