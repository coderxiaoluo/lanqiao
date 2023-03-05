/**
 * @param {*} input_values input 框中输入的值
 * @returns Array  将输入的值中 1-9 组成一个数组
 */
let Array = []
// 将输入的值中 1-9 组成一个数组
function findNum(input_values) {
  // TODO：待补充代码
  let arr = input_values.split('') 
  for(let i = 0 ;i<arr.length;i++) {
    if(arr[i].includes(1)) {
      Array.push((Number(arr[i])))
    }else if(arr[i].includes(2)){
      Array.push(Number(arr[i]))
    }else if(arr[i].includes(3)){
      Array.push(Number(arr[i]))
    }
    else if(arr[i].includes(4)){
      Array.push(Number(arr[i]))
    }
    else if(arr[i].includes(5)){
      Array.push(Number(arr[i]))
    }
    else if(arr[i].includes(6)){
      Array.push(Number(arr[i]))
    }
    else if(arr[i].includes(7)){
      Array.push(Number(arr[i]))
    }
    else if(arr[i].includes(8)){
      Array.push(Number(arr[i]))
    }
    else if(arr[i].includes(9)){
      Array.push(Number(arr[i]))
    }
  }
  return Array

}
// 将 1-9 中三个不重复的随机数放入数组中，并返回这个数组
let randomCoin = () => {
  let randomNumArr = [];
  // TODO：待补充代码
  return randomNumArr;
};

// 请勿删除和修改下面代码
try {
  module.exports = { randomCoin, findNum };
} catch (e) { }
