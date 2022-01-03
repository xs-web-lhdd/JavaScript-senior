function func3 () {
  console.log( num );
  num = 456;
  console.log( num );
}
var num = 123;
func3( num );
console.log( num );