function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let middle = Math.floor(arr.length / 2);
  let arrLeft = mergeSort(arr.slice(0, middle));
  let arrRight = mergeSort(arr.slice(middle));

  return merge(arrLeft, arrRight);
}

function merge(arrLeft, arrRight) {
  let arrSorted = [];

  while (arrLeft.length && arrRight.length) {
    arrLeft[0] < arrRight[0]
      ? arrSorted.push(arrLeft.shift())
      : arrSorted.push(arrRight.shift());
  }

  return arrSorted.concat(arrLeft).concat(arrRight);
}

export default mergeSort;