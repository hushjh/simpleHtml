
function sleep(delay) {
  console.log("sleep start")
  var time = new Date().valueOf()
  while(new Date().valueOf() - time < delay) {}
  console.log("sleep end")
}
console.log('script start');
// document.querySelector('.box').addEventListener('click',() => {
//   console.log(".box click")
// })
// document.querySelector('.inner').addEventListener('click',() => {
//   console.log(".inner click")
// })

document.querySelector('.txt').innerHTML = 'hello world'
document.querySelector('.txt').style.fontSize = "40px"
setTimeout(function() {
    console.log('setTimeout');
}, 0);

Promise.resolve().then(function() {
    console.log('promise1');
}).then(function() {
    console.log('promise2');
});
sleep(2000)
console.log('script end');