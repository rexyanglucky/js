
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 
 * @param a int整型一维数组 
 * @param n int整型 
 * @param K int整型 
 * @return int整型
 */
function findKth(a, n, K) {
  let res = 0;
  function find(a, n, K) {
    const mid = n >> 1;
    const mvalue = a[mid];
    const leftArr = [];
    const midArr = [];
    const rightArr = [];
    for (let j = 0; j < a.length; j++) {
      if (a[j] < mvalue) {
        leftArr.push(a[j]);
      } else if (a[j] === mvalue) {
        midArr.push(a[j]);
      } else if (a[j] > mvalue) {
        rightArr.push(a[j]);
      }
    }
    if (leftArr.length > K - 1) {
      find(leftArr, leftArr.length, K);
    } else if (leftArr.length == K - 1) {
      res = midArr[0];
    } else if (leftArr.length < K - 1) {
      if (leftArr.length + midArr.length > K - 1) {
        const idx = K - 1 - leftArr.length;
        res = midArr[idx];
      } else {
        find(rightArr, rightArr.length, K - leftArr.length - midArr.length);
      }
    }
    return res;
  }
  return find(a, n, K);
}
const arr = [1332802,1177178,1514891,871248,753214,123866,1615405,328656,1540395,968891,1884022,252932,1034406,1455178,821713,486232,860175,1896237,852300,566715,1285209,1845742,883142,259266,520911,1844960,218188,1528217,332380,261485,1111670,16920,1249664,1199799,1959818,1546744,1904944,51047,1176397,190970,48715,349690,673887,1648782,1010556,1165786,937247,986578,798663];
const n = 49
const idx = 24;
findKth(arr, n, idx);
console.log(arr.sort((a, b) => a - b ));
console.log(arr.sort((a, b) => a - b )[idx]);