function binarySearch1(nums, target) {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    let mid = (left + right) >> 1;
    console.log(left, right, mid);
    if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else if(nums[mid] === target) {
      return mid;
    }
  }
  return -1;
}
function binarySearch(nums, target) {
  let left = 0, right = nums.length;
  while (left < right) {
    let mid = (left + right) >> 1;
    console.log(left, right, mid);
    if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid;
    } else if(nums[mid] === target) {
      return mid;
    }
  }
  return -1;
}
function printResult(result, rightResult) {
  console.log(result === rightResult ? '通过' : `不通过 right:${rightResult} answer:${result}`)
}
printResult(binarySearch([1, 3, 5, 7, 7, 8, 9, 10], 0), -1);
printResult(binarySearch([1, 3, 5, 7, 7, 8, 9, 10], 10), 7);
printResult(binarySearch([1, 3, 5, 7, 7, 8, 9, 10], 1), 0);
printResult(binarySearch([1,2], 1), 0);
printResult(binarySearch([1,2], 2), 1);
printResult(binarySearch([1,2], 0), -1);
