/** 倒计时 一个页面只支持一个倒计时对象 */
const timeZones = [ "00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00","14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"]
var deleteQueue = [];
var timer={}
var pageRegisters = {};
/**
 * page:页面
 * flag:对象flag
 * alwaysRun：是否一直运行（是否支持后台运行）
 * tickFunction:心跳方法(1秒执行一次)
 */
function hour_timer_register(page, flag, alwaysRun,tickFunction){
  let route = page && page.route ? page.route:"app";
  flag = flag ? flag : "timer";

  _delete_timer(route);
  _run_tick();
  let timer = pageRegisters[route];
  if (!timer || page != timer.page){
      timer = {
        alwaysRun: alwaysRun,
        datas: []
      };
    pageRegisters[route] = timer;

  //    console.log("======>>>>>>>>>hour_timer_register-----regedit now ", "page:", page, "flag:", flag, "alwaysRun:",alwaysRun);
    }
    
  if (timer.datas[flag]){
      return
    }

  timer.datas[flag] = tickFunction ? tickFunction:function(){
    console.log("timer run but not config functionCallback :", page,flag);
  };

}

function _delete_timer(){
  if (deleteQueue.length == 0){
    return
  }

  for (let i in deleteQueue){
    delete pageRegisters[i];
    delete deleteQueue[i];
  }
}

function _run_tick(){
  if (timer.timer){
    return
  }
  timer.timer = setTimeout(_tick,1000);
}

function _tick(){
  try {
    hour_timer_tick();
  } catch (e) {
    console.error(e);
  }
  timer.timer = setTimeout(_tick, 1000);
}
/**
 * 触发回调 参数countDownTime(hh:mm:ss),timeindex:当前时间区间index,timeDesc:当前的时间
 */
function hour_timer_tick(){

  let date = new Date();
  let hour = date.getHours()
  let min = date.getMinutes()

  let timeindex = timer.timeindex;

  if (!timeindex || timeindex == -1) {
    timeindex = 0;

    let zones = timeZones;
    for (var i = 0; i <= zones.length; i++) {
      let md = zones[i].split(":")[0];
      if (md == hour) {
        break;
      }
      timeindex++
    }
    timer.userchoiceIdex = timeindex;
  } else {
    let md = timeZones[timeindex].split(":")[0];
    if (md < hour) {
      md++;
      if (md == 24) {
        timeindex = 0;
      } else {
        timeindex++;
      }
    }
  }
  timer.timeindex = timeindex;
  let countDownTime;
  if (timeindex == timeZones.length - 1) {
    countDownTime = wx.myapp.countDownTime("24");
  } else {
    countDownTime = wx.myapp.countDownTime(timeZones[timeindex + 1]);
  }
  //console.log("======>" + timeindex, pageRegisters);

  for (let i in pageRegisters){
    let curpage = pageRegisters[i];
    if (!curpage.alwaysRun && wx.curPage.route != i){
      deleteQueue[i] = true;
    }else{

      for (let m in curpage.datas){
        curpage.datas[m](countDownTime,timeindex,timeZones[timeindex]);
      }
    }
   
 }


}


function autoTimeZones(){
  let date = new Date();
  let hour = date.getHours();
  let beforeArray = [];
  let afterArray = [];

  let timeindex = timer.timeindex;
  let count = 12;
  while (count > 0){
    timeindex--;
    if (timeindex < 0){
      timeindex = 23;
    }
    beforeArray.push(timeZones[timeindex]);
    count--;
  }

  count = 12;
  timeindex = timer.timeindex;
  while (count > 0) {
    afterArray.push(timeZones[timeindex]);
    timeindex++;
    if (timeindex == 23) {
      timeindex = 0;
    }
    count--;
  }

  return beforeArray.reverse().concat(afterArray);
}


module.exports = {
  hour_timer_register,
  autoTimeZones
}