// function Person(name, age){
//   this.name = name;
//   this.age = age;
//   var des = "ni cai a "
//   this.sayHello = function() {
//     console.log("this:", this);
//     console.log(name + age + des);
//   }
// }
// function list(arrayLike) {
//   return Array.prototype.slice.apply(arrayLike);
// }
// function _new(Cons){
//   var obj = {};
//   var args = list(arguments).slice(1);
//   debugger;
//   Cons.apply(obj, args)
//   obj.__proto__ = Cons.prototype;
//   return obj;
// }
// var boy = new Person('xiao ming', 12)
// // var girl = new Person('xiao ying zi', 14);
// var girl = _new(Person, 'xiao ying', 14)
// boy.sayHello()
// girl.sayHello()
// fn()
// var myObject = {};
// Object.defineProperty(
//   myObject, "a", // 让 a 像普通属性一样可以枚举 
//   {
//     enumerable: true,
//     value: 2
//   }
// );
// Object.defineProperty(
//   myObject, "b", // 让 b 不可枚举 
//   { enumerable: false, value: 3 }
// );
// myObject.propertyIsEnumerable( "a" ); // true 
// myObject.propertyIsEnumerable( "b" ); // false 
// console.log("keys:", Object.keys( myObject )); // ["a"] 
// console.log("names:", Object.getOwnPropertyNames( myObject )); // ["a", "b"]
// var obj = {name: 'xiao'}
// for (let key in obj){
//   console.log("key:", key);
// }
// function *createIterator() {
//   var o = this;
//   var idx = 0;
//   var ks = Object.keys(o);
//   yield o[ks[idx++]];
// }
// obj = {
//   name: 'xiao',
//   // [Symbol.iterator]: createIterator
// }
// var iterable = Object.create(Object.prototype, {
//   [Symbol.iterator]: {
//     enumerable: false,
//     writable: false,
//     configurable: true,
//     value: createIterator
//   }
// });
// Object.setPrototypeOf(obj, iterable);
// for(item of obj){
//   console.log("1:", item);
// }
// var anotherObject = { a:2 };
// Object.defineProperty(anotherObject, 'b', {
//   value: '1',
//   writable: false
// })
// Object.defineProperty(anotherObject, 'c', {
//   set(value){
//     this._c_ = value;
//   },
//   get(){
//     return this._c_;
//   }
// })
// var myObject = Object.create( anotherObject );
// var arr = [1,2,3,4,5]
// var hasdoc = arr.every(item => {
//   if (item < 4) {
//     return true;
//   } else {
//     return false;
//   }
// })
// console.log("hasdoc:", hasdoc);
// class C {
//   constructor() {
//     C.prototype.count++;
//     this.num = Math.random();
//     this.count++;
//   }
//   rand() {
//     console.log("Random: " + this.num);
//   }
// }
// C.prototype.count = 0
// var c1 = new C();
// c1.rand();

// class P { foo() { console.log("P.foo"); } }
// class C extends P {
//   fooc() {
//     // super();
//   }
// }
// var c1 = new C(); c1.foo(); // "P.foo"
// var D = { foo: function () { console.log("D.foo"); } };
// var E = { foo: C.prototype.foo };// 把 E 委托到 D 
// Object.setPrototypeOf(E, D);
// E.foo(); // "P.foo"
// const throttle = (callback, delay = 800) => {
//   let timer = null;
//   return function() {
//     if (timer) {
//       clearTimeout(timer);
//     }
//     timer = setTimeout(() => {
//       callback.apply(this, arguments);
//       timer = null;
//     }, delay);
//   };
// };
// function test(){
//   console.log("hi lizhuang");
// }
// var th = throttle(test, 5000)

// function test1() {
//   console.log("11111");
// }
// var th2 = throttle(test1, 6000);
// th()
// th2()

// const throttle = (callback, delay = 800) => {
//   let timer = null;
//   return function() {
//     if (timer) {
//       console.log("if  timer = ", timer);
//       clearTimeout(timer);
//     }
//     timer = setTimeout(() => {
//       callback.apply(this, arguments);
//       timer = null;
//     }, delay);
//   };
// };
// function test(){
//   console.log("hi lizhuang");
// }
// var th = throttle(test, 5000)
// th()

// function test1() {
//   console.log("11111");
// }
// var th2 = throttle(test1, 6000);
// th2()

// const throttle = (callback, delay = 800) => {
//   return function() {
//     console.log("callback.id = ", callback.id);
//     clearTimeout(callback.id);
//     callback.id = setTimeout(() => {
//       callback.apply(this, arguments);
//     }, delay);
//   };
// };
// function test(){
//   console.log("hi lizhuang");
// }
// var th = throttle(test, 5000)
// th()
// function test1() {
//   console.log("1111");
// }
// var th1 = throttle(test1, 6000);
// th1()

// function fun() {
//   return new Promise((resolve, reject) => {
//     resolve(2)
//   })
// }
// p1 = fun()
// b = function(){return Promise.reject()}

// const inner = document.getElementById("inner");
// const outer = document.getElementById("outer");

// 监听 outer 的属性变化。
// new MutationObserver(() => console.log("mutate outer"))
//     .observe(outer, { attributes: true });

// 处理 click 事件。
// function onClick()
// {
//     console.log("click");
//     setTimeout(() => console.log("timeout"), 0);
//     Promise.resolve().then(() => console.log("promise"));
//     outer.setAttribute("data-mutation", Math.random());
// }

// 监听 click 事件。
// inner.addEventListener("click", onClick);
// outer.addEventListener("click", onClick);
// inner.click();
// console.log("end");
// console.log("start");
// pFun= (des) => {
//     return new Promise((resolve, reject)=> {
//         console.log("p fun");
//         resolve(des);
//     });
// }
// window.setTimeout(() => {
//     console.log("i am setTimeout");
// }, 0);
// p1 = pFun("i am p1")
// p2 = pFun("i am p2")
// p1.then(des => {
//     console.log(des, "then");
// });
// p2.then(des => {
//     console.log(des, "then");
// });
// foo: for (var i=0; i<4; i++) {
//     for (var j=0; j<4; j++) {
//     // 如果j和i相等，继续外层循环
//     if (j == i) {
//     // 跳转到foo的下一个循环
//     continue foo;
//     }
//     // 跳过奇数结果
//     if ((j * i) % 2 == 1) {
//     // 继续内层循环（没有标签的）
//     continue; 
//     }
//     console.log( i, j );
//     }
//    }
// if(typeof outer === "undefined") {
//     outer = 42
// }
// console.log("outer:", outer);
// first = true;
// ele = document.querySelector(".box");

// ele.addEventListener("scroll", this.handleScroll, false);
// function handleScroll(e) {
//   console.log("e:", e);
//   if (first) {
//     ele.style.paddingTop = 100 + "px";
//     // ele.scrollTop = 100;
//     first = false;
//     const paddingTop = window.getComputedStyle(e.target).paddingTop
//     console.log("padding paddingTop:", paddingTop, e.target.style.paddingTop);
//   }
// }
// ele.scrollTo({ 
//   top: 300, 
//   behavior: "smooth" 
// });
// window.open('http://www.baidu.com','_blank');
// window.open('http://www.baidu.com','_top');
const ele = document.querySelector('.inner');
ele.style.height = '700px';
ele.style.backgroundColor = '#000';
setTimeout(() => {
  ele.style.backgroundColor = 'red';
}, 3000);
window.requestAnimationFrame(() => {
  ele.style.backgroundColor = 'blue';
});
  

