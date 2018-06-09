var config = require("../utils/config.js");

var data = [];
data[key("0")] = [
  {
    url: "http://www.lsh123.com/img/bb/9c9e97710b2db4b7efb027",
    name: "饮料/水"
  }, {
    url: "http://www.lsh123.com/img/bb/fde2310b09de5d51af71d5",
    name: "方便速食"
  }, {
    url: "http://www.lsh123.com/img/bb/dfa0850f4150501ba1b658",
    name: "饼干糕点"
  }, {
    url: "http://www.lsh123.com/img/bb/57b9c81b6dadb0c451adf2",
    name: "酒类"
  }, {
    url: "http://www.lsh123.com/img/bb/4536140a98ed604e5214f5",
    name: "糖果休食"
  }, {
    url: "http://www.lsh123.com/img/bb/1f48388f641bb615addbb5",
    name: "调料干货"
  }, {
    url: "http://www.lsh123.com/img/bb/011ca600a92429e9425692",
    name: "坚果炒货"
  }
];

data[key("cate1")] = {
  navLeftItems: [{ id: 0, desc: "牧师" }, { id: 1, desc: "法师" }, { id: 2, desc: "战士" }],
  navRightItems: [{ id: 112, nodes: [{ logo: pic("1.jpg"), desc: "不知道1" }, { logo: pic("2.jpg"), desc: "不知道2" }] },
  { id: 114, nodes: [{ logo: pic("1.jpg"), desc: "逗逼" }, { logo: pic("2.jpg"), desc: "不逗逼" }, { logo: pic("2.jpg"), desc: "不逗逼" }, { logo: pic("2.jpg"), desc: "不逗逼" }, { logo: pic("2.jpg"), desc: "不逗逼" }] }
  ]
};

function pic(img) {
  return "../../tmp/images/" + img;
}
function icon(img) {
  return "../../static/icon/" + img;
}
function key(key) {
  return config.baseURL + key;
}

function request(url, method = "GET", redata = {}) {
  var redata = new Array();
  if (url == config.baseURL + "1") {
    redata.push({ src: pic("1.jpg") });
    data.push({ src: pic("2.jpg") });
  } else if (url == config.baseURL + "2") {
    redata.push({ title: "你牛逼" });
    redata.push({ title: "单身贵族" });
  } else if (url == config.baseURL + "3") {
    redata.push({ src: pic("1.jpg"), id: 110, name: "niubai", current_price: 11 });
    redata.push({ src: pic("2.jpg"), id: 112, name: "n哈哈ai", current_price: 11 });
   
    redata = {
      good_products: redata,
      hot_products: [{ src: pic("2.jpg"), id: 112, name: "n哈哈ai", current_price: 11 }],
      recently_products: redata
    };
  } else if (url == config.baseURL + "6") {
    redata.push({ id: 11, name: "就是你", categories: { id: 121, name: "h哈哈" } });
    redata.push({ id: 12, name: "登录", categories: { id: 123, name: "看看哈哈" } });
  } else if (url == config.baseURL + "7") {
    redata.push({ id: 11, name: "就是你", categories: { id: 121, name: "h哈哈" } });
    redata.push({ id: 12, name: "登录", categories: { id: 123, name: "看看哈哈" } });
  } else {
    redata = data[url];
  }

 
  return new Promise(function (resolve, reject) {
    resolve(redata);
  });
}
module.exports = {
  request: request
}



data[key("my")] = [{
  icon: icon("iconfont-dingdan.png"),
  text: "我的订单",
  isunread: true,
  unreadNum: 2
}, {
  icon: icon("iconfont-card.png"),
  text: "我的代金券",
  isunread: false,
  unreadNum: 2
}, {
  icon: icon("iconfont-icontuan.png"),
  text: "我的拼团",
  isunread: true,
  unreadNum: 1
}, {
  icon: icon("iconfont-shouhuodizhi.png"),
  text: "收货地址管理"
}, {
  icon: icon("iconfont-kefu.png"),
  text: "联系客服"
}, {
  icon: icon("iconfont-help.png"),
  text: "常见问题"
}];

data[key("detail1")] = {
  shopppingDetails: { title: "最新长裙游戏第三方时代发生地方新长裙游戏第三方时代发生地方新长裙游戏第三方时代发生地方", reason: "就是喜欢你喜欢你喜欢你喜欢你喜欢你喜欢你喜欢你喜欢你喜欢你喜欢你喜欢你喜欢你喜欢你喜欢你喜欢你喜欢你喜欢你喜欢你" },
  goodsPicsInfo: [{ picurl: pic("3.jpg") }]
};

data[key("brand")] = [{ id: 101, logo: icon("iconfont-icontuan.png"), chinesename: "逗逼", pic: pic("1.jpg"), brief: "briefsss", minprice: "12.23" }, { id: 101, logo: icon("iconfont-icontuan.png"), chinesename: "逗逼", pic: pic("1.jpg"), brief: "briefsss", minprice: "12.23" }];
data[key("brandList")] = [{ id: 101, title: "逗逼", goodspics: pic("1.jpg"), marketprice: "63", ourprice: "12.23", country: "火星", bigname: "坐标T" },
{ id: 101, title: "逗逼s", goodspics: pic("1.jpg"), marketprice: "63", ourprice: "12.23", country: "火ss星", bigname: "坐标ssT" }];

data[key("pubu")] = [{ dateDay: "1987-5-10", stories: [{ id: 110, title: "看着不爽吗", images: pic("3.jpg") }, { id: 110, title: "揍他丫的", images: pic("2.jpg") }, { id: 110, title: "看着不爽吗", images: pic("3.jpg") }, { id: 110, title: "冲啊", images: pic("3.jpg") }, { id: 110, title: "为了革命的成功", images: pic("1.jpg") }, { id: 110, title: "看着不爽吗", images: pic("3.jpg") }] }, { dateDay: "1987-5-10", stories: [{ id: 110, title: "看着不爽吗", images: pic("3.jpg") }, { id: 110, title: "揍他丫的", images: pic("2.jpg") }, { id: 110, title: "看着不爽吗", images: pic("3.jpg") }, { id: 110, title: "冲啊", images: pic("3.jpg") }, { id: 110, title: "为了革命的成功", images: pic("1.jpg") }, { id: 110, title: "看着不爽吗", images: pic("3.jpg") }] }, { dateDay: "1987-5-10", stories: [{ id: 110, title: "看着不爽吗", images: pic("3.jpg") }, { id: 110, title: "揍他丫的", images: pic("2.jpg") }, { id: 110, title: "看着不爽吗", images: pic("3.jpg") }, { id: 110, title: "冲啊", images: pic("3.jpg") }, { id: 110, title: "为了革命的成功", images: pic("1.jpg") }, { id: 110, title: "看着不爽吗", images: pic("3.jpg") }] }];



data[key("book")] = {
  title: "论马克思主义的重要性",
  databody: ["就是你丫的又在发疯", { image: "https://gd4.alicdn.com/imgextra/i4/856979316/TB2TCQcllDH8KJjSszcXXbDTFXa_!!856979316.jpg" }, "中华民族到了最危险的时候中华民族到了最危险的时候中华民族到了最危险的时候中华民族到了最危险的时候中华民族到了最危险的时候"],
  comments: [
    { avatar: pic("2.jpg"), likes: "哈哈哈嘿嘿嘿", author: "从未成功", content: "什么样的文字啊", times: "2989-18-25 26:23:59" }
  ]
};