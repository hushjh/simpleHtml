export var users = [
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
export function logPerson(user) {
    console.log(" - " + user.name + ", " + user.age);
}
console.log("Users:");
users.forEach(logPerson);
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
