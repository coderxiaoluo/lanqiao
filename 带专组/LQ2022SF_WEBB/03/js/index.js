// TODO：游戏开始

// 记录索引
let num = 0
let index = 1

function start() {
  //获取开始btn和移动btn
  const start = document.querySelector('#start').style.display = 'none'
  const move = document.querySelector('#move').style.display = 'block'
  // // 让开始btn隐藏
  // start.style.display = 'none'
  // // 让移动btn显示
  // move.style.display = 'block'

}
// TODO：重置游戏
function reset() {
  const box = document.querySelectorAll('.container>.lawn')
  box[12].classList.remove('active')
  box[0].classList.add('active')
  const resetBtn = document.querySelector('#reset').style.display = 'none'
  const result = document.querySelector('.result').innerHTML = ''
  const start = document.querySelector('#start').style.display = 'block'
  num = 0
  index = 1
}

// TODO：移动

function move() {
  const Inp = document.querySelector('input').value
  const box = document.querySelectorAll('.container>.lawn')
  const result = document.querySelector('.result')
  if (Inp == 1) {
    box[num].classList.remove('active')
    box[index].classList.add('active')
    num++
    index++
  }
  if (Inp == 2) {
    box[num].classList.remove('active')
    box[index+1].classList.add('active')
    num++
    num++
    index++
    index++
  }
// 当索引＝炸弹时
  if (num == 12) {
    const move = document.querySelector('#move').style.display = 'none'
    const resetBtn = document.querySelector('#reset').style.display = 'block'
    const result = document.querySelector('.result')
    result.innerHTML = '<h3>你太菜了， 游戏结束<h3/>'
  }
  // 当吃到萝卜时
  if (num == 23) {
    const move = document.querySelector('#move').style.display = 'none'
    const resetBtn = document.querySelector('#reset').style.display = 'block'
    result.innerHTML = '<h3>你太厉害了， 游戏获胜<h3/>'
 

  }
}
