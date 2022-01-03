if ( true ) {
  function foo() {
    console.log( true );
  } 
} else {
  function foo() {
    console.log( false );
  }
}
foo();

//分析
// 按照常理分析,在进行预解析阶段,第二个foo应该会覆盖掉第一个foo,可是事实确不是这样
// 这是由于if语句,形成了块级作用域,那么此时只有第一个foo暴露在了全局中,所有foo() => true
// 注意,这是由于Chorme和Firefox在去年的改版,老版本仍然打印true.