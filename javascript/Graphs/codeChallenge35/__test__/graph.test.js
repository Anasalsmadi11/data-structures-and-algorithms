
const Vertex= require("../vertex")
const Graph= require("../graph")


describe('Graph', () => {
  let myGraph;

  beforeEach(() => {
    myGraph = new Graph();
  });

  it('should add vertices correctly', () => {
    const zero = new Vertex(0);
    const one = new Vertex(1);
    myGraph.addVertex(zero);
    myGraph.addVertex(one);

    const vertices = myGraph.getAllVertecies();
    expect(vertices).toContain(zero);
    expect(vertices).toContain(one);
  });

 

  it('should return all vertices correctly', () => {
    const zero = new Vertex(0);
    const one = new Vertex(1);
    const two = new Vertex(2);

    myGraph.addVertex(zero);
    myGraph.addVertex(one);
    myGraph.addVertex(two);

    const vertices = myGraph.getAllVertecies();

    expect(vertices).toContain(zero);
    expect(vertices).toContain(one);
    expect(vertices).toContain(two);
  });



  it('should return the correct size', () => {
    const zero = new Vertex(0);
    const one = new Vertex(1);
    const two = new Vertex(2);

    myGraph.addVertex(zero);
    myGraph.addVertex(one);
    myGraph.addVertex(two);

    expect(myGraph.size()).toBe(3);
  });
});
