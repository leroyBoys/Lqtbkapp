// 获取全局应用程序实例对象
const app = getApp()
// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    curNav: 1,
    curIndex: 0,
    navLeftItems: [{ id: 0, desc: "牧师" }, { id: 1, desc: "法师" }, { id: 2, desc: "战士" }],
    navRightItems: [{ id: 112, nodes: [{ logo: "https://img.alicdn.com/bao/uploaded/i2/2050348130/TB17N0obE3IL1JjSZFMXXajrFXa_!!0-item_pic.jpg_250x250.jpg", desc: "不知道1" }, { logo: "https://img.alicdn.com/bao/uploaded/i2/2050348130/TB17N0obE3IL1JjSZFMXXajrFXa_!!0-item_pic.jpg_250x250.jpg", desc: "不知道2" }] },
    { id: 114, nodes: [{ logo: "https://img.alicdn.com/bao/uploaded/i2/2050348130/TB17N0obE3IL1JjSZFMXXajrFXa_!!0-item_pic.jpg_250x250.jpg", desc: "逗逼" }, { logo: "https://img.alicdn.com/bao/uploaded/i2/2050348130/TB17N0obE3IL1JjSZFMXXajrFXa_!!0-item_pic.jpg_250x250.jpg", desc: "不逗逼" }, { logo: "https://img.alicdn.com/bao/uploaded/i2/2050348130/TB17N0obE3IL1JjSZFMXXajrFXa_!!0-item_pic.jpg_250x250.jpg", desc: "不逗逼" }, { logo: "https://img.alicdn.com/bao/uploaded/i2/2050348130/TB17N0obE3IL1JjSZFMXXajrFXa_!!0-item_pic.jpg_250x250.jpg", desc: "不逗逼" }, { logo: "https://img.alicdn.com/bao/uploaded/i2/2050348130/TB17N0obE3IL1JjSZFMXXajrFXa_!!0-item_pic.jpg_250x250.jpg", desc: "不逗逼" }] }
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    wx.myapp.initPage(this);

  },//事件处理函数
  switchRightTab: function (e) {
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    this.setData({
      curNav: id,
      curIndex: index
    })
  }
  ,
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    console.log(" ---------- onReady ----------")
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    console.log(" ---------- onHide ----------")
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    console.log(" ---------- onUnload ----------")
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    console.log(" ---------- onPullDownRefresh ----------")
  }
})
