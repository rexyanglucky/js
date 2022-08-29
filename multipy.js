// function multipy(x) {
//   if (x || x === 0) {
//     return function (y) {
//       if (y || y === 0) {
//         x = x * y;
//         return multipy(x);
//       }
//       return x;
//     }
//   }
//   return 0;
// }
// function multipyt(fn) {
//   return function t(x) {
//     if (x || x === 0) {
//       return function (y) {
//         if (y || y === 0) {
//           x = fn(x, y);
//           return t(x);
//         }
//         return x;
//       }
//     }
//     return 0;
//   }
// }
// function multipy1(n) {
//   if (!n) {
//     return 0;
//   } else {
//     return (arg) => {
//       if (arg) {
//         n = n * arg;
//         return multipy1(n);
//       } else {
//         return n;
//       }
//     }
//   }
// }
// function multipy(f) {
//   let result = f;
//   const fn = (x) => {
//     if (x) {
//       result = result + x;
//       return fn;
//     } else {
//       return result;
//     }
//   };
//   return fn;
// }

// // 简单实现，参数只能从右到左传递
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
// console.log(multipy(2)(3)(4)())
// console.log(multipy1(2)(3)(4)())
// console.log(multipyt((x, y) => x + y)(2)(3)(4)())

function m1(...args) {
  const innerFun = function (...rest) {
    return m1(...[...args, ...rest]);
  }
  innerFun.toString = function () {
    return args.reduce((a, b) => {
      return a + b;
    })
  }
  return innerFun;
}
function m2(...args) {
  const innerFun = function (...rest) {
    if (rest.length > 0) {
      return m2(...[...args, ...rest]);
    } else {
      return args.reduce((a, b) => {
        return a + b;
      })
    }
  }
  return innerFun;
}

console.log(`m1(1)(2)(3)(4).toString() (should be 10) = ${m1(1)(2)(3)(4).toString()}`)
console.log(`m1(1,2)(2)(3)(4).toString() (should be 12) = ${m1(1, 2)(2)(3)(4).toString()}`)
console.log(`m2(1)(2)(3)(4)() (should be 10) = ${m2(1)(2)(3)(4)()}`)
console.log(`m2(1,2)(3)(4)() (should be 10) = ${m2(1,2)(3)(4)()}`)

