function quickSort(arr) {
  if (arr.length <= 1) {
    return arr
  }

  let pivot = arr[arr.length - 1];
  let arrLeft = [];
  let arrRight = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== pivot) {
      arr[i] < pivot ? arrLeft.push(arr[i]) : arrRight.push(arr[i]);
    }
  }

  arrLeft = quickSort(arrLeft);
  arrRight = quickSort(arrRight);

  return arrLeft.concat(pivot).concat(arrRight);
}

export default quickSort;
