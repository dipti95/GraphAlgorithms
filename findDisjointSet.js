class Node {
  constructor(props) {
    let arr = [];
    for (let i = 0; i < props; i++) {
      arr.push(i);
    }
    this.root = arr;
    // console.log(this.root)
  }

  find(x) {
    return this.root[x];
  }

  union(x, y) {
    let rootX = this.find(x);
    let rootY = this.find(y);
    if (rootX !== rootY) {
      for (let i = 0; i < this.root.length; i++) {
        if (this.root[i] === rootY) {
          this.root[i] = rootX;
        }
      }
    }
  }

  connected(x, y) {
    return this.find(x) === this.find(y);
  }
}

uf = new Node(10);
//1-2-5-6-7 3-8-9 4
uf.union(1, 2);
uf.union(2, 5);
uf.union(5, 6);
uf.union(6, 7);
uf.union(3, 8);
uf.union(8, 9);
console.log(uf.connected(1, 5));
console.log(uf.connected(5, 7));
console.log(uf.connected(4, 9));
// 1-2-5-6-7 3-8-9-4
uf.union(9, 4);
console.log(uf.connected(4, 9));
