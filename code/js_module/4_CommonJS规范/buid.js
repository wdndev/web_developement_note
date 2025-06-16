(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const {name,slogan,getTel} = require('./school.js')
const {name:stuName,motto,getTel:stuTel} = require('./student.js')

console.log(name)
console.log(slogan)
console.log(getTel())

console.log(stuName)
console.log(motto)
console.log(stuTel())
},{"./school.js":2,"./student.js":3}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
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
},{}]},{},[1]);
