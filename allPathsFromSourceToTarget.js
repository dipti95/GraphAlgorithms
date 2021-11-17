function allPathsSourceTarget(graph) {
  let newGraph = new Map();
  let arr = [];
  for (let i = 0; i < graph.length; i++) {
    newGraph.set(i, graph[i]);
  }
  let len = graph.length - 1;
  //console.log(newGraph)
  function depthFS(index, path) {
    path.push(index);
    if (len === index) {
      arr.push(path);
      return arr;
    }
    newGraph.get(index).filter((a, b) => {
      depthFS(a, path.slice());
    });
    return arr;
  }

  return depthFS(0, []);
}

// NO need to define Variable newGraph

function allPathsSourceTarget(graph) {
  let arr = [];
  function depthFS(index, path) {
    if (path[path.length - 1] === graph.length - 1) {
      arr.push(path);
      return arr;
    }
    for (let i = 0; i < graph[index].length; i++) {
      depthFS(graph[index][i], [...path, graph[index][i]]);
    }
  }
  depthFS(0, []);
  return arr;
}
