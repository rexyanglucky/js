function max(nums) {
  let max = nums[0];
  let secondMax = nums[1];
  if (secondMax > max) {
    [max, secondMax] = [secondMax, max];
  }
  for(let k = 2; k< nums.length; k++) {
    if (nums[k] >= max) {
      [max, secondMax] = [nums[k], max]
    } else if (nums[k] > secondMax) {
      secondMax = nums[k];
    }
  }
  return (max - 1) * (secondMax - 1)
}
console.log(max([3,4,5,2]))