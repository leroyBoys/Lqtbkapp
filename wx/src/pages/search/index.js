// 获取全局应用程序实例对象
const app = getApp()

// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    historys:[],
    hots:[],
    keyword:"爱你在心口难开"
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {
    wx.myapp.initPage(this)
    console.log("======",this);

    this.showHistory();

    if (options){
      if (options.keyword.length == 0){
        options.keyword = this.data.keyword;
      }
      this.setData(options);
    }
  },
   showInput: function () {
        this.setData({
            inputShowed: true
        });
    },
    hideInput: function () {
        this.setData({
          keyword: "",
            inputShowed: false
        });
    },
    clearInput: function () {
      this.setData({
        keyword: ""
      });
      this.showHistory();
    },
    inputTyping: function (e) {
      let keywords=[];
      if (e.detail.value.length == 0){
        this.showHistory()
      }else{
        keywords = wx.myapp.getKeyWords(e.detail.value);
      }

        this.setData({
          keyword: e.detail.value,
          keywords: keywords
        });
    },
    showHistory(){
      let that = this;
      let cache = wx.myapp;
      cache.searchHistory.get().then((res)=>{
        if (!res){
          return;
        }
        console.log(res);
        that.setData({
          historys: res
        });
      });
      cache.hotSearch.get().then((res) => {
        if (!res) {
          return;
        }

        that.setData({
          hots: res.split(",")
        });
      });
    },

    beginSearch(e){
      let txt = e.target.dataset.value;
      if(txt.trim().length == 0){
        return
      }
      let cache = wx.myapp;

      cache.searchHistory.update(txt);
        wx.redirectTo({
          url: '/pages/shop/search/index?keyword=' + e.target.dataset.value,
        })
    },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady () {
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
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload () {
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh () {
  }
})
