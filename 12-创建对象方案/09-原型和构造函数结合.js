

function Person(name, age, height, address) {
  this.name = name
  this.age = age
  this.height = height
  this.address = address
}
Person.prototype.eating = function() {
  console.log(this.name + '正在吃！');
}
Person.prototype.sleeping = function() {
  console.log(this.name + '正在睡！');
}


var p1 = new Person('lisi', 20, 190, '河南省')
var p2 = new Person('zhangsan', 10, 180, '北京市')

p1.eating()
p2.sleeping()