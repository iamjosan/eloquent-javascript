function reverseArrayInPlace(arr) {
  const last = arr.length - 1;
  const loopLimit = Math.floor(arr.length / 2);
  for (let i = 0; i < loopLimit; i++) {
    let thisVal = arr[i];
    arr[i] = arr[last - i];
    arr[last - i] = thisVal;
  }
}

module.exports = reverseArrayInPlace;
