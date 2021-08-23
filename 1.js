// 1.给出一个一个已排序好的数组, 随机取其中的一个数，如何快速找到该元素对应的下标？
// 例子
//  const sortAry = [0, 1, 4, 7, 9 , 20, 100]
//  待查找的元素为  9.
//  输出下标为4

const sortAry = [0, 1, 4, 7, 9, 20, 100, 101, 103, 109];
function findIndex(arr, target) {
  console.log(arr)
  if (arr.length > 0 && target && target >= sortAry[0] && target <= sortAry[sortAry.length - 1]) {
    const midIndex = Math.ceil(arr.length / 2);
    const mid = arr[midIndex];
    if (target > mid) {
      const rightArr = arr.slice(midIndex, arr.length);
      return midIndex + findIndex(rightArr, target);
    } else if (target === mid) {
      return midIndex;
    } else {
      const leftArr = arr.slice(0, midIndex);
      return findIndex(leftArr, target);
    }
  }
  return -1;
}
console.log(findIndex(sortAry, 1100));


// const multiArr = [0, [1, 4,], 7, [9, 20, [22,[25], 23]], 100];
// function flat(arr) {
//   let result = [];
//   for (let k = 0; k< arr.length; k++) {
//     const val = arr[k];
//     if(Array.isArray(val)) {
//       result = result.concat(flat(val));
//     } else {
//       result.push(val);
//     }
//   }
//   return result;
// }
// console.log(flat(multiArr));
// var t;
// function debounce(fn, time) {
//   if (t) {
//     clearTimeout(t);
//   }
//   t = setTimeout(() => {
//     if (fn && fn instanceof Function) {
//       fn();
//     }
//   }, time);
// }

// function test() {
//   let k = 0;
//   while (k < 1) {
//     debounce(function () { console.log('tt') }, 1000);
//     k ++;
//   }
// }
// test();

// console.log(Object.prototype.toString.call(debounce));
// console.log(typeof debounce);




