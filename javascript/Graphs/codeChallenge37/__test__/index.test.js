const Graph = require('../graph');
const Vertex = require('../vertex');

describe('Graph', () => {
  let myGraph;

  beforeEach(() => {
    myGraph = new Graph();

    const Pandora = new Vertex('Pandora');
    const Arendelle = new Vertex('Arendelle');
    const Metroville = new Vertex('Metroville');
    const Monstroplolis = new Vertex('Monstroplolis');
    const Narnia = new Vertex('Narnia');
    const Naboo = new Vertex('Naboo');

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
  });

  afterEach(() => {
    myGraph = null;
  });

  it('should perform breadth-first traversal starting from Pandora', () => {
    const result = myGraph.breadthFirst('Pandora');
    const expectedResult = [
        'Pandora',
        'Arendelle',
        'Metroville',
        'Monstroplolis',
        'Naboo',
        'Narnia'
      ]
  
    console.log('result:', result); 
    expect(expectedResult).toEqual (expectedResult);
  });
});
