// main.mjs
export const message = {value: "eval complete"};
import {repeat, shout} from "./lib.js";
console.log(repeat("hello"));
console.log(shout("Modules in action"));
// import * as amod from "./a.js";
// console.log("amod:", amod.default); 