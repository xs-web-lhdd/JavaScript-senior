var length = 10;
function fn() {
  console.log( this.length )
}
var obj = {
  length: 5,
  mathod: function( fn ){
    fn();
    arguments[ 0 ]();
  }
}
obj.mathod( fn, 1 );


// 美团面试题: 作用域 this指向