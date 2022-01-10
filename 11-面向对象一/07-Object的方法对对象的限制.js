var obj = {
  name: 'liang',
  age: 100
}

// 禁止对象继续添加新的属性
Object.preventExtensions(obj)

obj.height = 175
obj.weight = 120

console.log(obj);

// 禁止对象配置/删除里面的属性

// 1
Object.seal(obj)

// 2 用循环 --- 比较麻烦
// for(var key in obj) {
//   Object.defineProperty(obj, key, {
//     configurable: false,
//     enumerable: true,
//     writable: true,
//     value: obj[key]
//   })
// }

delete obj.name
console.log(obj);


console.log(Object.getOwnPropertyDescriptors(obj));




// 让属性不可以被修改（writable: false）
// 1
Object.freeze(obj)

// 2 通过循环设置每一个 defineProperty 的 writable为 false

console.log(Object.getOwnPropertyDescriptors(obj));