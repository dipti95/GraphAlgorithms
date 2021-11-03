// timeComplexity of
//find component O(logN);
// union component O(logN);
// connected component O(logN);
// constructor Node O(N)

class Node {
  constructor(props) {
    this.root = [];
    this.rank = [];
    for (let i = 0; i < props; i++) {
      this.root.push(i);
      this.rank.push(1);
    }
  }
  find(x) {
    while (x !== this.root[x]) {
      x = this.root[x];
    }
    return x;
  }

  union(x, y) {
    let rootX = this.find(x);
    let rootY = this.find(y);
    if (rootX !== rootY) {
      if (this.rank[rootY] > this.rank[rootX]) {
        this.root[rootX] = rootY;
      } else if (this.rank[rootX] > this.rank[rootY]) {
        this.root[rootY] = rootX;
      } else {
        this.root[rootY] = rootX;
        this.rank[rootX] += 1;
      }
    }
  }
  connected(x, y) {
    return this.find(x) === this.find(y);
  }
}

let unionFind = new Node(10);
// 1-2-5-6-7 3-8-9 4
unionFind.union(1, 2);
unionFind.union(2, 5);
unionFind.union(5, 6);
unionFind.union(6, 7);
unionFind.union(3, 8);
unionFind.union(8, 9);
console.log(unionFind.connected(1, 5));
console.log(unionFind.connected(5, 7));
console.log(unionFind.connected(4, 9));

//1-2-5-6-7 3-8-9-4
unionFind.union(9, 4);
console.log(unionFind.connected(4, 9));
