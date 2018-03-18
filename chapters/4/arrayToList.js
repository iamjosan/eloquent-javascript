function arrayToList(arr) {
  if (arr.length === 0) {
    return null;
  }
  return { value: arr[0], rest: arrayToList(arr.slice(1)) };
}

module.exports = arrayToList;
