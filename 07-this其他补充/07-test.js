function foo(el) {
  console.log(el, this.id);
}

var obj = {
  id: 'liang'
};

// var nums = [1, 2, 3]

// nums.forEach(foo, obj)

[1, 2, 3].forEach(foo, obj)