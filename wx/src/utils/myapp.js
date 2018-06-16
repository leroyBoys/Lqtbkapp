const cache = require("cache");
const util = require("util");
const json = require("json");
const config = require("config");
const functions = require("functions");
const shop = require("server/shop");

function init(app) {
  console.log("初始化 myapp:");

  //绑定alert
  wx.myapp = Object.assign(util, cache, json,{
    ////服务器地址列表
    shop: shop
  });

  wx.myapp.initPage = initPage;
}
 function initPage(page, jspath) {
  console.log(page.route + ":初始化 initFunctionPage page.initFunctionPage:" + page.initFunctionPage + " ");
  if (page.initFunctionPage) {
    return;
  }
  page.initFunctionPage = true;
  let onshow = page.onShow;//绑定自定义onshow（含原先的onshow）方法
  page.onShow = function (res) {
    wx.curPage = page;
    onshow();
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

  if (functions.defaultFunctions && functions.defaultFunctions.length > 0) {
    functions.defaultFunctions.map(n => {
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
}

module.exports = {
  init: init,
  initPage: initPage
}