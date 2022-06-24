const Readable = require('stream').Readable;
class RandomNumberStream extends Readable {
    constructor(max) {
        super()
        this.max = max;
    }
    _read() {
        const ctx = this;
        setTimeout(() => {
          if (ctx.max) {
            const randomNumber = parseInt(Math.random() * 10000);
            // 只能 push 字符串或 Buffer，为了方便显示打一个回车
            ctx.push(`${randomNumber}\n`);
            this.max -= 1;
          } else {
            this.push(null);
          }
        }, 100);
    }
}
module.exports = RandomNumberStream;