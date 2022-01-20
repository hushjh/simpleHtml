let start = Date.now();
let count = 0;
function repeatOften() {
  const now = Date.now();
  count++;
  document.querySelector(".count-value").innerHTML = count;
  console.log("repeatOften:", now - start);
  start = now;
  requestAnimationFrame(repeatOften);
}
requestAnimationFrame(repeatOften);