//Given Binary tree;
// populate each next pointer to point to its next right node.
//If there is no next right node,
//the next pointer should be set to NULL.
//Initially, all next pointers are set to NULL.

function connect(root) {
  if (!root) return null;
  // we set the 1st value of queue as a root node
  // it means the length of the queue is right now 1
  // but Queue has access of all the root.
  let queue = [root];
}
