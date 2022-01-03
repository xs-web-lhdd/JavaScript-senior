var a = 100


// JS引擎在扫描代码的时候是不管代码在return前还是在return后面，
// 只有在执行的时候return才会生效，所以在foo这个函数体里面的AO中
// 会有a的并且为undefined
// 在执行函数的时候执行到return时,代码会停止执行,因此AO中的a不会由
// a: undefined 变为 a: 100
function foo() {
  console.log(a);
  return 
  var a = 100
}

foo()