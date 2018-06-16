const shop = require("server/shop.js")
function getKey(key) {
  return new Promise((resolve, reject) => {
    wx.getStorage({
      key: key,
      success: function (res) {
        resolve(res.data)
      },
      fail: function () {
        resolve()
      }
    })
  })
}

class CacheKey {
  static valueLocal(key, updatechek) {
    return new CacheKey(key,null,updatechek,null);
  }

  static valueRequest(key, isOutTimeFunction, request) {
    return new CacheKey(key, isOutTimeFunction, null, request);
  }

  constructor(key, isOutTimeFunction, updatechek, request) {
    this.key = key;
    this.isOutTimeFunction = isOutTimeFunction;
    this.updatechek = updatechek;
    this.request = request;
  }

  get=function(){

    return new Promise((resolve, reject) => {
      getKey(this.key).then(res => {

        if (res && (!this.request || this.isOutTimeFunction && !this.isOutTimeFunction())) {
          resolve(res);
          return
        }
     
        if (!this.request){
          resolve();
          return
        }
        this.request(res).then(ret=>{
          this.update(ret);
          resolve(ret);

        }).catch(err => {
          resolve(null);
        });

      })
    })

  }
  update=function(obj){

    if(obj == null || obj.length == 0){
      return
    }

    if (this.updatechek) {
      obj = this.updatechek(this, obj);
    }
    console.log(this.key + "======88888888888888====save===============", obj);
    wx.setStorage({
      key: this.key,
      data: obj,
    })

  }
}

function searchHistoryCheck(cacheKey,data){
  let curData = wx.getStorageSync(cacheKey.key);
  if (!curData || curData.length == 0){
    return [data];
  }

  for(let d in curData){
    if (curData[d] == data){
      return curData;
    }
  }
  curData.push(data);
  if (curData.length > 10){
    curData.shift();
  }
  return curData;
}

function isTimeOut(data){
  return false;
}
module.exports= {
  searchHistory: CacheKey.valueLocal("_s01", searchHistoryCheck),
  hotSearch: CacheKey.valueRequest("_h1", isTimeOut, () => { return shop.request("hot")})
}
