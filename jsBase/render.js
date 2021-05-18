function sleep(delay) {
  var time = new Date().valueOf()
  while(new Date().valueOf() - time < delay) {}
}
// let i = 0
// document.querySelector('.box').addEventListener('click',() => {
//   console.log("click")
//   document.querySelector('.txt').innerHTML = 'hello'
//   // document.querySelector('.txt').innerHTML = i++
// })
// function draw() {
//   sleep(50)
//   document.querySelector('.txt').innerHTML = i++
//   document.querySelector('.txt').style.fontSize = "40px"
//   if (i < 100) {
//     requestAnimationFrame(() => {
//       draw()
//     })
//   }
// }
// draw()
// var time = new Date().valueOf()
// while(new Date().valueOf() - time < 5000) {}

// requestAnimationFrame(()=> {
//   console.log("requestAnimationFrame")
// })
// document.querySelector('body').innerHTML = Math.random()
// console.log(document.querySelector('body').innerHTML) 
// var time = new Date().valueOf()
// while(new Date().valueOf() - time < 3000) {}
// console是最新的随机数，页面2秒后更新

// document.querySelector('body').innerHTML = Math.random()
// console.log(document.querySelector('body').innerHTML)
// Promise.resolve().then(()=>{
//     var time = new Date().valueOf()
//     while(new Date().valueOf() - time < 2000) {}
// })
// console是最新的随机数，页面2秒后更新

// document.querySelector('body').innerHTML = Math.random()
// console.log(document.querySelector('body').innerHTML)
// setTimeout(()=>{
//     var time = new Date().valueOf()
//     while(new Date().valueOf() - time < 2000) {}       
// }, 1)
// console是最新的随机数，页面2秒后更新

// document.querySelector('body').innerHTML = Math.random()
// console.log(document.querySelector('body').innerHTML)
// setTimeout(()=>{
//     var time = new Date().valueOf()
//     while(new Date().valueOf() - time < 2000) {}       
// }, 100)
// console是最新的随机数，页面立刻更新

// const ele = document.querySelector('body')
// let id = 0
// function render() {
//   console.log("id:", id)
//   window.requestAnimationFrame(() => {
//     ele.innerHTML = id
//     if (id < 100) {
//       render(++id)
//     }
//   })
// }
// render()

// function createBoll() {
//   sleep(30) // 模拟30ms操作
//   const boll = document.createElement("div")
//   boll.classList.add("boll")
//   document.body.append(boll)
// }
/* 直接执行大任务 */
const COUNT = 100
// function longTask() {
//   requestAnimationFrame(() => {
//     for (i = 0; i<COUNT; i++){
//       createBoll()
//     }
//   })
// }
// longTask();
// function chunkTask() {
//   let i = 0
//   requestAnimationFrame(function doOne() {
//     createBoll()
//     if (++i < COUNT) {
//       requestAnimationFrame(doOne)
//     }
//   })
// }
// chunkTask()

// 多个短时间宏任务 会合并成一次渲染
function test() {
  setTimeout(() => {
    document.querySelector('.txt').innerHTML = '0'
    document.querySelector('.txt').style.fontSize = "40px"
  }, 1)
  setTimeout(() => {
    document.querySelector('.txt').innerHTML = '1'
    document.querySelector('.txt').style.fontSize = "40px"
  }, 1)
  setTimeout(() => {
    document.querySelector('.txt').innerHTML = '2'
    document.querySelector('.txt').style.fontSize = "40px"
  }, 20)
}
test()