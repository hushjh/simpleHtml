var x = 5;
var y = 10;
var addx = function(value) {
  return value + x;
}
module.exports.x = x;
exports.addx = addx;
this.y = y;
const load = (path) => {
  const mods = require(`../jsBase/${path}.js`);
  console.log('mods:', mods);
};
load('promise');
console.log("Module:", module.require);


// console.log('module.id: ', module.id);
// console.log('module.exports: ', module.exports);
// console.log('module.parent: ', module.parent);
// console.log('module.filename: ', module.filename);
// console.log('module.loaded: ', module.loaded);
// console.log('module.children: ', module.children);
// console.log('module.paths: ', module.paths);