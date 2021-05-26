function sleep(delay) {
  var time = new Date().valueOf()
  while(new Date().valueOf() - time < delay) {}
}
// 随时等候主人的调遣
this.onmessage = function(e) {
  // 主人的命令就藏在e.data中
  console.log("worker.js onmessage, e:", e);
  const msg = e.data
  sleep(2000)
  // 任劳任怨，勤勤恳恳...
 
  // 告诉主人我的工作做完了
  let result = "hello" + msg
  postMessage(result)
}
