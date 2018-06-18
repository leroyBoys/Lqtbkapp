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
    timeZones: [
      "00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00",
      "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"
    ]
  },
  checktime: function (page) {
    //console.log(page.route + "===============checktime==============", wx.curPage);
    if (wx.curPage && page.route != wx.curPage.route) {
      return
    }
    let date = new Date();
    let hour = date.getHours()
    let min = date.getMinutes()

    let timeindex = this.data.timeindex;
    if (timeindex == -1) {
      timeindex = 0;

      let zones = this.data.timeZones;
      for (var i = 0; i <= zones.length; i++) {
        let md = zones[i].split(":")[0];
        if (md == hour) {
          break;
        }
        console.log(hour + "-----" + md);
        timeindex++

      }
      this.data.userchoiceIdex = timeindex;
      this.setData({
        userchoiceIdex: this.data.userchoiceIdex
      });
    } else {
      let md = this.data.timeZones[timeindex].split(":")[0];
      if (md < hour) {
        md++;
        if (md == 24) {
          timeindex = 0;
        } else {
          timeindex++;
        }
      }
    }
    let countDownTime;
    if (timeindex == this.data.timeZones.length - 1) {
      countDownTime = wx.myapp.countDownTime("24")

    } else {
      countDownTime = wx.myapp.countDownTime(this.data.timeZones[timeindex + 1]);
    }
    let str = "";

    if (timeindex != this.data.timeindex) {
      this.data.timeindex = timeindex;
      this.setData({
        timeindex: timeindex,
        countDownTime: countDownTime
      });
    } else {
      this.setData({
        countDownTime: countDownTime
      });
    }

    setTimeout(n => { this.checktime(page) }, 1000);
  },
  choiceTime: function (e) {
    console.log(e);

    this.setData({
      userchoiceIdex: e.currentTarget.dataset.value
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    wx.myapp.initPage(this);
    this.checktime(this);
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
    this.checktime(this);
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
