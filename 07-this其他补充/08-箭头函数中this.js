// 1 测试箭头函数中 this 指向


var foo = () => {
  console.log(this);
}

foo()
var obj = {foo: foo}
obj.foo()
foo.call('abc')