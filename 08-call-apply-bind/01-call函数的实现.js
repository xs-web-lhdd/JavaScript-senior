/**
 * @description 给所有函数添加一个 Lcall的方法
 * @author 凉风有信、
 */


// 手写 call
Function.prototype.Lcall = function(thisArg, ...args) {
  // 1 获取需要被执行的函数, this 中谁调用就指向谁，因此 fn 就是调用 Lcall 的函数体
  var fn = this
  // 2 对 thisArg 转成对象类型（防止它传入的是非对象类型）
  thisArg = thisArg ? Object(thisArg) : window
  // 3 调用需要被执行的函数，隐式调用
  thisArg.fn = fn
  var result = thisArg.fn(...args)
  delete thisArg.fn

  return result
}






function foo() {
  console.log('foo函数实现了！', this);
}

function sum(num1, num2) {
  return num1 + num2
}


// 系统的函数的call方法
foo.call(null)

// 自己实现的函数的Lcall方法
foo.Lcall(null)
foo.Lcall(undefined)

console.log(sum.call(window, 1, 2));
