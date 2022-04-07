function createCurry(fn, args) {
  const needArgLength = fn.length; // 返回fn函数所需要的参数长度
  return function (...rest) {
    const next_args = [...(args || []), ...rest];
    if (next_args.length < needArgLength) {
      return createCurry(fn, next_args);
    } else {
      return fn.apply(this, next_args)
    }
  }
}

// 简单实现，参数只能从右到左传递
// function createCurry(func, args) {
//   var arity = func.length;
//   var args = args || [];

//   return function() {
//       var _args = [].slice.call(arguments);
//       [].push.apply(_args, args);

//       // 如果参数个数小于最初的func.length，则递归调用，继续收集参数
//       if (_args.length < arity) {
//           return createCurry.call(this, func, _args);
//       }

//       // 参数收集完毕，则执行func
//       return func.apply(this, _args);
//   }
// }
function add(n1, n2, n3) {
  return n1 + n2 + n3;
}
const addCurry = createCurry(add);
const result = addCurry(1)(2)(3);
const result1 = addCurry(1)(2, 3);
const result3 = addCurry(1, 2, 3);
console.log('addCurry(1)(2)(3) (should 6) =', result);
console.log('addCurry(1)(2, 3) (should 6) =', result1);
console.log('addCurry(1, 2, 3) (should 6) =', result3);

function add1(n1, n2) {
  return n1 + n2;
}
const addCurry1 = createCurry(add1);
console.log(addCurry1(1)(2));