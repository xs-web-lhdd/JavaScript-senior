function foo() {
  var name = 'liang'
  var age = 19

  function bar() {
    debugger
    console.log(name);
    // console.log(age);
  }

  return bar
}

var fn = foo()
fn()


// 闭包中没有被使用的 变量 会被 js引擎 出于性能优化的角度而销毁掉，如上面的name就会被js引擎销毁掉
