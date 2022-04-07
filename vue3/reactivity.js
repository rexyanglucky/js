const targetMap = new WeakMap();

const product = { price: 5, quantity: 2 };
let total = 0;
let effect = () => {
  total = product.price * product.quantity;
}

/**手动进行依赖收集 */
track(product, 'quantity');
effect();

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

