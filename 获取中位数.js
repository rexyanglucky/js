// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number}
//  */
var findMedianSortedArrays = function (nums1, nums2) {

  var temp = nums1.concat(nums2);
  if (temp.length > 0) {
    temp = selectSort(temp);
    if (temp.length % 2 === 0) {
      let mid = temp.length / 2;
      return (temp[mid] + temp[mid - 1]) / 2;
    } else {
      return temp[(temp.length - 1) / 2];
    }
  }

};
// console.log(findMedianSortedArrays([1,3],[2]))
function swap(arr, a, b) {
  var c = arr[a];
  arr[a] = arr[b];
  arr[b] = c;
}
function selectSort(temp) {
 
  for (let k = 0; k < temp.length; k++) {
    let minIndex = k;
    for (i = k + 1; i < temp.length; i++) {
      if (temp[i] < temp[minIndex]) {
        minIndex = i;
      }
    }
    swap(temp, k, minIndex);
    console.log(temp);
  }
  return temp;
}
function bubbleSort(temp) {
  let k = temp.length;
  let flag = true;
  while(k > 0 && flag) {
    flag = false
    for (let j = 0 ;j < k; j ++) {
      if (temp[j] > temp[j+1]) {
        swap(temp, j, j+1);
        flag = true;
      }
    }
    console.log(temp);
    k--;
  }
}
bubbleSort([ 3, 4, 8, 7, 6, 10 ])