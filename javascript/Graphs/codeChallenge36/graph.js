const Edge = require("./edge");
const Vertex = require("./vertex");

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    this.adjacencyList.set(vertex, []);
    // return this.adjacencyList
  }
  addEdge(start, end,weight) {
    if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end)) {
      console.log("one or both verticies are not existed");
    } else {
      const adjacencies = this.adjacencyList.get(start);
      const edge = new Edge(end,weight);
      adjacencies.push(edge);
      return;
    }
  }
  getAllVertecies() {
    if (this.adjacencyList.size === 0) {
      return [];
    } else {
      const vertices = [];
      for (const vertex of this.adjacencyList.keys()) {
        vertices.push(vertex);
      }
      //   console.log("keys",this.adjacencyList.keys())
      return vertices;
    }
  }

  // getNeighbors(vertex) {
  //   if (this.adjacencyList.has(vertex)) {
  //     return this.adjacencyList.get(vertex);
  //   }
  //   return [];
  // }

  size() {
    return this.adjacencyList.size;
  }
  breadthFirst(node){
    const result = []; 
    const queue = []; 
    const visited = new Set();
    if (this.adjacencyList.size === 0) {
      return result; 
    }
  
    queue.push(node);

    while (queue.length) {
      const currentVertex = queue.shift();
  
      if (!visited.has(currentVertex)) {
        visited.add(currentVertex); 
  
        result.push(currentVertex.value);
  
        const neighbors = this.getNeighbors(currentVertex, visited);
  
        for (const neighbor of neighbors) {
          queue.push(neighbor.vertex);
        }
      }
    }
  
    return result
    // return Object.keys(result);
  }
  
  getNeighbors(vertex, visited) {
    const neighbors = [];
    if (this.adjacencyList.has(vertex)) {
      const adjacencyList = this.adjacencyList.get(vertex);
  
      for (const edge of adjacencyList) {
        if (!visited.has(edge.vertex)) {
          neighbors.push(edge);
        }
      }
    }
  
    return neighbors;
  }
}

const myGraph = new Graph();

const Pandora = new Vertex("Pandora");
const Arendelle = new Vertex("Arendelle");
const Metroville = new Vertex("Metroville");
const Monstroplolis = new Vertex("Monstroplolis");
const Narnia = new Vertex("Narnia");
const Naboo = new Vertex("Naboo");

myGraph.addVertex(Pandora);
myGraph.addVertex(Arendelle);
myGraph.addVertex(Metroville);
myGraph.addVertex(Monstroplolis);
myGraph.addVertex(Narnia);
myGraph.addVertex(Naboo);

myGraph.addEdge(Pandora, Arendelle);
myGraph.addEdge(Arendelle, Metroville);
myGraph.addEdge(Arendelle, Monstroplolis);
myGraph.addEdge(Monstroplolis, Naboo);
myGraph.addEdge(Metroville, Naboo);
myGraph.addEdge(Metroville, Narnia);
myGraph.addEdge(Naboo, Narnia);


myGraph.getAllVertecies();

console.log(myGraph.breadthFirst(Pandora));

module.exports= Graph