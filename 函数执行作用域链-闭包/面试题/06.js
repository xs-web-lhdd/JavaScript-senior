if ( 'a' in window ) {
  var a = 'hello js';
}
console.log( a );

//分析
//1. 进行预解析代码,观察到有一个变量声明.
//   预解析记录var a
//2. 预解析执行结束,开始执行代码
//   条件判断if('a' in window) => 成立 => 将a赋值: a = 'hello.js'
//   执行console.log( a ) => 'hello.js'