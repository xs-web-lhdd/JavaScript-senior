var nums = [5, 10, 11, 1000, 99]

// var odd = nums.filter(item => item % 2 == 0)
// console.log(odd);

// filter: 过滤
var result = nums.filter((item, index, arr) => false)
console.log(result); // []

// map: 映射
var resultNum = nums.map((item, index, arr) => item + 1)
console.log('=>>>>', resultNum);

// forEach: 迭代 ！没有返回值
nums.forEach((item, index, arr) => {
  console.log('=>', item);
})

// reduce: 累加
var total = nums.reduce((preValue, item) => preValue - item, 0)
console.log(total);
