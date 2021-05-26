let gListenerRegistry = new FinalizationRegistry(
  // ({map, key}) => {
  //   debugger;
  //   if (map.has(key)) {
  //     let unref = map.get(key).deref()
  //     if (map.get(key) !== undefined && unref === undefined) {
  //       map.delete(key)
  //     }
  //   }
  // }
  () => {
    console.log('gListenerRegistry');
  }
);
// let obj = {name: 'xiao'}
// let ref = new WeakRef(obj)
// let map = new Map()
// map.set('xiao', ref)
// gListenerRegistry.register(obj, {map, key:'xiao'})

obj = {}
class Counter {
  constructor(element) {
    // Remember a weak reference to the DOM element
    this.ref = new WeakRef(element);
    this.start();
  }

  start() {
    if (this.timer) {
      return;
    }

    this.count = 0;

    const tick = () => {
      // Get the element from the weak reference, if it still exists
      const element = this.ref.deref();
      console.log('element:', element);
      if (element) {
        element.textContent = ++this.count;
      } else {
        // The element doesn't exist anymore
        console.log("The element is gone.");
        this.stop();
        this.ref = null;
      }
    };

    tick();
    this.timer = setInterval(tick, 1000);
    gListenerRegistry.register(obj, {})
  }

  stop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = 0;
    }
  }
}

const counter = new Counter(document.getElementById("counter"));
counter.start();
setTimeout(() => {
  document.getElementById("counter").remove();
}, 5000);
