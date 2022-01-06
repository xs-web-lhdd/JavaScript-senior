/**
 * @description 手写bind函数
 * @author 凉风有信、
 */


Function.prototype.Lbind = function(thisArg, ...argArray) {
  // 1、 获取到需要真实调用的函数
  var fn = this

  // 2、绑定 this
  thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : window

  // 3、将函数放入 thisArg 进行调用
  function proxyFn (...arg) {
    thisArg.fn = fn
    // 特殊：对两个传入的参数进行合并
    var result = thisArg.fn(...argArray, ...arg)
    delete thisArg.fn
    return result
  }

  // 4、返回结果
  return proxyFn
}






function foo() {
  console.log('foo被执行', this);
  return 20
}

function sum(num1, num2, num3, num4) {
  console.log(num1, num2, num3, num4);
}

// 系统bind使用
// var bar = foo.bind('abc')
// bar()

var x = foo.Lbind('aaa')
console.log(x());

var newSum = sum.bind('aaa', 1, 3)
newSum(10, 20, 30, 40)

var newSum = sum.Lbind('aaa', 1, 3)
newSum(10, 20, 30, 40)