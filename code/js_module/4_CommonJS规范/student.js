const name = '张三'
const motto = '相信明天会更好！'

function getTel (){
  return '13877889900'
}

function getHobby(){
  return ['抽烟','喝酒','烫头']
}

module.exports = {name,motto,getTel}

// console.log(arguments.callee.toString())


// exports.name = name
// exports.motto = motto
// exports.getTel = getTel