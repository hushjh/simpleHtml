var obj = {
  count: 1,
};
var p = new Proxy(obj, {
  has: function() {}
})