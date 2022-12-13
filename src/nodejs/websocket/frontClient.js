const ws = new WebSocket('ws://127.0.0.1:9000')
// 监听与服务器建立连接
ws.onopen=function(){
  console.log('服务器已经连接')
}
// 监听message，接收来自服务端的数据
ws.onmessage=(msg)=>{
  console.log(msg.data)
}
// 监听服务器的关闭
ws.onclose=()=>{
  console.log('服务器关闭')
}

function sendMessage(){
  let msg=document.getElementById("msg").value;
  ws.send(msg)
}
init = () => {
  btnEle = document.querySelector(".btn-send");
  btnEle.onclick = sendMessage;
}
init();