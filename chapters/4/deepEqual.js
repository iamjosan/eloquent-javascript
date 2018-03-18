function deepEqual(elem1, elem2) {
  if (
    typeof elem1 !== "object" ||
    typeof elem2 !== "object" ||
    elem1 === null ||
    elem2 === null
  ) {
    return elem1 === elem2;
  }
  const elem1Keys = Object.keys(elem1);
  const elem2Keys = Object.keys(elem2);
  if (elem1Keys.length !== elem2Keys.length) {
    return false;
  }
  for (let i = 0; i < elem1Keys.length; i++) {
    let prop1 = elem1[elem1Keys[i]];
    let prop2 = elem2[elem1Keys[i]];
    if (typeof prop1 === "object" && typeof prop2 === "object") {
      return deepEqual(prop1, prop2);
    }
    if (prop1 != prop2) {
      return false;
    }
  }
  return true;
}

module.exports = deepEqual;
