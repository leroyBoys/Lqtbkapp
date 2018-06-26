/**  page 配置功能组 */
const util = require("./util")
const countDown = require("./countDown.js")
const shop = require("./server/shop.js")

module.exports={
  defaultRegisterFunctions: [util.clickLink, util.bindToggleAttr, util.clickRedirectTo],
  saoma :[util.saoma, shop.parseshop],
  form: [util.bindchange]
}