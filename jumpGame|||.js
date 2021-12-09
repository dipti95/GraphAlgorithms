//BY BREADTH FIRST SEARCH;

/**you are initially positioned at start index of the array. 
 * When you are at index i, 
 * you can jump to i + arr[i] or i - arr[i], 
 check if you can reach to any index with value 0.
  */

function canReach(arr, start) {
  let queue = [start];
  let max = arr.length;
  let visited = {};
  for (let i = 0; i < queue.length; i++) {
    let idx = queue[i];
    if (idx in visited) continue;
    else visited[idx] = true;
    if (arr[idx] === 0) return true;
    idx + arr[idx] < max && queue.push(idx + arr[idx]);
    idx - arr[idx] >= 0 && queue.push(idx - arr[idx]);
  }
  return false;
}
