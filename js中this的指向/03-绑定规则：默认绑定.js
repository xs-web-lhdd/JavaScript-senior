// 只要是被独立调用的 this 都指向 window


// 1、案例一
// function foo() {
//   console.log(this);
// }

// foo()


// 2、案例二
// function foo1() {
//   console.log(this);
// }

// function foo2() {
//   console.log(this);
//   foo1()
// }

// function foo3() {
//   console.log(this);
//   foo2()
// }

// foo3()


// 3、案例三
// var obj = {
//   name: 'liang',
//   foo: function() {
//     console.log(this);
//   }
// }
// var bar = obj.foo
// bar() // window


// 4、案例四
// function foo() {
//   console.log(this);
// }

// var obj = {
//   name: 'liang',
//   foo: foo
// }

// var bar = obj.foo
// bar() // window


// 5、案例五
function foo() {
  function bar() {
    console.log(this);
  }

  return bar
}

var fn = foo()
fn()