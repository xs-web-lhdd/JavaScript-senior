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
    configurable: true,
    enumerable: true,
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
  },
  // address: {
  //   configurable: true,
  //   enumerable: true
  // }
})

console.log(obj);

console.log(obj.age);