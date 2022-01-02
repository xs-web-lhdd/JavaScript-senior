var name = 'liang'

function foo() {
  console.log('foo');
}
foo()



var num1 = 20
var num2 = 30

var result = num1 + num2
console.log(window);




/**
 * 1、代码被解析，v8 引擎内部会帮助我们创建一个对象（GlobalObject -> go）
 * 2、运行代码：
 *   2.1  v8 为了执行代码，v8 引擎内部会有一个执行上下文栈（Execution Context Stack，ECStack）（函数调用栈）
 *   2.2  因为我们执行的是全局代码，为了全局代码能够正常的执行，需要创建 全局执行上下文（全局代码需要被执行）-> Global Execution Context（GEC）
 */
// // 伪代码：
// var globalObeject = {
//   String: '类',
//   Date: '类',
//   setTimeout: '函数',
//   window: globalObeject, // 全局对象内部有一个 window 的属性，该属性指向当前作用域内的this
//   name: undefined,
//   num1: undefined,
//   num2: undefined,
//   result: undefined
// }

// console.log(window.window.window);





var globalObeject = {
  String: '类',
  window: globalObeject,
  name: undefined,
  foo: '地址'
}