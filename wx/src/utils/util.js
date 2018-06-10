const config = require("config.js");
function formatTime(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();

  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();


  return [year, month, day].map(formatNumber).join("/") + " " + [hour, minute, second].map(formatNumber).join(":");
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : "0" + n;
}

function request(url, method = "GET", data = {}) {
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
      url: url,
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

function alert(msg){
  let page = getCurPage();
  if (!page){
    console.log("未初始化page,当前msg:"+msg);
    return;
  }
  page.setData({
    tipitem:{
      text: msg
    }
  });
  setTimeout(function(){
    page.setData({
      tipitem: {
        text: null
      }
    });
  },3000)
}


function bindSaoMa(page) {
  page.saoma = function (event) {
    
    wx.scanCode({
      success: (res) => {
      },
      fail: (res) => {
        res.error = "fail";
      },
      complete: (res) => {
        if (res.error){
          alert(res);
          return;
        }
        wx.showLoading({
          title: "解析中",
        })

        realRequest(config.parseShopId(res.result)).then((res)=>{
          wx.hideLoading();
          if(res.error || res == 0){
            alert("服务器解析失败，请手动填写商品id");
            return;
          }
          alert(res);
          wx.redirectTo({ url: config.shopDetail(res)});
        }).catch((res)=>{
          uploadLog(res);
          alert("解析失败，请手动填写商品id");
          wx.hideLoading();
        });

      }
    })
  }
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
  let url = e.target.dataset ?e.target.dataset.url:null;
  if (!url){
    console.warn("未设置 data-url");
    return
  }
  let systeConfig = wx.curPage.systemConfig;
  if (!systeConfig || !systeConfig.isSave){
    _clickRedirectTo(url);
    return
  }
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

/** 错误日志上报 */
function uploadLog(msg){

  console.log(msg+"错误日志上报");
}

/**初始化绑定wx事件 */
function initFunctionBind(app) {
  //绑定alert
  wx.tk_alert = alert;
  wx.tk_uploadLog = uploadLog;
  wx.tk_initFunctionPage = initFunctionPage;
  wx.tk_util = utilData;
  wx.tk_config = config;
}

function initFunctionPage(page){
  console.log(page.route+":初始化 initFunctionPage page.initFunctionPage:" + page.initFunctionPage + " ");
  if (page.initFunctionPage){
    return;
  }
  let onshow = page.onShow;//绑定自定义onshow（含原先的onshow）方法
  page.onShow = function(res){
    wx.curPage = page;
    onshow();
  }

  //绑定统一的clickLink标签方式
  page.clickLink = clickLink;
  page.clickRedirectTo = clickRedirectTo;

}

/**正式测试环境切换路由 */
let realRequest = request;
try{
  const dev = require("../tmp/dev.js");
  if (dev && dev.request) {
    realRequest = dev.request;
  }
}catch(e){
}

let utilData = {
  formatTime: formatTime,
  request: realRequest,
  realRequest: request,
  showToast: showToast,
  bindSaoMa: bindSaoMa,
  initFunctionBind: initFunctionBind,
  newThread: newThread,
  downFile: downFile
}
module.exports = utilData