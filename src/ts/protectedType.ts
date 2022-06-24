function doSome(x: number | string) {
  if (typeof x === 'string') {
    // 在这个块中，TypeScript 知道 `x` 的类型必须是 `string`
    // console.log(x.subtr(1)); // Error: 'subtr' 方法并没有存在于 `string` 上
    console.log(x.substr(1)); // ok
  }

  // x.substr(1); // Error: 无法保证 `x` 是 `string` 类型
}

class Popper {
	construct(reference: string, popper: string, options: string) {
  }
}
const p = new Popper();
