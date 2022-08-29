function getBigNumbers(value) {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const max = 9876543210;
  const curArr = value.toString().split('');
  let point = curArr.length - 1;
  while (point > 0 &&  Number(curArr.join('')) <= max) {
    if (curArr[point] > curArr[point - 1]) {
      let temp = curArr[point];
      curArr[point] = curArr[point - 1];
      curArr[point - 1] = temp;
      console.log(curArr.join(''));
    }
    point--;
  }
}