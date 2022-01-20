export var persons = [
    {
        name: "Max Mustermann",
        age: 25,
        occupation: "Chimney sweep"
    },
    {
        name: "Jane Doe",
        age: 32,
        role: "Administrator"
    },
    {
        name: "Kate Müller",
        age: 23,
        occupation: "Astronaut"
    },
    {
        name: "Bruce Willis",
        age: 64,
        role: "World saver"
    },
];
// export function logPerson(person: Person) {
//   let additionalInformation: string;
//   if (person.role) {
//     additionalInformation = person.role;
//   } else {
//     additionalInformation = person.occupation;
//   }
//   console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
// }
/* 类型断言， 将 person 断言为准确的类型。就是告诉 TypeScript ”交给我吧，
 person 就是 xxx 类型，有错就我的锅“。 */
// export function logPerson(person: Person) {
//   let additionalInformation: string;
//   if ((<Admin>person).role) {
//     additionalInformation = (<Admin>person).role;
//   } else {
//     additionalInformation = (<User>person).occupation;
//   }
//   console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
// }
/**另外一种方式是使用类型收缩，比如 is ， in， typeof ， instanceof 等。使得 Typescript 能够 Get 到当前的类型。”哦，
 * person 上有 role 属性啊，那它就是 Admin 类型，有问题我 Typescript 的锅“ */
export function logPerson(person) {
    var additionalInformation;
    if ("role" in person) {
        additionalInformation = person.role;
    }
    else {
        additionalInformation = person.occupation;
    }
    console.log(" - " + person.name + ", " + person.age + ", " + additionalInformation);
}
persons.forEach(logPerson);
