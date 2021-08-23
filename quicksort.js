function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const pivotIndex = Math.floor(Math.random() * arr.length) ;
  const pivot = arr[pivotIndex];
  const right = [];
  const left = [];
  for(let k =0 ; k<arr.length;k++) {
    if (arr[k] > pivot) {
      right.push(arr[k]);
    } else if(arr[k] < pivot) {
      left.push(arr[k]);
    }
  }
  return quickSort(left).concat(pivot).concat(quickSort(right));
}