let url = require("url");
let http = require("http");

let str = "http://root:123456@www.it6666.top:80/index.html?name=BNTang&age=68#banner";
let obj = url.parse(str, true);
console.log(obj);
console.log(obj.query.name);
console.log(obj.query.age);