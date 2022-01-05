var obj = {
  name: 'liang',
  foo: function() {
    console.log(this);
  }
}


// 显示绑定高于隐式绑定
var fn = obj.foo
fn()
fn.call('abc')