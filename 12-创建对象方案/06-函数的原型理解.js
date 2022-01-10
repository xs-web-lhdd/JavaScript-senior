function foo() {

}


// 函数也是一个对象
console.log(foo.__proto__);
// 函数作为对象来说，它也是有 [[prototype]] 隐式原型

// 因为它是一个函数，所以它会多出来一个显示原型属性：prototype
console.log(foo.prototype);

var p1 = new foo()
var p2 = new foo()

console.log(p1.__proto__ === foo.prototype);
console.log(p2.__proto__ === foo.prototype);