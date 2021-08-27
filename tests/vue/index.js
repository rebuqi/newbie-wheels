let obj = {};
console.log(Reflect.__proto__ === Object.prototype); // true
console.log(obj.__proto__ === Reflect.__proto__); // true
console.log(obj.__proto__)


let str = '00'
console.log(str.__proto__)