/**开发模式，正式环境此文件重置为空即可*/
const tmpData = require("tmpData.js");

function request(url) {
  return tmpData.request(url);
}

module.exports = {
  request: request
}