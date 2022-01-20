function doSome(x) {
    if (typeof x === 'string') {
        // 在这个块中，TypeScript 知道 `x` 的类型必须是 `string`
        // console.log(x.subtr(1)); // Error: 'subtr' 方法并没有存在于 `string` 上
        console.log(x.substr(1)); // ok
    }
    // x.substr(1); // Error: 无法保证 `x` 是 `string` 类型
}
var Foo = /** @class */ (function () {
    function Foo() {
        this.foo = 123;
        this.common = '123';
    }
    return Foo;
}());
var Bar = /** @class */ (function () {
    function Bar() {
        this.bar = 123;
        this.common = '123';
    }
    return Bar;
}());
function doStuff(arg) {
    if (arg instanceof Foo) {
        console.log(arg.foo); // ok
        // console.log(arg.bar); // Error
    }
    if (arg instanceof Bar) {
        // console.log(arg.foo); // Error
        console.log(arg.bar); // ok
    }
}
doStuff(new Foo());
doStuff(new Bar());
