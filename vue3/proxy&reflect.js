const targetMap = new WeakMap();

/**
 * 依赖收集
 * @param {*} target 
 * @param {*} key 
 */
function track(target, key) {
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    targetMap.set(target, depsMap = new Map());
  }
  let dep = depsMap.get(key);
  if (!dep) {
    depsMap.set(key, dep = new Set());
  }
  dep.add(effect);
}

/**
 * 触发依赖
 * @param {*} target 
 * @param {*} key 
 * @returns 
 */
function trigger(target, key) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    return;
  }
  const dep = depsMap.get(key);
  if (dep) {
    dep.forEach(effect => {
      effect();
    })
  }
}

function reactive(target) {
  return new Proxy(target, {
    get: (target, key, receiver) => {
      const value = Reflect.get(target, key, receiver);
      // 收集依赖
      track(target, key);
      return value;
    },
    set: (target, key, value, receiver) => {
      const oldValue = Reflect.get(target, key, receiver);
      if (oldValue !== value) {
        Reflect.set(target, key, value, receiver);
        trigger(target, key);
      }
    },
  });
}

const product = reactive({ price: 5, quantity: 2 });
let total = 0;

let effect = () => {
   total = product.price * product.quantity;
}
effect();
