



// function foo() {
//   console.log('函数被调用了!', this);
// }

// foo()



// foo.call(obj)
// foo.apply(obj)
// foo.apply('aaa')

// var obj = {
//   foo: 'foo'
// }


// foo.bind(obj)
// foo()
// foo.call()
// foo.apply()

// 2 call 和 apply 有什么区别
function sum(num1, num2) {
  console.log(num1 + num2, this);
}

sum.call('call', 20, 30)
sum.apply('apply', [20, 30])


// 3 call apply 在执行函数的时候可以明确绑定 this ,这个绑定规则称之为显示绑定