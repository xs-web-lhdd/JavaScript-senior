// name age price 虽然没有被属性描述符来定义，但是它们也是具备对应的特性的
// value：赋值的值
// configurable：true
// enumerable：true
// writable：true
var obj = {
  name: 'liang',
  age: 100,
  price: '10k'
}


Object.defineProperty(obj, 'height', {
  // 是不是可以被配置的,默认是 false
  configurable: false,
  // 默认是 false
  enumerable: false,
  // 默认是 false 
  writable: false,
  // 默认是 undefined
  value: 120
})

// delete obj.height


console.log(obj);
console.log(Object.keys(obj));


// Object.defineProperty(obj, 'height', {
//   // 是不是可以被配置的
//   configurable: false,
//   // 默认是 false
//   enumerable: true,
//   value: 100
// })

obj.height = 200
console.log(obj);
