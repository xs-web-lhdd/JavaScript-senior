var num = 123;
function f1 () {
  console.log( num );  
}
function f2 () {
  var num = 456;
  f1();
}
f2();
console.log( num );