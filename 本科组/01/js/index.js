// 实现选项卡功能
function init() {
  // TODO 待补充代码
  const btns = document.querySelectorAll('.tabs > div')
  const box = document.querySelectorAll('#content > div')

  btns.forEach(function(item,index) {
    item.addEventListener('click',function(){
      btns.forEach(function(t,i) {
        t.classList.remove('active')
        box[i].classList.remove('active')
    })
    item.classList.add('active')
    box[index].classList.add('active')
    })
  })
}
init();
