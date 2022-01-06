function foo(num1, num2) {
  // 1、自己遍历
  var newArr = []
  for(var i = 0; i < arguments.length; i++) {
    newArr.push(arguments[i] * 10)
  }
  console.log(newArr);

  // 2、利用 Array 原型上的 slice 将 arguments 转成一个数组
  var newArr1 = Array.prototype.slice.call(arguments)
  var newArr2 = Array.prototype.slice.bind(arguments)()
  console.log(newArr1);
  console.log(newArr2);

  var newArr3 = [].slice.call(arguments)
  console.log(newArr3);

  // 3、ES6 用法
  var newArr4 = Array.from(arguments)
  console.log(newArr4);
  console.log([...arguments]);
}

foo(1, 2)