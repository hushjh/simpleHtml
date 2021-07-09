
const iframeUrl = "http://127.0.0.1:5500/src/postChild/pchild.html";
const eleYkb = document.querySelector("#ykb");
eleYkb.src = iframeUrl
const ykbWindow = eleYkb.contentWindow;
class Pmessage {
  constructor(w = window) {
    this.flushcb = {'who': 'wsz'};
  }
  // option = { frameName, action, data}
  addEvent() {
    window.addEventListener("message", (e) => {
      const { frameName, action, data } = e.data;
      const cb = this.flushcb[frameName + action];
      cb && typeof cb === "function" && cb(data);
    });
  }
  send(targetFrame, option) {
    // 默认是 父 window发出的消息
    const { frameName } = option;
    console.log("send from frameName:", frameName);
    targetFrame.postMessage(option, "*"); 
  }
  // 注册某一行为的回调
  registAction(option, callback) {
    // 默认监听 父window发处的消息
    const { frameName = "", action } = option;
    console.log(`frameName:${frameName} regist action:${action}`);
    this.flushcb[frameName + action] = callback;
  }
  // 清空某一行为的回调，有值清除指定的，
  clearAction(option) {
    if (!option) {
      this.flushcb = {};
    } else {
      const { frameName = "parent", action } = option;
      this.flushcb[frameName + action] = {};
    }
  }
  destroy() {
    window.removeEventListener("message", this.messageCb, false);
  }
}
const pm = new Pmessage();
pm.addEvent();
pm.registAction({frameName: "ykb", action: "trip.standard"}, function ts(data) { 
  console.log("parent receive,trip.standard data:", data);
  pm.send(ykbWindow, {
    frameName: "ykb",
    action: "trip.standard",
    data: {
      name: "zsmj",
      hobby: "reading"
    }
  })
});
pm.registAction({frameName: "ykb", action: "train.standard"}, function ts(data) { 
  console.log("parent receive,train.standard data:", data);
  pm.send(ykbWindow, {
    frameName: "ykb",
    action: "train.standard",
    data: {
      name: "huihui",
      hobby: "swiming"
    }
  })
});


