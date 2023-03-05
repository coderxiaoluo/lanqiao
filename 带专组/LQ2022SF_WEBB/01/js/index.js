$(window).scroll(function () {
  // 页面滚动到指定范围，对应的侧边按钮字体变色
  // TODO：请补充代码实现功能
  const btnTop = document.querySelectorAll('#lift > a ')
  if(window.scrollY<959){
    btnTop[0].classList.add('active-color') 
  }else{
    btnTop[0].classList.remove('active-color') 
  }
  if(window.scrollY >=960 && window.scrollY <1919){
    btnTop[1].classList.add('active-color') 
  }else{
    btnTop[1].classList.remove('active-color') 
  }
  if(window.scrollY >=1920){
    btnTop[2].classList.add('active-color') 

  }else{
    btnTop[2].classList.remove('active-color') 
  }

});

/**
 * @param {Object} scrollTopVal：到达指定位置需要滚动的高度
 * 点击按钮，滚动到指定位置
 */
function toFunction(top,scrollTopVal) {
  // TODO：请补充代码实现功能
  scrollTo({
    top:top,
    left:0,
    behavior:'smooth'
  })
}
