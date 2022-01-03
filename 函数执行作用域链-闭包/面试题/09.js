function func1 ( num ) {
  console.log( num );
  var num = 456;
  console.log( num );
}
var num = 123;
func1( num );