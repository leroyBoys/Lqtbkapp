  /**解析商品id的地址 */
let parseShopIdURL = "";
   /**商品详情页的方法 */
let shopDetailURL = "";

function parseShopIdFunction(url){
  return parseShopIdURL+"?url="+url;
}

function shopDetailFunction(url) {
  return shopDetailURL + "?id=" + url;
}

module.exports = {
  baseURL: "http:www.baiud.com",
  /**解析商品id的地址方法 */
  parseShopId: parseShopIdFunction,
   /**商品详情页的方法 */
  shopDetail: shopDetailFunction,
}