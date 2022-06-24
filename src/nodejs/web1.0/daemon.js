var cp = require("child_process");
var worker;
function spawn(server, config = "") {
  debugger;
  // worker = cp.spawn("node", [server, config])
  worker = cp.fork(server);
  worker.on("spawn", () => {
    console.log("进程启动成功");
  })
  worker.on("message", m => {
    console.log("daemon 接收到返回结果:", m);
  });
  worker.on("error", (err) => {
    console.log("failed to start subprocess", err)
  })
  worker.on("exit", (code, signal) => {
    console.log('进程退出', code, signal)
    if (code !==0) {
      fork(server,config)
    }
  })
  worker.send({ type: "fib", data: 10 });
}
function main(argv){
  spawn("main.js", argv[0]);
  process.on("SIGTERM", () => {
    worker.kill();
    process.exit(0);
  })
}
main(process.argv.slice(2))