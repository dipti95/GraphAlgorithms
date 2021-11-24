function levelOrder(root) {
  if (!root) return [];
  let result = [];
  let queue = [root];
  //level indicate the level
  //for example
  //       3
  //      / \
  //    4     6
  //   /|\    /\
  // 2  7  9 1  6

  // In this given tree
  // we can say that level 0 = 3
  // level 1 = 4,6
  // level 2 = 2,7,9,1,6

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
