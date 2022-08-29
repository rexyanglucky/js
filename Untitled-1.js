
/**
 * 二分 加 双指针
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {

  function binaryFind(arr, x, left, right) {
    const mid = left + Math.floor((right - left) / 2);
    const v = arr[mid];
    if (left === right) { return left; }
    if (v >= x) {
      return binaryFind(arr, x, left, mid);
    } else {
      return binaryFind(arr, x, mid + 1, right);
    }
  }
  function binarySearch(arr, x) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
      const mid = left + Math.floor((right - left) / 2);
      const v = arr[mid];
      if (v >= x) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return left;
  }
  const closest = binaryFind(arr, x, 0, arr.length - 1);
  let left = closest - 1;
  let right = closest;
  while (k-- > 0) {
    if (left < 0) {
      right++;
    } else if (right >= arr.length) {
      left--;
    }
    else if (Math.abs(x - arr[right]) >= Math.abs(x - arr[left])) {
      left--;
    } else if (
      Math.abs(x - arr[right]) < Math.abs(x - arr[left])
    ) {
      right++;
    }
  }
  return arr.slice(left + 1, right);
};
console.log(findClosestElements([1, 5, 10], 1, 4))