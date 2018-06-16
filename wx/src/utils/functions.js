/**  page 配置功能组 */
const util = require("./util")
const shop = require("./server/shop.js")

module.exports={
  defaultFunctions :[util.clickLink],
  saoma :[util.saoma, shop.parseshop],
  form :[]
}