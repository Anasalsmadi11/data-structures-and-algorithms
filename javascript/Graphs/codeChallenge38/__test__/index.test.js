const Graph = require('../graph');

describe('Graph', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();

    graph.addNode('A');
    graph.addNode('B');
    graph.addNode('C');
    graph.addNode('D');
    graph.addNode('E');
    graph.addNode('F');
    graph.addNode('G');
    graph.addNode('H');

    graph.addEdge('A', 'B');
    graph.addEdge('B', 'C');
    graph.addEdge('C', 'G');
    graph.addEdge('B', 'D');
    graph.addEdge('D', 'F');
    graph.addEdge('D', 'H');
    graph.addEdge('F', 'H');
    graph.addEdge('A', 'D');
    graph.addEdge('D', 'E');
  });

  it('should perform depth-first traversal', () => {
    const result = graph.depthFirst('A');
    expect(result).toEqual(['A', 'B', 'C', 'G', 'D', 'F', 'H', 'E']);
  });

  // it('should handle empty graph', () => {
  //   const emptyGraph = new Graph();
  //   const result = emptyGraph.depthFirst('A');
  //   expect(result).toEqual([]);
  // });

  it('should handle disconnected nodes', () => {
    graph.addNode('I');
    graph.addNode('J');
    graph.addEdge('I', 'J');
    
    const result = graph.depthFirst('A');
    expect(result).toEqual(['A', 'B', 'C', 'G', 'D', 'F', 'H', 'E']);
  });
});
