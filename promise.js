function resolve(val) {
  console.log('resloved', val);
}
function reject(val) {
  console.log('rejected', val);
}

/**
 * @description
 * promise
 * 1. 解决异步回调问题
   2. Promise 是一个 thenable 对象
   3. 一个 pending 状态的 Promise 可以进入 fulfilled 和 rejected 状态
   4. promise 一旦进入 fulfilled 或 rejected 状态, 不可再改变其状态
   5. 一旦 promise 改变了其状态, 它必须有一个值(这个值也可能是 undefined)
 * @param {*} resolve 
 * @param {*} reject 
 */
function CPromise(fn) {
  var resolve1, reject1;
  const t = {
    a: 1,
    then: (resolve) => {
      if (resolve) {
        // this.resolve = resolve;
        resolve1 = resolve;
      }
      return t;
    },
    catch: (reject) => {
      if (reject) {
        // this.reject = reject;
        reject1 = reject;
      }
    }
  }
  if (typeof window !== 'undefined') {
    window.queueMicrotask(fn((val) => {
      this.resolve(val);
    }, (val) => {
      this.reject(val);
    }));
  }
  if (setImmediate) {
    setTimeout(() => {
      fn((val) => {
        resolve1(val);
      }, (val) => {
        reject1(val);
      });
    }, 100);
  }

  return t;
}
new CPromise(t1).then((val) => { resolve(val) }).catch((val) => { reject(val); })
// for (let index = 0; index < 1000; index++) {
//   console.log(index);
// }


// 回调方式

function t1(reslove, reject) {
  // setTimeout(() => {
  const temp = Math.floor(Math.random() * 10);
  if (temp >= 5) {
    reslove && typeof reslove === 'function' && reslove(temp);
  } else {
    if (reject) {
      typeof reject === 'function' && reject(temp);
    } else {
      throw new Error('unhandled error');
    }
  }
  // }, 0);
}


//t1(resolve, reject);


