class Node {
  constructor(props) {
    this.root = [];
    this.range = [];
    for (let i = 0; i < props; i++) {
      this.root[i] = i;
      this.range[i] = 1;
    }
  }

  find(x) {
    if (x === this.root[x]) return x;
    this.root[x] === this.find(this.root[x]);
    return this.root[x];
  }

  union(x, y) {
    let rootX = this.find(x);
    let rootY = this.find(y);
    if (rootX !== rootY) {
      if (this.range[rootY] > this.range[rootX]) {
        this.root[rootX] = rootY;
      } else if (this.range[rootX] > this.range[rootY]) {
        this.root[rootY] = rootX;
      } else {
        this.root[rootX] = rootY;
        this.range[rootY] += 1;
      }

      return true;
    }
    return false;
  }
}

function validTree(n, edges) {
  if (edges.length !== n - 1) return false;

  let uFind = new Node(n);

  for (let ele of edges) {
    if (!uFind.union(ele[0], ele[1])) return false;
  }
  return true;
}
