# 克隆到本地
```bash
# 定位到任意目录
$ cd path/to/root
# 克隆仓库到指定的文件夹
$ git clone https://github.com/zce/weapp-boilerplate.git [project-name] --depth 1
# 进入指定的文件夹
$ cd [project-name]
```
## 安装`NPM`依赖

```bash
$ npm install
```
### 开发阶段

# 启动监视
$ npm run watch
生产阶段
```bash
# 启动编译
$ npm run build
```
生产阶段的代码会经过压缩处理，最终输出到`dist`下。

对wx对象绑定方法初始化
util.initFunctionBind
	  wx.tk_alert = alert;
	  wx.tk_uploadLog = uploadLog;
	  wx.tk_initFunctionPage = initFunctionPage;
	  wx.tk_util = utilData;
	  wx.tk_config = config;
	  wx.tk_cache = cache;
page 初始化 initFunctionPage

	page.clickLink = clickLink;
    page.clickRedirectTo = clickRedirectTo;
    page.bindToggleAttr = bindToggleAttr;

util接口方法
  formatTime: formatTime,
  request: realRequest,
  realRequest: request,
  showToast: showToast,
  bindSaoMa: bindSaoMa,
  initFunctionBind: initFunctionBind,
  newThread: newThread,
  downFile: downFile,
  getKeyWords: getKeyWords,
  arrayToString: arrayToString
  
  
Page 配置
  /** 系统配置 */
  systemConfig:{
    /**页面跳转的时候是否保存数据，如果false（默认）则直接卸载，下次重新加载 */
    isSave:true,
	functions:[]
  },



