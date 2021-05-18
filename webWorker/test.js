function sleep(delay) {
  var time = new Date().valueOf()
  while(new Date().valueOf() - time < delay) {}
}
sleep(100)