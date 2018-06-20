var config = require("../utils/config.js");

var data = [];

let cates = [
  {
    src: "http://www.lsh123.com/img/bb/9c9e97710b2db4b7efb027",
    name: "饮料/水",
    url:"/pages/shopList/shopList"
  }, {
    src: "http://www.lsh123.com/img/bb/fde2310b09de5d51af71d5",
    name: "方便速食",
    url: "/pages/shopList/shopList"
  }, {
    src: "http://www.lsh123.com/img/bb/dfa0850f4150501ba1b658",
    name: "饼干糕点",
    url: "/pages/shopList/shopList"
  }, {
    src: "http://www.lsh123.com/img/bb/57b9c81b6dadb0c451adf2",
    name: "酒类",
    url: "/pages/shopList/shopList"
  }, {
    src: "http://www.lsh123.com/img/bb/4536140a98ed604e5214f5",
    name: "糖果休食",
    url: "/pages/shopList/shopList"
  }, {
    src: "http://www.lsh123.com/img/bb/1f48388f641bb615addbb5",
    name: "调料干货",
    url: "/pages/shopList/shopList"
  }, {
    src: "http://www.lsh123.com/img/bb/011ca600a92429e9425692",
    name: "坚果炒货",
    url: "/pages/shopList/shopList"
  }
];

let ads = [{ src: "https://img.alicdn.com/tfs/TB1eWl9sH9YBuNjy0FgXXcxcXXa-190-140.gif", url: "" }, { src: "http://140.143.192.36:67/102.jpg", url: "" }] ;

let showDatas = [{
  tempId: "tk_main_title", title: "1月抢购"
},{
  tempId: "tk_channel", datas: [{ title: "春天到了" }, { title: "夏天到了" }, { title: "岁月如流水，真长啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊" }]},
  {
    tempId: "tk_ad", datas: [{ src: "http://140.143.192.36:67/101.jpg", url:"" }, { src: "http://140.143.192.36:67/102.jpg", url:"" }]},
  {
    tempId: "tk_main_1_circle", title: "热门商品",mainurl:"baidu.com", head: { src: "http://140.143.192.36:67/101.jpg", url: "" },items:[
      { src: "http://140.143.192.36:67/101.jpg", url: "" },
      { src: "http://140.143.192.36:67/102.jpg", url: "" },
      { src: "http://140.143.192.36:67/101.jpg", url:  "" },
      { src: "http://140.143.192.36:67/101.jpg", url: "" }
    ]
  },
  {
    tempId: "tk_main_title", title: "超级热门"},
  {
    tempId: "tk_main_1_list",  mainurl: "baidu.com", head: { src: "http://140.143.192.36:67/102.jpg", url: "" }, items: [
      { src: "http://140.143.192.36:67/101.jpg", url: "" },
      { src: "http://140.143.192.36:67/101.jpg", url: "" },
      { src: "http://140.143.192.36:67/101.jpg", url: "" },
      { src: "http://140.143.192.36:67/101.jpg", url: "" }
    ]
  }



];
data["index"] = {
  ads: ads,
  /** 类目列表 */
  cates: cates,
  /** 广播频道 */
  channel: [],
  /** 展示模块 */
  showDatas: showDatas

};
data["hot"] ="整点秒杀,我装作无动于衷,多想问你,究竟爱谁,怎么怪她犯了错";

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
    redata = data[url];

    console.log("===假数据:url:" + url, redata);
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