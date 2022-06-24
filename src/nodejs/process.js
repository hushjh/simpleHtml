process.on("uncaughtException", (err) => {
  console.log("Error; %s", err.message);
})
setTimeout((fn) => {
  fn();
});