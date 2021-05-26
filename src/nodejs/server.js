console.log('i am server.js')
const TAEGET = process.env.npm_lifecycle_event;
console.log("TAEGET:",TAEGET)
console.log("process.env.npm_package_name:", process.env.npm_package_name)
var args = process.argv
console.log("process.argv:", args)