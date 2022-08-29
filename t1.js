function curry(fn, len) {
  const argsLength = fn.length;
  let args = [];
  return function inner(...rest) {
    args = [...args, ...rest];
    if (args.length >= argsLength) {
      const result = fn(...args);
      args = [];
      return result;
    } else {
      return inner;
    }
  };
}
function createCurry(fn, args) {
  const argsLength = fn.length;
  return function (...rest) {
    const temp = [...(args || []), ...rest];
    if (temp.length >= argsLength) {
      return fn(...temp);
    } else {
      return createCurry(fn, temp);
    }
  };
}
const t = curry((a1, a2, a3) => {
  return a1 + a2 + a3;
});
const t1 = curry((a1, a2, a3) => {
  return a1 + a2 + a3;
});
const t2 = createCurry((a1, a2, a3) => {
  return a1 + a2 + a3;
});
console.log(t(1)(2)(3));
console.log(t(1, 2)(3));
console.log(t2(1, 2)(3));

function c1(fn, args) {
  const needArgsLength = fn.length;
  return function (...rest) {
    const temp = [...(rest || []), ...(args || [])];
    if (temp.length >= needArgsLength) {
      return fn(...temp);
    } else {
      return c1(fn, temp);
    }
  };
}
