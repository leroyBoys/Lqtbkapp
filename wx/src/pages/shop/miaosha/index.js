// 获取全局应用程序实例对象
const app = getApp()
// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: "home",
    timeindex: -1,
    userchoiceIdex: 0,
    timeZones: []
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    wx.myapp.initPage(this);
//    this.checktime(this);
    this.data.timeZones = wx.myapp.autoTimeZones();
    this.setData({
      timeZones: this.data.timeZones
    });
  },
  choiceTime (e){

   this.setData({
     userchoiceIdex: e.currentTarget.dataset.value
   });
  },
  hour_timer_register(){
 
    let that = this;
    wx.myapp.hour_timer_register(this, "miaosha", false, function (time, index, timeDesc) {
      let timeindex = that.data.timeindex;
      if (timeindex == -1){
        timeindex = 0;
        let zones = that.data.timeZones;
        for (var i = 0; i <= zones.length; i++) {
          if (zones[i] == timeDesc) {
            break;
          }
          timeindex++
        }

        that.data.userchoiceIdex = timeindex;
        that.setData({
          userchoiceIdex: that.data.userchoiceIdex
        });
      } else if (that.data.timeZones[timeindex] != timeDesc){
        timeindex++;
        if (timeindex + 1 > that.data.timeZones.length){
          timeindex = 0;
        }
      }else{
        that.setData({
          countDownTime: time
        });
        return
      }
    
      that.data.timeindex = timeindex;
      that.setData({
        timeindex: timeindex,
        countDownTime: time
      });
    });
  },
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
   // this.checktime(this);
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
