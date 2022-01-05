function foo() {
  console.log(this);
}

foo.call('abc')
foo.apply({})


// call apply bind: 当传入的 null/undefined时,自动将this绑定成全局对象

foo.call(null)
foo.apply(undefined)
foo.bind(null)()