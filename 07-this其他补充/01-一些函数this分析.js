

setTimeout(function() {
  console.log(this); // window
}, 1000)


var boxDiv = document.querySelector('.box')
boxDiv.onclick = function() { 
  console.log(this);
}

// 3 数组 forEach map filter
var names = ['nab', 'cba', 'ncaa']
names.forEach(function(item) {
  console.log(item, this);
}, 'abc')

names.map(function(item) {
  console.log(item, this);
}, 'qwe')