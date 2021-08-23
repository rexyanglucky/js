/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 function findFirstPos(nums, target) {
  let left=0,right = nums.length -1;
  while(left < right) {
      let mid = (left + right) >> 1;
      if (nums[mid] < target) {
          left = mid + 1;
      } else if (nums[mid] === target) {
          right = mid;
      } else {
          right = mid - 1;
      }
  }
  if (nums[left] === target) {
      return left;
  }
  return -1;
}
function findLastPos(nums, target) {
  let left = 0, right = nums.length - 1;
  while(left < right) {
      let mid = (left + right + 1) >> 1;
      if (nums[mid] < target) {
          left = mid + 1;
      } else if (nums[mid] === target) {
          left = mid;
      } else {
          right = mid - 1;
      }
  }
  if (nums[left] === target) {
      return left;
  }
  return -1;
}

var searchRange = function(nums, target) {
  if (!nums || nums.length === 0 ) {
      return [-1, -1];
  }
  var firstPos = findFirstPos(nums, target);
  if (firstPos === -1) {
      return [-1, -1];
  }
  var lastPost = findLastPos(nums, target);
  return [firstPos, lastPost];
};