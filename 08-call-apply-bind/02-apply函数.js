/**
 * @description 手写 apply
 */

Function.prototype.Lapply = function(thisArg, restArg) {
  // 1、获取谁调用Lapply
  var fn = this
  // 2、判断传入的是不是对象
  thisArg = (thisArg !== undefined && thisArg !== null) ? Object(thisArg) : thisArg
  thisArg.fn = fn
  // 3、原函数执行
  // var result
  // if(!restArg) { // 没有传参数
  //   result = thisArg.fn()
  // } else {
  //   result = thisArg.fn(...restArg)
  // }
  console.error('错了大哥！');
  restArg = restArg || []
  var result = thisArg.fn(...restArg)

  delete thisArg.fn

  return result
}





function sum(num1, num2) {
  return num1 + num2
}

function foo(num) {
  return num
}

console.log(sum.apply(0, [10, 20]));
console.log(sum.Lapply(0, [10, 20]));

console.log(sum.Lapply('aaa'));