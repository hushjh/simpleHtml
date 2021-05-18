document.addEventListener("visibilitychange", function() {
  console.log("document.visibilityState");
});
window.addEventListener('pageshow', function(event) {
  console.log('after , pageshow :',event);
});
window.addEventListener('load', function() {
  console.log('before');
});