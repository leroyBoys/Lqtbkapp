
module.exports = {
  /**
    *
    * 字符串-json
    */
  stringToJson: function (data) {
    return JSON.parse(data);
  },
  /**
  *json-字符串
  */
  jsonToString: function (data) {
    return JSON.stringify(data);
  },
  /**
  *map转换为json
  */
  mapToJson: function (map) {
    return JSON.stringify(strMapToObj(map));
  },
  /**
  *json转换为map
  */
  jsonToMap: function (jsonStr) {
    return objToStrMap(JSON.parse(jsonStr));
  }
  ,

  /**
  *map转化为对象（map所有键都是字符串，可以将其转换为对象）
  */
  strMapToObj: function (strMap) {
    let obj = Object.create(null);
    for (let [k, v] of strMap) {
      obj[k] = v;
    }
    return obj;
  }
  ,
  /**
  *对象转换为Map
  */
  objToStrMap: function (obj) {
    let strMap = new Map();
    for (let k of Object.keys(obj)) {
      strMap.set(k, obj[k]);
    }
    return strMap;
  }

}