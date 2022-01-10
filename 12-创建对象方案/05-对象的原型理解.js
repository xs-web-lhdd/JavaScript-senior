// 每个对象中都有一个 [[prototype]] ,这个属性可以称之为对象的原型（隐式原型）




var obj = {name: 'liang'}

var info = { }

// 1、解释原型的概念和看一下原型：
// 早期 ECMA 是没有规范如何去查看 [[prototype]]

// 给对象提供一个属性，可以让我们可以看一下原型对象（浏览器提供）
// console.log(obj.__proto__);
// console.log(info.__proto__);


// var obj = { name: 'liang', __proto__: {} }

// // ES5 之后提供的 Object.getPrototypeOf
// console.log(Object.getPrototypeOf(obj));



// 2 原型有什么用呢?
// 当我们从一个对象中获取某个属性的时候,它会触发 [[get]] 操作
// 1、在当前对象中查找对应的属性，如果找到了就直接使用
// 2、如果没有找到就沿着它的原型链去查找 [[prototype]]
obj.__proto__.age = 100
// console.log(obj);
console.log(obj.age);