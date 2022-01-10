function foo() {

}




// console.log(foo.prototype.constructor.name);
// console.log(foo.prototype);
// console.log(Object.getOwnPropertyDescriptors(foo));

// Object.defineProperty(foo.prototype, 'constructor', {
//   configurable: true,
//   enumerable: true,
//   writable: true,
//   value: '哈哈哈哈'
// })

// 1、
// 构造函数的 prototype 指向原型，原型的 constructor 指向构造函数本身，所以它们可以循环调用
// console.log(foo.prototype);
// console.log(foo.prototype.constructor); // [[function: foo]]
// console.log(foo.prototype.constructor.prototype);
// console.log(foo.prototype.constructor.prototype.constructor);


// 2、我们也可以添加自己的属性
// foo.prototype.name = 'liang'
// foo.prototype.age = 100
// foo.prototype.height = 190

// var p1 = new foo()
// console.log(p1.name, p1.age);


// 3、直接修改整个 prototype 对象
foo.prototype = {
  // 添加 constructor ，但实际开发中不是这样写的
  // constructor: foo,
  name: 'liang',
  age: 10,
  height: 190,
}


console.log(foo.prototype);

// 真实开发中我们通过 Object.defineProperty() 添加 constructor
Object.defineProperty(foo.prototype, 'constructor', {
  configurable: true,
  enumerable: false,
  writable: true,
  value: foo
})

console.log(foo.prototype);