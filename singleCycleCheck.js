function hasSingleCycle(array) {
  let visited = 0;
  let currentIdx = 0;
  while (visited < array.length) {
    // this step => because it is given that EVERY ELEMENT IN THE ARRAY
    //IS EXACTLE ONCE BEFORE LANDING BACK ON THE STARTING INDEX.
    if (visited > 0 && currentIdx === 0) return false;
    visited++;
    currentIdx = getIndex(currentIdx, array);
  }
  return currentIdx === 0;
}

// in the question it is given that the next index will be the sum of currentIdx
// and the value on that index;
function getIndex(index, array) {
  let jump = array[index];
  let nextIdx = (index + jump) % array.length;
  return nextIdx >= 0 ? nextIdx : array.length + nextIdx;
}

let array = [2, 3, 1, -4, -4, 2];
console.log(hasSingleCycle(array));
