var obj = {
  name: 'liang',
  age: 19,
  _height: 120
}


// 存取属性描述符：不能和value、writable共存
// 1 隐藏某一个私有属性，不希望被外界访问和赋值
// 2 当我们希望截获某个属性访问和赋值的过程，也会使用它
Object.defineProperty(obj, 'height', {
  enumerable: true,
  configurable:true,
  get: function() {
    foo()
    return this._height
  },
  set: function(value) {
    bar()
    this._height = value
  }
})


console.log(obj);
console.log(obj.height);
obj.height = 200
console.log(obj.height);


function foo() {
  console.log('获取一次 height 的值！');
}

function bar() {
  console.log('设置了一次 height 值！');
}