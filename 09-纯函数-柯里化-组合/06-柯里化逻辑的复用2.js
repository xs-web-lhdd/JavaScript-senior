function log(date, type, message) {
  console.log(`[${date.getHours()}: ${date.getMinutes()}][${type}]: [${message}]`);
}

// 上面的 newDate() 太重复了
log(new Date(), 'debug', '轮播图出错啦！');
log(new Date(), 'debug', '查询菜单的错误');
log(new Date(), 'feture', '更新了');



// 柯里化的优化：
var newLog = date => type => message => {
  console.log(`[${date.getHours()}: ${date.getMinutes()}][${type}]: [${message}]`);
}

// 定制的只打印当前时间的函数
var nowLog = newLog(new Date)
// 定制的打印当前时间和 type 的函数
var DEBUG = nowLog('DEBUG')
var FETURE = nowLog('FETURE')

DEBUG('查询到了轮播图~')
FETURE('新增用户功能！')







