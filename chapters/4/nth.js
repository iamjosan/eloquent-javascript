function nth(list, index) {
  const listArray = listToArray(list);
  return listArray[index];
  function listToArray(list, arr = []) {
    arr.push(list.value);
    if (list.rest == null) {
      return arr;
    }
    return listToArray(list.rest, arr);
  }
}

module.exports = nth;
