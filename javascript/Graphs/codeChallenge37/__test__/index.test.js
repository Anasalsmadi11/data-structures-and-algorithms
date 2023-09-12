const {Graph} = require('../graph');
const {businessTrip}= require('../graph')
describe('Graph', () => {
  let directFlights;

  beforeEach(() => {
    directFlights = new Graph();
    directFlights.addEdge('Pandora', 'Arendelle', 150);
    directFlights.addEdge('Metroville', 'Arendelle', 99);
    directFlights.addEdge('Metroville', 'Pandora', 82);
    directFlights.addEdge('Metroville', 'New Monstropolis', 105);
    directFlights.addEdge('Arendelle', 'New Monstropolis', 42);
    directFlights.addEdge('New Monstropolis', 'Naboo', 73);
    directFlights.addEdge('Metroville', 'Narnia', 37);
    directFlights.addEdge('Metroville', 'Naboo', 36);
    directFlights.addEdge('Naboo', 'Narnia', 250);
  });

  it('should create a Graph with edges', () => {
    expect(directFlights.adjacencyList.size).toBe(5); 
  });

  it('should calculate the cost of a valid trip', () => {
    const tripRoute = ['Metroville', 'Pandora'];
    const cost = businessTrip(directFlights.adjacencyList, tripRoute);
    expect(cost).toBe(82);
  });

  it('should return 0 for an empty trip', () => {
    const tripRoute = [];
    const cost = businessTrip(directFlights.adjacencyList, tripRoute);
    expect(cost).toBe(0);
  });

  it('should return null for an invalid trip', () => {
    const tripRoute = ['Narnia', 'Arendelle', 'Naboo', 'NotInGraph'];
    const cost = businessTrip(directFlights.adjacencyList, tripRoute);
    expect(cost).toBeNull();
  });
});
