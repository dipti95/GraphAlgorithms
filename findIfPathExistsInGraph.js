// Graph representation (adjecent list);

function validPath(n, edges, start, end) {
  let graph = new Map();

  edges.filter(([x, y]) => {
    if (!graph.has(x)) graph.set(x, []);
    if (!graph.has(y)) graph.set(y, []);
    graph.get(x).push(y);
    graph.get(y).push(x);
  });

  let validate = new Array(n);
  let queue = [start];
  while (queue.length > 0) {
    let ele = queue.shift();
    if (ele === end) return true;
    validate[ele] = true;
    for (let edge of graph.get(ele)) {
      if (!validate[edge]) queue.push(edge);
    }
  }
  return false;
}
