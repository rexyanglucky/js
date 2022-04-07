const targetMap = new WeakMap();
let activeEffect = null;
export function effect(eff) {
  activeEffect = eff;
  activeEffect();
  activeEffect = null;
}
/**
 * 依赖收集
 * @param {*} target 
 * @param {*} key 
 */
 export function track(target, key) {
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    targetMap.set(target, depsMap = new Map());
  }
  let dep = depsMap.get(key);
  if (!dep) {
    depsMap.set(key, dep = new Set());
  }
  if (activeEffect) {
    dep.add(activeEffect);
  }
}
/**
 * 触发依赖
 * @param {*} target 
 * @param {*} key 
 * @returns 
 */
 export function trigger(target, key) {
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    return;
  }
  let dep = depsMap.get(key);
  if (dep) {
    dep.forEach(effect => {
      effect();
    });
  }
}
/**
 * 生成代理对象，可响应
 * @param {*} target 
 * @returns 
 */
 export function reactive(target) {
  return new Proxy(target, {
    get(target, p, receiver) {
      track(target, p);
      return Reflect.get(target, p, receiver);
    },
    set(target, p, value, receiver) {
      const oldValue = Reflect.get(target, p, receiver);
      if (oldValue !== value) {
        const result = Reflect.set(target, p, value, receiver);
        if (result) {
          trigger(target, p);
        }
      }
      // set 方法必须设置一个返回值， 否则在严格模式下报错
      // TypeError: 'set' on proxy: trap returned falsish for property 'quantity'
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set
      return true;
    }
  })
}
/**
 * 原始值可响应
 * @param {*} raw 
 * @returns 
 */
 export function ref(raw) {
  const r = {
    get value() {
      track(r, 'value');
      return raw;
    },
    set value(newVal) {
      if (raw !== newVal) {
        raw = newVal;
        trigger(r, 'value');
      }
    }
  }
  return r;
}

