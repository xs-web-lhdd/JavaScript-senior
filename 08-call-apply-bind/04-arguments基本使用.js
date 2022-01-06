function foo() {
  // 
  console.log(arguments);

  // 长度
  console.log(arguments.length);

  // 通过索引
  console.log(arguments[0]);
  console.log(arguments[2]);
  console.log(arguments[3]);

  // 
  console.log(arguments.callee);
}


foo(1, 2, 3, 4, 5)