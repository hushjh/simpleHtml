// import { foo } from "./foo";
import { Utility } from './namespace';
import * as foo from 'foo';
console.log("foo:", foo);
var bar: foo.bas;
Utility.log('call me');
jQuery('#foo');
// type strOrNum = string | number;
// let sample: strOrNum
// sample = 123
// type Callback = (data: string) => void;
// function extend<T extends object, U extends object>(first: T, second: U): T & U {
//   const result = <T & U>{};
//   for (let id in first) {
//     (<T>result)[id] = first[id];
//   }
//   for (let id in second) {
//     if (!result.hasOwnProperty(id)) {
//       (<U>result)[id] = second[id];
//     }
//   }

//   return result;
// }
// const x = extend({a: 'hello'}, {b: 42})
// interface obj {
// }
// interface objt extends obj {
//   name: string,
//   read: string
// }
// interface obju extends obj {
//   name: string,
//   swim: string
// }
// let t: objt = {
//   name: 'xiao',
//   read: 'chunmian'
// };
// let u: obju = {
//   name: 'zhuang',
//   swim: 'sss'
// };
// let res: objt & obju = {
//   read: 'hi',
//   name: 'ming',
//   swim: 'ddd'
// }
// let command: string[] | string;
// command = 'a';
// command = ['a']
// function reverse<T>(times: T[]): T[] {
//   const toreturn = [];
//   return toreturn;
// }

// let boolArray: boolean[];
// boolArray = [true, false];
// function log(message: string): void {
//   console.log(message);
// }
// let num: number;
// let str: string;
// num = null;
// str = undefined;
// let power: any;
// power = 123;
// power = '123'
// boolArray[0] = 'false'

// interface Name {
//   first: string,
//   second: string
// }
// let name: Name;
// name = {
//   first: 'John',
//   scond: 123
// }
// let name: {
//   first: string,
//   second: string
// }
// name = {
//   first: 'xiao',
//   second: 1337
// }