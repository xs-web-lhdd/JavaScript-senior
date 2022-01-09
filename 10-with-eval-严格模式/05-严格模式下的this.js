"use strict"

// 在严格模式下，自执行(独立调用)函数会指向 undefined
// function foo() {
//   console.log(this);
// }

// foo()

// var obj = {
//   name: 'liang',
//   foo
// }
// obj.foo()
// var bar = obj.foo
// bar()

// setTimeout(() => {
//   console.log(this);
// }, 1000);


// setTimeout的this
// fn.apply(this == window)
setTimeout(function() {
  console.log(this);
}, 1000);


