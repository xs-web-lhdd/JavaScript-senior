function add(x, y, z) {
  return x + y + z
}

var result = add(10, 20, 30, 40)
console.log(result);


// 从 add 转变为 sum 这个过程叫做柯里化

function sum(x) {
  return function(y) {
    return function(z) {
      return x + y +z
    }
  }
}
console.log(sum(1)(2)(3));



// 简化柯里化的代码
var sum2 = x => y => z => {
  return x + y + z
}
console.log(sum2(1)(2)(3));

var sum3 = x => y => z => x + y +z
console.log(sum3(10)(20)(30));



