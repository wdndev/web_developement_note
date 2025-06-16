define(function(){
  const name = '张三'
  const motto = '走自己的路，让别人五路可走！'

  function getTel (){
    return '13877889900'
  }

  function getHobby(){
    return ['抽烟','喝酒','烫头']
  }
  // 导出数据
  return {name,motto,getTel}
})