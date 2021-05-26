// 工具方法：判断是否是一个对象（注：typeof 数组 也等于 'object'
const isObject = val => val !== null && typeof val === 'object';
const hasChanged = (value, oldValue) => value !== oldValue;
const hasOwn = (val, key) => Reflect.has(val, key);
function createGetter(shallow = false, isReadonly = false) {
    return function (target, key, receiver) {
        const res = Reflect.get(target, key, receiver);
        console.log(`getting key：${key}`);
        // track(target, 'get' /* GET */, key);
        // shallow = true,就直接reurn 结果，所以不会深沉追踪
        if (shallow === true) {
          return res;
        }
        if (!isReadonly) {
          // track()
        }
        // 深层代理对象的关键！！！判断这个属性是否是一个对象，是的话继续代理动作，使对象内部的值可追踪
        if (isObject(res)) {
          return isReadonly ? readonly(res) : reactive(res);
        }
        return res;
      };
}

const set = (target, key, value, receiver) => {
    const oldValue = target[key];
    const hadKey = hasOwn(target, key);
    const result = Reflect.set(target, key, value, receiver);

    // 判断当前 key 是否已经存在，不存在的话表示为新增的 key ，后续 Vue “标记”新的值使它其成为响应式
    if (!hadKey) {
      console.log(`add key：${key}，value：${value}`);
      // trigger(target, 'add' /* ADD */, key, value);
    } else if (hasChanged(value, oldValue)) {
      console.log(`set key：${key}，value：${value}`);
      // trigger(target, 'set' /* SET */, key, value, oldValue);
    }
    return result;
  };
const get = createGetter()

  const mutableHandlers = {
    get,
    set
    // deleteProperty
  };
  // 暴露出去的方法，reactive
  function reactive(target) {
    return createReactiveObject(target, mutableHandlers);
  }
  // shawReactive
  const shallowGet = createGetter(true);
  const shallowReactiveHandlers = {...mutableHandlers, ...{get: shallowGet}};
  function shallowReactive(target) {
    return createReactiveObject(target, shallowReactiveHandlers);
  }
  // readonly
  const readonlyGet = createGetter(false, true);
  // 只读处理起对象
  const readonlyHandlers = {
    get: readonlyGet,
    // 只读，不允许set， 所以这里警告
    set(target, key) {
      console.warn(`Set operation on key "${String(key)}" failed: target is readonly`, target);
      return true;
    }
  }
  function readonly(target) {
    return createReactiveObject(target, readonlyHandlers);
  }
  // shallowReadonly   shallow = true & readonly = true
  const shallowReadonlyGet = createGetter(true, true);
  const shallowReadonlyHandlers = {...readonlyHandlers, ...{get: shallowReadonlyGet}};
  function shallowReadonly(target) {
    return createReactiveObject(target, shallowReadonlyHandlers);
  }
  // 创建一个响应式对象
  function createReactiveObject(target, baseHandlers) {
    const proxy = new Proxy(target, baseHandlers);
    return proxy;
  }
  const proxyObj = readonly({
    id: 1,
    name: 'front-refined',
    childObj: {
      hobby: 'coding'
    }
  });

  // ref
  // 工具方法：判断传入的值是否是一个对象，是的话就用 reactive 来代理
  const convert = val => (isObject(val) ? reactive(val) : val);
  function toRaw(observed) {
    return (observed && toRaw(observed['__v_raw' /* RAW */])) || observed;
  }
  class RefImpl {
    constructor(_rawValue, _shallow = false) {
      this._rawValue = _rawValue;
      this._shallow = _shallow;
      this.__v_isRef = true;
      this._value = _shallow ? _rawValue : convert(_rawValue);
    }
    get value() {
      return this._value;
    }
    set value(newVal) {
      if (hasChanged(toRaw(newVal), this._rawValue))
      this._rawValue = newVal;
      this._value = this._shallow ? newVal : convert(newVal);
    }
  }
  function isRef(r) {
    return Boolean(r && r.__v_isRef === true);
  }
  function unref(ref) {
    return isRef(ref) ? ref.value : ref;
  }
  // 创建一个ref 实例
  function createRef(rawValue, shallow = false) {
    return new RefImpl(rawValue, shallow);
  }
  function ref(value) {
    return createRef(value);
  }
  function shallowRef(value) {
    return createRef(value, true);
  }
  let obj = ref({
    id: 1,
    name: 'front-refined',
    childObj: {
      hobby: 'coding'
    }
  });

