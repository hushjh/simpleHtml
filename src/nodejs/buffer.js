debugger;
const arr = new Uint16Array(2);
arr[0] = 5000;
arr[1] = 4000;

const buf3 = Buffer.from(arr);
console.log("buf3:", buf3);
// 和 arr 共享内存
const buf4 = Buffer.from(arr.buffer);
console.log(buf4); // <Buffer 88 13 a0 0f>