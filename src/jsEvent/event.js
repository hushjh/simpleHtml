
/****************************addEventListener 第三个参数为false， 冒泡 */
var div = document.querySelector("div");
var op = document.querySelector("P");
var oimg = document.querySelector("img");
var input = document.querySelector("input");

//绑定事件
div.addEventListener("click", function (ev) {
  console.log("capture div")
  console.log("eventPhase:", ev.eventPhase);
}, true)
div.addEventListener("click", function (ev) {
  console.log("bubbles div")
  console.log("eventPhase:", ev.eventPhase);
}, false)

op.addEventListener("click", ev => {
  console.log("bubbles p")
  console.log("eventPhase:", ev.eventPhase);
  ev.stopPropagation();
}, false)
op.addEventListener("click", ev => {
  console.log("bubbles p2")
  console.log("eventPhase:", ev.eventPhase);
  ev.stopImmediatePropagation();
}, false)
op.addEventListener("click", ev => {
  console.log("bubbles p3")
  console.log("eventPhase:", ev.eventPhase);
  // ev.stopPropagation();
}, false)
op.addEventListener("click", ev => {
  console.log("capture p");
  console.log("eventPhase:", ev.eventPhase);
}, true)

oimg.addEventListener("click", ev => {
  console.log("bubbles img");
  console.log("eventPhase:", ev.eventPhase);
}, false)
oimg.addEventListener("click", ev => {
  console.log("capture img");
  console.log("eventPhase:", ev.eventPhase);
}, true)
input.addEventListener("blur", ev => {
  console.log("capture blur");
  console.log("eventPhase:", ev.eventPhase);
  console.log("ev:", ev);
}, true)