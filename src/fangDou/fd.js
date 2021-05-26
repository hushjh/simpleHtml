function throttle(fn, wait){
  var timer = null;
  return function() {
    if(timer){
      clearTimeout(timer);
    }
    timer = setTimeout(function(){
      fn.call(this, arguments);
    }, wait)
  }
}

window.addEventListener('resize', throttle(fjl, 1000))
function fjl() {
  console.log('fjl');
}