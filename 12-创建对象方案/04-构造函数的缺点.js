
function Person(name, age, height, address) {
  this.name = name
  this.age = age
  this.height = height
  this.address = address
  this.eating = function() {
    console.log(this.name + '在吃东西');
  }
  this.running = function() {
    console.log(this.name + '在跑步呢！');
  }

}

var p1 = new Person('zhangsan', 20, 188, '北京市')
var p2 = new Person('lisi', 18, 180, '河南省')


console.log(p1.eating === p2.eating);
console.log(p1.running === p2.running);

// 缺点：
// 上面的方法是一致的，但是结果是false，意味着每次创建新的对象的时候都会创建方法，每次都是这样，这样会很浪费空间
