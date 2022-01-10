// 工厂模式：工厂函数
function createPerson(name, age, height, address) {
  var p = {}
  p.name = name
  p.age = age
  p.height = height
  p.address = address
  p.eating = function() {
    console.log(this.name + '在吃东西');
  }
  p.running = function() {
    console.log(this.name + '在跑步中');
  }
 
  return p
}


var p1 = createPerson('zhangsan', 18, 1.88, '北京市')
var p2 = createPerson('wangwu', 20, 175, '天津市')
var p3 = createPerson('lisi', 19, 180, '湖北省')

// 工厂模式缺点: 都是 Object 的字面量类型，不知道具体的类型
console.log(p1, p2, p3);