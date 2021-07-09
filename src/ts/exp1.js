"use strict";
exports.__esModule = true;
exports.logPerson = exports.users = void 0;
exports.users = [
    {
        name: "Max Mustermann",
        age: 25,
        occupation: "Chimney sweep"
    },
    {
        name: "Kate Müller",
        age: 23,
        occupation: "Astronaut"
    },
];
function logPerson(user) {
    console.log(" - " + user.name + ", " + user.age);
}
exports.logPerson = logPerson;
console.log("Users:");
exports.users.forEach(logPerson);
// const num = Math.floor(3.24);
// let a = 1;
// type A = typeof a;
// let b:A = 2;
// const a = 1;
// type A = typeof a;
// let b:A = 1;
// function test(a: number, b: number) {
//   return a + b;
// }
// type A = ReturnType<typeof test>
// let b: A = 3;
