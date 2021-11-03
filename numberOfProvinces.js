class Node {
  constructor(props) {
    this.root = [];
    this.range = [];
    this.count = props;
    for (let i = 0; i < props; i++) {
      this.root[i] = i;
      this.range[i] = 1;
    }
  }

  find(x) {
    if (x === this.root[x]) return x;
    this.root[x] = this.find(this.root[x]);
    return this.root[x];
  }

  union(x, y) {
    let rootX = this.find(x);
    let rootY = this.find(y);

    if (rootX !== rootY) {
      if (this.range[rootY] > this.range[rootX]) {
        this.root[rootX] = rootY;
      } else if (this.range[rootY] < this.range[rootX]) {
        this.root[rootY] = rootX;
      } else {
        this.root[rootY] = rootX;
        this.range[rootY] += 1;
      }
      this.count--;
    }
  }

  getcount() {
    return this.count;
  }
}

function findCircleNum(isConnected) {
  let len = isConnected.length;
  let unionFind = new Node(len);
  let province = 0;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < isConnected[i].length; j++) {
      if (isConnected[i][j] === 1) {
        unionFind.union(i, j);
      }
    }
  }
  return unionFind.getcount();
}
