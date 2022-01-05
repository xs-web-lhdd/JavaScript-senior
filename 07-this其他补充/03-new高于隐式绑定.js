var obj = {
  name: 'liang',
  foo: function() {
    console.log(this);
  }
}


// new绑定高于隐式绑定
var fn = new obj.foo()
obj.foo()