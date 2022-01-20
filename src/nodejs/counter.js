// counter.js
let message = require("./main.js").message;
exports.count = 5;
setTimeout(() => {
  console.log("message:", message);
});