
function sleep(delay) {
  var time = new Date().valueOf()
  while(new Date().valueOf() - time < delay) {}
}
// 通过文件来创建一个Web Worker
const myWorker = new Worker('./worker.js')
 
let msg = "wsz"
// 向你的免费劳工传递信息
myWorker.postMessage(msg)
 
// 做好数据监听的工作，好在它完成任务的时候能够及时响应
myWorker.onmessage = function(e) {
  // 在这里你可以充分利用它的劳动成果做任何你想做的事
  console.log("onmessage, e:", e);
  document.querySelector(".txt").innerHTML = e.data
}
sleep(200)
setTimeout(() => {
  sleep(100)
},0)
setTimeout(() => {
  sleep(100)
},200)
