define(function(require,exports,module){
  const name = '张三'
  const motto = '相信明天会更好！'

  // 引入welcome模块
  const welcome = require('./welcome')
  console.log(welcome)
  
  function getTel (){
    return '13877889900'
  }
  function getHobby(){
    return ['抽烟','喝酒','烫头']
  }

  exports.name = name
  exports.motto = motto
  exports.getTel = getTel
})