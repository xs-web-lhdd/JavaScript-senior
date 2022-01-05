// new 是不能和 call apply 一起使用的

// new bind
function foo() {
  console.log(this);
}

var bar = foo.bind('abc')

var fn = new bar()

var obj = new foo()

// bind 优先级高于 call apply
foo.bind('abc').call('123')
foo.bind('abc').apply('bmm')
// foo.call(window).apply('frei')