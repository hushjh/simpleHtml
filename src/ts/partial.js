export var persons = [
    {
        type: "user",
        name: "Max Mustermann",
        age: 25,
        occupation: "Chimney sweep"
    },
    {
        type: "admin",
        name: "Jane Doe",
        age: 32,
        role: "Administrator"
    },
    {
        type: "user",
        name: "Kate Müller",
        age: 23,
        occupation: "Astronaut"
    },
    {
        type: "admin",
        name: "Bruce Willis",
        age: 64,
        role: "World saver"
    },
    {
        type: "user",
        name: "Wilson",
        age: 23,
        occupation: "Ball"
    },
    {
        type: "admin",
        name: "Agent Smith",
        age: 23,
        role: "Administrator"
    },
];
export var isAdmin = function (person) {
    return person.type === "admin";
};
export var isUser = function (person) {
    return person.type === "user";
};
export function logPerson(person) {
    var additionalInformation = "";
    if (isAdmin(person)) {
        additionalInformation = person.role;
    }
    if (isUser(person)) {
        additionalInformation = person.occupation;
    }
    console.log(" - " + person.name + ", " + person.age + ", " + additionalInformation);
}
export function filterUsers(persons, criteria) {
    return persons.filter(isUser).filter(function (user) {
        var criteriaKeys = Object.keys(criteria);
        return criteriaKeys.every(function (fieldName) {
            return user[fieldName] === criteria[fieldName];
        });
    });
}
console.log("Users of age 23:");
filterUsers(persons, {
    age: 23
}).forEach(logPerson);
/** 我们使用了 extends 约束了泛型 T 必须符合接口 Lengthwise 的形状，
 * 也就是必须包含 length 属性。*/
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
loggingIdentity([]);
var mySearch;
mySearch = function (source, subString) {
    return source.search(subString) !== -1;
};
var createArray;
/** 泛型的动机 和 示例 */
var Queue = /** @class */ (function () {
    function Queue() {
        var _this = this;
        this.data = [];
        this.push = function (item) { return _this.data.push(item); };
        this.pop = function () { return _this.data.shift(); };
    }
    return Queue;
}());
var queue = new Queue();
queue.push(0);
queue.push(1);
console.log(queue.pop().toPrecision(1));
console.log(queue.pop().toPrecision(1));
function identity(arg) {
    console.log(arg.length);
    return arg;
}
var output = identity("myString");
// let myIdentity: { <T extends Lengthwise>(arg: T): T } = identity;
var myIdentity = identity;
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
