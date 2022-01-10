
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
console.log(p1);
console.log(p1.__proto__.constructor);
console.log(p1.__proto__.constructor.name);

var p2 = new Person('lisi', 18, 180, '河南省')
console.log(p2);