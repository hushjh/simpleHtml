const stream = require("stream")
class uppercaseTransform extends stream.Transform {
  constructor(options) {
    super(options);
  }
  _transform(data, encoding, callback) {
    console.log("_transform data:", data.toString());
    let str = data.toString();
    str = str.toUpperCase();
    callback(null, str);
  }
}
// module.exports = uppercaseTransform;
const uppercase = new uppercaseTransform({
  writableObjectMode: true
});
uppercase.on('data', (chunk) => {
  console.log("uppercase data:", chunk);
})
// stream.Duplex.from("hello").pipe(uppercase).pipe(process.stdout);
// process.stdout.write("i am god");
uppercase.write(100)
