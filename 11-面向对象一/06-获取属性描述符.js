var obj = {
  _age: 100,
  _address: '河南省xxxxxx',
  // 这种写法与用属性描述符写get set是一致的（enumerable configurable默认设置为true）
  get address() {
    return this._address
  },
  set address(value) {
    this._address = value
  }
}

Object.defineProperties(obj, {
  name: {
    configurable: false,
    enumerable: false,
    writable: true,
    value: 'liang'
  },
  age: {
    configurable: true,
    enumerable: true,
    get: function() {
      return this._age
    },
    set: function(newAge) {
      this._age = newAge
    }
  }
})

// 获取对象的某个属性的描述符
console.log(Object.getOwnPropertyDescriptor(obj, 'name'));
console.log(Object.getOwnPropertyDescriptor(obj, 'age'));

// 获取对象的所有属性的描述符
console.log(Object.getOwnPropertyDescriptors(obj));