// class Person {
//   constructor(name,age) {
//     this.name = name
//     this.age = age

//   }
//   getName() {
//     return this.name
//   }
//   eat(){
//     console.log(`${this.name} eat something`)
//   }
//   speak(){
//     console.log(`My name is ${this.name} ,age ${this.age}`)
//   }
// }
// class Student extends Person {
//   constructor(name,age,number) {
//     super(name,age);
//     this.number = number;
//   }
//   getName() {
//     return this.name
//   }
//   eat(){
//     console.log(`${this.name} eat something`)
//     alert( `${this.name}在吃东西`);

//   }
//   speak(){
//     console.log(`My name is ${this.name} ,age ${this.age}`)
//   }
// }
// let person = new Person('hsx')
// console.log(person.getName())
// person.eat();
// function loadImg(src) {
//   return new Promise(function (resolve, reject) {
//     let img = document.createElement('img')
//     img.onload = function () {
//       resolve(img)
//     }
//     img.onerror = function () {
//       reject('图片加载失败')
//     }
//     img.src = src
//   })
// }
// let src = "https://dss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=1189779147,4248115718&fm=202&mola=new&crop=v1"
// let result = loadImg(src)
// result.then(function (img) {
//   alert(`width:${img.width}`)
//   return img
// }).then(img => {
//   alert(`height:${img.height}`)
// }).catch(err => {
//   alert(`报错：${err}`)
// })
//货运算法
// function work(a,b,c){
//   let x,y
//   x = ((a*b*c)+(a*c*c)-(b*c*c))/(2*((a*b)+(a*c)+(b*c)))
//   y = ((a*b*c)-(a*c*c)+(b*c*c))/(2*((a*b)+(a*c)+(b*c)))
//   console.log(x)
//   console.log(y)
// }
// work(2,3,6)
function test() {
  let map = new Map([['a',123],['b',456]]);
  console.log('map args',map);
  console.log('size',map.size);
  console.log('delete',map.delete('a'),map);
  console.log('clear',map.clear(),map);
}
test()