
function gb(arr, char) {
  let slowPoint = 0;
  var temp = []
  function isSameType(item1, item2) {
    return (item1 === char && item2 === char) || (item1 !== char && item2 !== char);
  }
  for (let k = 1; k < arr.length; k++) {
    if (!isSameType(arr[slowPoint], arr[k])) {
      temp.push(arr.slice(slowPoint, k));
      slowPoint = k;
    }
    if (k === arr.length - 1) {
      console.log(slowPoint);
      temp.push(arr.slice(slowPoint));
    }
  }
  return temp;
}

const arr = ['*', '*', 'a', '*', '*', 'b', 'b', 'c', '*', 'b', '*', '*', '*', 'c', 'c', '*'];
// const arr = ['*', '*', ];
console.log(arr);
const t = gb(arr, '*');
console.log(t);