const cache = require("cache");
const util = require("util");
const json = require("json");
const config = require("config");
const countDown = require("./countDown.js");
const functions = require("functions");
const shop = require("server/shop");

function init(app) {
  console.log("初始化 myapp:");


  //绑定alert
  wx.myapp = Object.assign(util, cache, json, countDown,{
    ////服务器地址列表
    shop: shop
  });

  wx.myapp.initPage = initPage;
}

/**
 * 页面展示（第一次初始化和后台切换回来都会触发）
 */
function pageShow(page){
  if (page.hour_timer_register){
    page.hour_timer_register();
  }

}


 function initPage(page, jspath) {
  console.log(page.route + ":初始化 initFunctionPage page.initFunctionPage:" + page.initFunctionPage + " ");
  if (page.initFunctionPage) {
    pageShow(page);
    return;
  }
  page.initFunctionPage = true;
  let onshow = page.onShow;//绑定自定义onshow（含原先的onshow）方法
  page.onShow = function (res) {
    wx.curPage = page;
    onshow();
    pageShow(page);
  }

  //绑定页面逻辑js
  if (jspath) {
    jspath = ".." + jspath;
    let js = require(jspath);
    for (let k in js) {
      if (typeof (js[k]) == "function") {
        page[k] = js[k];
      }
    }
  }

  if (functions.defaultRegisterFunctions && functions.defaultRegisterFunctions.length > 0) {
    functions.defaultRegisterFunctions.map(n => {
      page[n.name] = n;
    });
  }

  if (page.systemConfig && page.systemConfig.functions && page.systemConfig.functions.length > 0) {
    page.systemConfig.functions.map(n => {
      if (!functions[n] || functions[n].length == 0) {
        return
      }

      functions[n].map(f => {
        page[f.name] = f;
      });
    });
  }

  pageShow(page);
}

module.exports = {
  init: init,
  initPage: initPage
}