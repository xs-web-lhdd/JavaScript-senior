function foo() {
  console.log(this);
}

var newFoo = foo.bind('bind')
newFoo()