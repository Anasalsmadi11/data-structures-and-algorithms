const Edge = require("./edge");
const Vertex = require("./vertex");

class Graph {
  constructor() {
    this.graph = new Map();
  }

 addNode(node){
  this.graph.set(node, [])
 }

  addEdge(node1, node2) {
   
     const start= this.graph.get(node1);
     const end= this.graph.get(node2);
   
    if(start && end){
      start.push(node2)
      end.push(node1)
    }
  }
  depthFirst(startNode) {
 
    const visited = new Set();
    const result = [];

    const dfs = (currentNode) => {
      visited.add(currentNode);
      result.push(currentNode);

      const neighbors = this.graph.get(currentNode);
     
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          dfs(neighbor);
        }
      }
    };

    dfs(startNode);
    return result;
  }
}



const graph = new Graph();

graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');
graph.addNode('E');
graph.addNode('F');
graph.addNode('G');
graph.addNode('H');

graph.addEdge("A","B")
graph.addEdge("B","C")
graph.addEdge("C","G")
graph.addEdge("B","D")
graph.addEdge("D","F")
graph.addEdge("D","H")
graph.addEdge("F","H")
graph.addEdge("A","D")
graph.addEdge("D","E")



const result= graph.depthFirst('A')
console.log(result)

module.exports= Graph

