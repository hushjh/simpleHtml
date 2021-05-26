
let ps = document.querySelectorAll('.paragraph')
const benchmark = document.querySelector('.benchmark')
// ps = Array.from(ps)
let i = ps.length
 
// 如果你想和你的浏览器搞好关系 你最好这么写
size = benchmark.offsetWidth
while (i--) {
  ps[i].style.width = size + 'px'
}
benchmark.style.backgroundColor = "#f2f2f2"
benchmark.style.transform = "rotateX(45deg)"
console.log("backgroundColor:", benchmark.style.backgroundColor);
// 否则你可以强迫浏览器这么做
// while (i--) {
//   ps[i].style.width = benchmark.offsetWidth + 'px'
// }
