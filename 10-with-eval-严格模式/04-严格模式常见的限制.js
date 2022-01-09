"use strict"


// 1 以外创建全局变量

// message = "Hello World!"
// console.log(message);

// function foo() {
//   // "use strict"
//   age = 20
// }

// foo()
// console.log(age);


// 2 在严格模式下,不允许函数有相同的参数名称
// function foo(x, y, x) {
//   console.log(x, y, x);
// }
// foo(10, 20, 30)


// 3 静默错误
// NaN = 123
// var obj = {}
// Object.defineProperty(obj, 'name', {
//   configurable: false,
//   writable: false,
//   value: 'liang'
// })
// // obj.name = 'hi'
// console.log(obj);

// delete obj.name

// console.log(obj);



// 4 不允许使用原先的八进制格式
// var num1 = 0o123 // 8 进制
// var num2 = 0x123 // 16 进制
// var num3 = 0b100 // 2 进制
// console.log(num1);
// console.log(num2);
// console.log(num3);


// 5 with 语句不允许使用


// 6 eval 函数不会向上引用变量
var jsMessage = 'var message = "liang"; console.log(name)'
eval(jsMessage)
console.log(message);
