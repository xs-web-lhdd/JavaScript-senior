

// foo函数是否是一个纯函数？
// 1、相同的输入一定产生相同得输出
// 2、在执行得过程中不会产生任何得副作用
function foo(num1, num2) {
  return num1 * 2 + num2 * num2
}


// bar 不是一个纯函数，因为它修改了外界的变量
var name = 'abc'
function bar() {
  console.log('bar 其他的代码执行');
  name = 'cba'
}

bar()


// baz也不是一个纯函数，因为我们修改了传入的参数
function baz(info) {
  info.age = 19
}

var obj = {name: 'liang', aeg: 18}
baz(obj)
console.log(obj);


function test(info) {
  return {
    ...info,
    age: 100
  }
}
test(obj)
console.log(obj);





















