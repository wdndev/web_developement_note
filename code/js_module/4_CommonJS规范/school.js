const name = '尚硅谷'
const slogan = '让天下没有难学的技术！'

function getTel (){
  return '010-56253825'
}

function getCities(){
  return ['北京','上海','深圳','成都','武汉','西安']
}

module.exports = {name,slogan,getTel}

// this.c =789
// exports = {a:1}
// exports.b = 2
// module.exports.c = 3
// module.exports = {d:4}

// console.log(this)
// console.log(exports)
// console.log(module.exports)
// console.log(this === exports && exports === module.exports)

// exports.name = name
// exports.slogan = slogan
// exports.getTel = getTel
