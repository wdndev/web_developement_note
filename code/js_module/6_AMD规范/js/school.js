// ['welcome']表示当前模块要依赖的模块名字
// 回调接收到的welcome是模块导出的数据

define(['welcome'],function(welcome){
  let name = {str:'尚硅谷'}
  const slogan = '让天下没有难学的技术！'+ welcome

  function getTel (){
    return '010-56253825'
  }

  function getCities(){
    return ['北京','上海','深圳','成都','武汉','西安']
  }
  // 导出数据
  return {name,slogan,getTel}
})