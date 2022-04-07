const targetMap = new WeakMap();
let activeEffect = null;
function effect(eff) {
  activeEffect = eff;
  activeEffect();
  activeEffect = null;
}
function track(target, key) {
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
function trigger(target, key) {
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
function reactive(target) {
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
    }
  })
}

function ref(raw) {
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
// function ref(initalValue) {
//   return reactive({ value: initalValue });
// }

const product = reactive({ price: 5, quantity: 2 });

let salePrice = ref(0);
let total = 0;
effect(() => {
  total = salePrice.value * product.quantity;
})
effect(() => {
  salePrice.value = product.price * 0.9;
})

console.log(`Before updated total (should be 9) = ${total} salePrice (should be 4.5) = ${salePrice}`);
product.quantity = 3;
console.log(`After updated total (should be 13.5) = ${total} salePrice (should be 4.5) = ${salePrice}`);
product.price = 10;
console.log(`After updated total (should be 27) = ${total} salePrice (should be 9) = ${salePrice}`);

let t = ref(0);
let n = 0;
effect(() => {
  n = t.value * 3;
})
console.log(`ref(0).value (should be 0) = ${t.value}`);
console.log(`n (should be 0) = ${n}`);
t.value = 3;
console.log(`after set t.value = 3 t.value (should be 3) = ${t.value}`);
console.log(`n (should be 9) = ${n}`);
