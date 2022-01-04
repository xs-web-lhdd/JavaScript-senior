/* 
  隐式绑定： object.fn()
  object 对象会被 js引擎绑定到 fn函数中的 this 里面
 */ 



// function foo() {
//   console.log(this);
// }

// var obj = {
//   name: 'liang',
//   foo
// }

// obj.foo()


// 2、案例2
// var obj = {
//   name: 'liang',
//   eating: function () {
//     console.log(this.name + '在吃东西');
//   },
//   running: function () {
//     console.log(this.name + '在跑步');
//   }
// }

// obj.eating()
// obj.running()

// var fn = obj.eating
// fn()


// 3 案例三
var obj1 = {
  foo: function() {
    console.log(this);
  }
}

var obj2 = {
  name: 'obj2',
  bar: obj1.foo
}

obj2.bar()