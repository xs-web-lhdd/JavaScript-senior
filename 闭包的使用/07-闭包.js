function foo() {
  var name = 'liang'
  var age = 19

  function bar() {
    console.log(name);
    console.log(age);
  }

  return bar
}

var fn = foo()
fn()



// 内存泄露：代码被执行完之后，并且以后不会再用了而却没有被 GC （垃圾回收）清理时，就算内存泄露

// 解决内存泄露：
fn = null
// 这样就将引用给清楚了，这样就被标记清理给清除了
