//Given Binary tree;
// populate each next pointer to point to its next right node.
//If there is no next right node,
//the next pointer should be set to NULL.
//Initially, all next pointers are set to NULL.

function connect(root) {
  // Hear root is Tree
  if (!root) return null;
  // we set the 1st value of queue as a root node
  // it means the length of the queue is right now 1
  // but Queue has access of all the root.

  //hear i did't construct the binary tree;
  let queue = [root];
  // Now we have to  check that queue.length
  // if queue.length will be zero we have to stop and return root (tree)
  while (queue.length) {
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      // Hear we are removing the first element of queue
      let node = queue.shift();

      // After that we are checking if node.left or node.right are not null
      // then push to queue;
      if (node.left) queue.push(node.left);
      if (node.rigth) queue.push(node.right);

      // At last in the question it is given that we have to check the right next value so
      // if right next value is not present we set the value to null;
      // if not the we are setting node.next equal to the first value of queue
      if ((i = size - 1)) node.next = null;
      else node.next = [queue[0]];
    }
  }
  return root;
}
