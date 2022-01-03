console.log( func );
var func = 123;
console.log( func );
function func() {
  console.log( 'Hello js' );
}

//分析
//1. 进行预解析,观察声明有两个,一个是声明变量,一个是声明函数
//    var func被预解析记录
//    发现函数的声明, 但是func以记录过,当做重复声明,不记录
//    函数声明第二步仍然执行,将fuc与函数体连接起来
//2. 预解析结束,开始执行代码
//    第一个console.log(func)此时为函数体,打印出函数体
//    第二个conole.log(funce)已经赋值,覆盖了函数体,打印123