// 1、
// 在 foo 中没有 arguments 所以会去全局中寻找 arguments，所以在 window 环境下会报错，因为 window没有arguments，在 node 环境中不会报错，node 环境中有 arguments

// var foo = () => {
//   console.log(arguments);
// }


// 2、
// function foo() {
//   var bar = () => {
//     console.log(arguments);
//   }

//   return bar
// }

// var fn = foo(123)
// fn()


// 3、用 ES6 中剩余参数解决箭头函数中没有 arguments
var foo = (num1, num2, ...arg) => {
  console.log(num1, num2, arg);
}

foo(1, 2, 3, 4, 5)

