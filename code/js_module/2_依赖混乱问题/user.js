console.log('您正在使用的boostrap版本是：'+$.fn.tooltip.Constructor.VERSION)

let carouselItems = $('.carousel-item');
let btn = $('#btn');

btn.click(()=>{
  alert('轮播图数量：'+carouselItems.length+'张')
})
