const util = require("../util.js");
const config = require("../config.js");

const baseURL = config.baseURL;
const request = function (url, method = "GET", data = {}){
  return new Promise(function (resolve, reject) {
    util.realRequest(baseURL, url, method, data).then((res) => {
      resolve(res);
    }).catch(err=>{
      reject(err);
    });
  });
}

const parseshop = function(url){
  wx.showLoading({
    title: "解析中",
  })

  request("parseshop","GET",{url:url}).then((res) => {
    wx.hideLoading();
    if (res.error || res == 0) {
      wx.myapp.alert("服务器解析失败，请手动填写商品id");
      return;
    }
  
    wx.redirectTo({ url: config.shopDetail(res) });
  }).catch((res) => {
    wx.myapp.uploadLog(res);
    wx.myapp.alert("解析失败，请手动填写商品id");
    wx.hideLoading();
  });
}

module.exports={
  request: request,
  parseshop: parseshop
}