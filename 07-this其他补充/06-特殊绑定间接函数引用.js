var obj1 = {
  name: 'obj1',
  foo: function() {
    console.log(this);
  }
}

var obj2 = {
  name: 'obj2'
};

// obj2.foo = obj1.foo
// obj2.foo()


// 独立函数调用,非常特殊的用法,记一下!!!
(obj2.foo = obj1.foo)();
// var a
// (a = obj1.foo)()