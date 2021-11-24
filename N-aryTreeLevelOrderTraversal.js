function levelOrder(root) {
  if (!root) return [];
  let result = [];
  let queue = [root];
  let level = 0;

  while (queue.length) {
    let len = queue.length;
    result.push([]);
    while (len--) {
      let ele = queue.shift();
      result[level].push(ele.val);
      for (let child of ele.children) {
        queue.push(child);
      }
    }

    level++;
  }
  return result;
}
