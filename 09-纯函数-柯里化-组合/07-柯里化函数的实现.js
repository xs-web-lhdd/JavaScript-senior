/**
 * @description 实现一个函数，将一个没有实现柯里化的函数传进去，从而得到一个新的柯里化后的函数
 * @author 凉风有信、
 */


function add1(x, y, z) {
  return x + y + z
}

function add2(x, y, z) {
  x = x + 2
  y = y * 2
  z = z * z

  return x + y + z
}

function makeAdder(count) {

  return function(num) {

    return num + count
  }
}

function log(date, type, message) {
  console.log(`[${date.getHours()}: ${date.getMinutes()}][${type}]: [${message}]`);
}


// 柯里化函数的实现 LCurrying
function LCurrying(fn) {
  function curried(...args) {
    // 拿到函数实际接收的参数个数：args.length
    // 拿到函数应该接收的参数个数：fn.length
    if(args.length >= fn.length) {
       return fn.apply(this, args)
    } else {
      function curried2(...args2) {
        return curried.apply(this, [...args, ...args2])
      }
      return curried2
    }
  }

  return curried
}

var curryAdd = LCurrying(add1)
console.log(curryAdd(10)(20)(30));


var curryLog = LCurrying(log)
curryLog(new Date())('DEBUG')('寻找BUG！')







