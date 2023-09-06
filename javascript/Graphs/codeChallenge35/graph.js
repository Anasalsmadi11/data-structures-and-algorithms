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

  getNeighbors(vertex) {
    if (this.adjacencyList.has(vertex)) {
      return this.adjacencyList.get(vertex);
    }
    return [];
  }

  size() {
    return this.adjacencyList.size;
  }
}

const myGraph = new Graph();

const zero = new Vertex(0);
const one = new Vertex(1);
const two = new Vertex(2);
const three = new Vertex(3);
const four = new Vertex(4);
const five = new Vertex(5);

myGraph.addVertex(zero);
myGraph.addVertex(one);
myGraph.addVertex(two);
myGraph.addVertex(three);
myGraph.addVertex(four);
myGraph.addVertex(five);

myGraph.addEdge(zero, five);
myGraph.addEdge(zero, three);
myGraph.addEdge(three, one);
myGraph.addEdge(four, one);
myGraph.addEdge(two, three);
myGraph.addEdge(zero, two);
myGraph.addEdge(five, four);

myGraph.getAllVertecies();

console.log("all vertecies",myGraph.getAllVertecies());
console.log("graph neighbors",myGraph.getNeighbors(zero));
console.log("graph size",myGraph.size());

module.exports= Graph