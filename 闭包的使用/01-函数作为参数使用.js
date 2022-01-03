

// 将函数作为参数传递给另一个函数：
// function foo(fn) {
//   // console.log(fn);
//   fn()
// }

// function bar() {
//   console.log('bar');
// }

// foo(bar)


// 这种写法对封装一些工具函数是非常有用得：
function calc(num1, num2, calcFn) {
  console.log(calcFn(num1, num2));
}

function add(num1, num2) {
  return num1 + num2
}

function sub(num1, num2) {
  return num1 - num2
}

function mul(num1, num2) {
  return num1 * num2
}

var m = 20
var n = 30

calc(m, n, add)
calc(m, n, sub)
calc(m, n, mul)