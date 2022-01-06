


function LCompose(...fns) {
  var length = fns.length
  for(var i = 0; i < length; i++) {
    if(typeof fns[i] !== 'function') {
      throw new TypeError('要求传入的都是函数类型！')
    }
  }

  function compose(...args) {
    var index = 0
    var result = length ? fns[index].apply(this, args) : args
    while(++index < length) {
      result = fns[index].call(this, result)
    }

    return result
  }


  return compose
}


function double(m) {
  return m * 2
}

function square(n) {
  return n ** 2
}

var newFn = LCompose(double, square)
console.log(newFn(10));
