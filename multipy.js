function multipy(x) {
  if (x || x === 0) {
    return function (y) {
      if (y || y === 0) {
        x = x * y;
        return multipy(x);
      }
      return x;
    }
  }
  return 0;
}
function multipyt(fn) {
  return function t (x) {
    if (x || x === 0) {
      return function (y) {
        if (y || y === 0) {
          x = fn(x, y);
          return t(x);
        }
        return x;
      }
    }
    return 0;
  }
}
console.log(multipy(2)(3)(4)())
console.log(multipyt((x,y) => x + y)(2)(3)(4)())

