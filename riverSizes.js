// Given => 2d array(matrix)
// find the size of all the river
// matrix contain 0s and 1s only each 0s represent land and
// each 1s represent part of river
// river consist of any number of 1sthat are either horizontally
//or vertically adjacent ( not diagonally adjacent)
// the number of adjacent 1s forming a river;
//Return an arrayof thesixes of all the river represented in the input given (matrix)

function riverSizes(matrix) {
  let sizes = [];

  // we need visited matrix with the same length and height of matrix;
  // when we visit the number we se visited true;
  // by which we will not able to count that number we visited before;
  let visited = matrix.map((row) => row.map((value) => false));
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      // Hear we are checking if that ele is visited or not
      if (visited[row][col]) continue;
      checkingSize(row, col, matrix, visited, sizes);
    }
  }
  return sizes;
}

function checkingSize(row, col, matrix, visited, sizes) {
  let currentSize = 0;
  let stack = [];
  stack.push([row, col]);
  while (stack.length) {
    let node = stack.pop();
    let row = node[0];
    let col = node[1];
    if (visited[row][col]) continue;
    visited[row][col] = true;
    // checking if matrix[row][col] === 0; then we don't need to do anything;
    if (matrix[row][col] === 0) continue;
    // if matrix[row][col] === 1 then we increases the currentSize of the same river;
    else currentSize++;
    // After that we have to check the neighbour of the matrix[row][col] (UP,DOWN, LEFT,RIGHT)
    // and if not visited then we push there indexes to the stack
    if (row > 0 && !visited[row - 1][col]) stack.push([row - 1, col]);
    if (row < matrix.length - 1 && !visited[row + 1][col])
      stack.push([row + 1, col]);
    if (col > 0 && !visited[row][col - 1]) stack.push([row, col - 1]);
    if (col < matrix[0].length - 1 && !visited[row][col + 1])
      stack.push([row, col + 1]);
  }
  if (currentSize > 0) sizes.push(currentSize);
}

let matrix = [
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0],
];
console.log(riverSizes(matrix));
