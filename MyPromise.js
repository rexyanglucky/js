function MyPromise(fun) {
  this.state = 'pending';
  this.result = null;
  this.temp_then = null;
  this.temp_catch = null;
  let temp_finally = null;
  this.reslove = (arg) => {
    this.result = arg;
    if (this.state !== 'rejected') {
      this.state = 'fullfilled';
      if (this.temp_then) {
        queueMicrotask(() => { this.temp_then(arg) });
      }
    } else {
      throw new Error(`promise is not pending`);
    }
    return this;
  }
  this.reject = (arg) => {
    this.result = arg;
    if (this.state !== 'fullfilled') {
      this.state = 'rejected';
      if (this.temp_catch) {
        queueMicrotask(() => {
          this.temp_catch(arg);
        })
      }
      return this;
    } else {
      throw new Error(`promise is not pending`);
    }
  }
  fun(this.reslove, this.reject);
}
MyPromise.prototype.then = function(callback) {
  // console.log(this, 'sss');
  console.log('then');
  this.temp_then = callback;
  return this.reslove(this.result);
}
MyPromise.prototype.catch = function(callback) {
  this.temp_catch = callback;
  console.log('catch');
  return this.reject(this.result);
}
// MyPromise.prototype.catch = (callback) => { temp_finally = callback; console.log('finally'); }

var d = new MyPromise((res, rej) => {
  console.log('111');
  res(2);
});
d.then((f) => { console.log('222'); console.log(f); })