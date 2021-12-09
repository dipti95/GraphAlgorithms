//BY BREADTH FIRST SEARCH;

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
