/**
 * 封装函数，函数名 getRandomNum(min,max,countNum)
 * 生成 min~max 范围的 countNum 个不重复的随机数，存入数组并返回
 */
//生成指定数目和范围的随机数
const getRandomNum = function (min, max, countNum) {
  var arr = [];
  // 在此处补全代码
  for (let i = 0; i < countNum; i++) { 
  let randoms = Math.floor((Math.random() * (max - min)) + min) +1
    if(arr.includes(randoms)) {
      i -= 1
    }else {
      arr.push(randoms)
    }
  }
  return arr;
};
module.exports = getRandomNum; //请勿删除
