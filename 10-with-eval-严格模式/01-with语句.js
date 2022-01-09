// "use strict";
// var message = 'hello world!'

// function foo() {
//   console.log(message);
// }

// foo()

// with 语句：可以形成自己的作用域

var message = 'hello world'
var obj = {
  name: 'liang',
  age: 19,
  message: 'hello liang!'
}

function foo() {
  function bar() {
    with(obj) {
      console.log(message);
      console.log('----------');
    }
  }

  bar()
}

var name = 'giaogiao'
var info = { name: 'huahua' }
with(info) {
  console.log(name);
}

foo()

// 不建议在开发中使用 with，其在严格模式下会报错
// "use strict";
