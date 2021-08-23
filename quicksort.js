function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const pivotIndex = Math.floor(Math.random() * arr.length) ;
  const pivot = arr[pivotIndex];
  const right = [];
  const left = [];
  const mids = [];
  for(let k =0 ; k<arr.length;k++) {
    if (arr[k] > pivot) {
      right.push(arr[k]);
    } else if(arr[k] < pivot) {
      left.push(arr[k]);
    } else {
      mids.push(arr[k]);
    }
  }
  return quickSort(left).concat(mids).concat(quickSort(right));
}
console.log(quickSort([0,0,1,2,4,2,2,3,1,4]));