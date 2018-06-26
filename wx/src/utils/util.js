
function formatTime(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();

  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();


  return [year, month, day].map(formatNumber).join("/") + " " + [hour, minute, second].map(formatNumber).join(":");
}

function countDownTime(time) {
  let timeArray = time.split(":");
  let targetHour = 1;
  let targetMin = 0;
  let targetSec = 0;
  if (timeArray.length == 1) {
    targetHour = parseInt(timeArray[0]);
  } else if (timeArray.length == 2) {
    targetHour = parseInt(timeArray[0]);
    targetMin = parseInt(timeArray[1]);
  }else{
    targetHour = parseInt(timeArray[0]);
    targetMin = parseInt(timeArray[1]);
    targetSec = parseInt(timeArray[2]);
  }

  let target = targetHour * 3600 + targetMin * 60 + targetSec;

  let date = new Date();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  let now = hour * 3600 + minute * 60 + second;

  let dif = target - now;
  hour = Math.floor(dif/3600);
  dif = dif % 3600;
  minute = Math.floor(dif/60);
  dif = dif % 60;
  second = Math.floor(dif);
  
  return [hour, minute, second].map(formatNumber).join(":")
}

function countDownDate(time) {
  let timeArray = time.split(":");
  let targetHour = 1;
  let targetMin = 0;
  let targetSec = 0;
  if (timeArray.length == 1) {
    targetHour = parseInt(timeArray[0]);
  } else if (timeArray.length == 2) {
    targetHour = parseInt(timeArray[0]);
    targetMin = parseInt(timeArray[1]);
  } else {
    targetHour = parseInt(timeArray[0]);
    targetMin = parseInt(timeArray[1]);
    targetSec = parseInt(timeArray[2]);
  }
  let target = targetHour * 3600 + targetMin * 60 + targetSec;

  let date = new Date();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  let now = hour * 3600 + minute * 60 + second;

  let dif = target - now;
  hour = dif / 3600;
  dif = dif % 3600;
  minute = dif / 60;
  dif = dif % 60;
  second = dif / 60;
  return [hour, minute, second];
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : "0" + n;
}

function request(host,url, method = "GET", data = {}) {
  let header = {
    "content-type": "application/json",
    "X-ECAPI-Sign": "",
    "X-ECAPI-UDID": "",
    "X-ECAPI-UserAgent": "Platform/Wechat",
    "X-ECAPI-Ver": "1.1.0"
  };

  let token = wx.getStorageSync("token") || "";
  if (token) {
    header["X-ECAPI-Authorization"] = token;
  }

  return new Promise(function (resolve, reject) {
    wx.request({
      url: host + url,
      method: method,
      data: data,
      header: header,
      success: function (res) {
        if (res.data.error_code === 0) {
          resolve(res.data);
        } else {
          reject(res.data);
        }
      },
      fail: function (err) {
        wx.showToast({
          title: "网络加载失败",
        });
      }
    });
  });
}

function getKeyWords(res){
  return [res, res, res];
}

function newThread(run){
  return new Promise(function (resolve, reject) {
    resolve();
  }).then(run);
}

function showToast(title, type = "error") {
  let image = "";
  switch (type) {
    case "error":
      image = "/images/icon_error.png";
      break;
    case "success":
      image = "/images/icon_success.png";
      break;
    case "warning":
      image = "/images/icon_warning.png";
      break;
  }
  wx.showToast({
    title: title,
    image: image,
    duration: 0,
    mask: true,
    success: function (res) { },
    fail: function (res) { },
    complete: function (res) { },
  })
}


function getCurPage() {
  if (wx.curPage){
    return wx.curPage;
  }
  let pages = getCurrentPages();
  return pages[pages.length - 1];
}


function arrayToString(array){
  console.log(array);
  let str ="";
  for(let i =0;i<array.length;i++){
    if(i != 0){
      str += ",";
    }
    str += array[i];
  }
  return str;
}


function clickRedirectTo(e){
  let url = e.target.dataset ? e.target.dataset.url : null;
  if (!url) {
    console.error("未设置 data-url");
    return
  }
  _clickRedirectTo(url);
}

/** 不保留当前页面 */
function _clickRedirectTo(url) {
  console.log("==>redirectTo");
  wx.redirectTo({
    url: url,
    fail: function () {
      wx.switchTab({
        url: url,
        fail: function () {
          console.error(url + " is fail in");
        }
      })
    }
  })
}

/** 保留当前页面 */
function _clickNavigateTo(url) {
  console.log("==>navigateTo");
  wx.navigateTo({
    url: url,
    fail: function () {
      wx.switchTab({
        url: url,
        fail: function () {
          console.error(url + " is fail in");
        }
      })
    }
  })
}

/** 根据当前页面设置是否保留跳转 */
function clickLink(e){
  let url = e.currentTarget.dataset ? e.currentTarget.dataset.url:null;
  if (!url){
    console.warn("未设置 data-url");
    return
  }
  /**let systeConfig = wx.curPage.systemConfig;
  if (!systeConfig || !systeConfig.isSave){
    _clickRedirectTo(url);
    return
  }**/
  _clickNavigateTo(url);
}

function downFile(url,obj,callback){
  wx.downloadFile({
    url: url, //仅为示例，并非真实的资源
    success: function (res) {
      // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
      if (res.statusCode === 200) {
        wx.saveFile({
          tempFilePath: res.tempFilePath,
          success: function (ress) {
            var savedFilePath = ress.savedFilePath;
            callback(obj,savedFilePath);
          }
        })
      }
    }
  })
}
function saoma(e) {
  let callback = this[e.currentTarget.dataset.suc];
  callback = callback ? callback : function (res) { wx.myapp.alert("请设置suc方法，返回值:" + res)}
  wx.scanCode({
    success: (res) => {
    },
    fail: (res) => {
      res.error = "fail";
    },
    complete: (res) => {
      if (res.error) {
        alert(res);
        return;
      }
      callback(res);
    }
  })
}
function alert(msg) {
  let page = getCurPage();
  if (!page) {
    console.log("未初始化page,当前msg:" + msg);
    return;
  }

  console.log(msg);
  page.setData({
    tipitem: {
      text: null
    }
  });
  page.setData({
    tipitem: {
      text: msg
    }
  });
}

function bindchange(e){
    console.log(e);
    let values = e.detail.value;
    let switchName = e.currentTarget.dataset.attr;
    if (!switchName || switchName.length == 0) {
      console.error("参数缺少attr");
      return
    }

    let newData = {};
    newData[switchName] = this.data[switchName].map(n=>{
      return Object.assign({}, n, {
        checked: values.includes(n.value),
      })
    })
   
    this.setData(newData)
}

/** 
 * 点击事件触发自动修改切换相对应的属性和内容（只针对data的属性或者只有一层数组）
 * 格式：
 * data-attr="属性名字"或者  "数组属性名字,数组索引,属性名字"
 * data-update="值1,值2"
 */
function bindToggleAttr(e) {
  let switchName = e.currentTarget.dataset.attr;
  if (!switchName || switchName.length == 0) {
    console.error("参数缺少attr");
    return
  }

  let switchValue = e.currentTarget.dataset.update;
  if (!switchValue || switchValue.length == 0) {
    console.error("参数缺少update");
    return
  }
  let data = this.data;
  let valueArray = switchValue.split(",");
  let array = switchName.split(",");
  let oldValue;
  if (array.length == 3) {
    oldValue = data[array[0]][array[1]][array[2]]
  } else if (array.length == 1) {
    oldValue = data[switchName];
  } else {
    console.error("参数缺少，格式,数组属性名字,数组索引,对象属性名字");
    return
  }

  if (valueArray.length == 1) {
    oldValue = switchValue;
  } else if (oldValue == valueArray[0]) {
    oldValue = valueArray[1];
  } else {
    oldValue = valueArray[0];
  }
  oldValue = oldValue == "null" ? null : oldValue

  let newData = {};
  if (array.length == 3) {
    let targetIndexStr = array[0] + "[" + array[1] + "]." + array[2];
    newData[targetIndexStr] = oldValue
  } else if (array.length == 1) {
    newData[switchName] = oldValue
  }
  this.setData(newData);
  if (this.bindToggleAttrSuc){
    this.bindToggleAttrSuc(e);
  }
 
}

/** 错误日志上报 */
function uploadLog(msg){

  console.log(msg+"错误日志上报");
}

/**正式测试环境切换路由 */
let realRequest = request;
try{
  const dev = require("../tmp/dev.js");
  if (dev && dev.request && dev.isTest) {
    realRequest = dev.request;
  }
}catch(e){
}

module.exports = {
  formatTime,
  request,
  realRequest,
  showToast,
  newThread,
  clickLink,
  alert,
  uploadLog,
  downFile,
  getKeyWords,
  arrayToString,
  saoma,
  bindToggleAttr,
  bindchange,
  countDownTime,
  countDownDate,
  clickRedirectTo
  
}