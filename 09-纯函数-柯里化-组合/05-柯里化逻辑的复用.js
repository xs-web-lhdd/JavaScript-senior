

function sum(m, n) {
  return m + n
}

// 假如在程序中，我们经常需要把 5 和另外一个数字进行相加
console.log(sum(5, 10));
console.log(sum(5, 90));
console.log(sum(5, 100));
console.log(sum(5, 20));



function makeAdder(count) {
  return function(num) {
    return num + count
  }
}
console.log(makeAdder(5)(10));

var add5 = makeAdder(5)


console.log(add5(10));
console.log(add5(100));
