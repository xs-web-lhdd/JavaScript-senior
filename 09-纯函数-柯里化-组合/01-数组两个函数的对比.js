var names = ['abc', 'cba', 'nba', 'ncaa']


// slice 只要给它传入一个start/end，那么对于同一个数组来说，它会给我们返回确定的值
// slice函数本身是不会修改原来的数组
// slice函数本身就是一个纯函数
var newNames1 = names.slice(0, 3) // 左闭右开
console.log(newNames1)
console.log(names);

// splice 在执行时，有修改调用的数组对象本身，修改的这个操作就是产生的副作用
// splice 函数本身就不是一个纯函数
var newName2 = names.splice(2)
console.log(newName2);
console.log(names); // 把原来数组进行了修改