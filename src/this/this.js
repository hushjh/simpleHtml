
var value = 1;

function foo() {
    console.log(value);
}

function bar() {
    var value = 2;
    foo();
}

bar();

// function Person (pName) {
//   this.pName = pName;
// }

// Person.prototype.sayName = () => {
//   console.log(this === window); // => true
//   return this.pName;
// }
// var person = new Person('wdg');

// person.sayName();

// var obj = {  
//   array: [1, 2, 3],
//   sum: () => {
//     console.log(this === window); // => true
//     return this.array.reduce((result, item) => result + item);
//   }
// };
// obj.sum();