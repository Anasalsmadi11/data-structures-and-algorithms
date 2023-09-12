const Edge = require("./edge");
const Vertex = require("./vertex");

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

 
  addEdge(start, end,cost) {
    if (!this.adjacencyList.has(start)) {
      this.adjacencyList.set(start, new Map());
    } 
    this.adjacencyList.get(start).set(end, cost);
  }
}



function businessTrip(graph, cityNames) {
  if (cityNames.length === 0) {
    return 0; 
  }

  let totalCost = 0;

  for (let i = 0; i < cityNames.length - 1; i++) {
    const currentCity = cityNames[i];
    const nextCity = cityNames[i + 1];

    if (graph.has(currentCity) && graph.get(currentCity).has(nextCity)) {
      totalCost += graph.get(currentCity).get(nextCity);
    } else {
      return null;
    }
  }

  return totalCost;
}

const directFlights = new Graph();

directFlights.addEdge("Pandora", "Arendelle", 150);
directFlights.addEdge("Metroville", "Arendelle", 99);
directFlights.addEdge("Metroville", "Pandora", 82);
directFlights.addEdge("Metroville", "New Monstropolis", 105);
directFlights.addEdge("Arendelle", "New Monstropolis", 42);
directFlights.addEdge("New Monstropolis", "Naboo", 73);
directFlights.addEdge("Metroville", "Narnia", 37);
directFlights.addEdge("Metroville", "Naboo", 36);
directFlights.addEdge("Naboo", "Narnia", 250);

const tripRoute= ['Metroville', 'Pandora' ]
const tripRoute1= ['Arendelle', 'New Monstropolis', 'Naboo']
const tripRoute2= ['Naboo', 'Pandora']
const tripRoute3= ['Narnia', 'Arendelle', 'Naboo']


const cost = businessTrip(directFlights.adjacencyList,tripRoute3)

if(cost != null){
 console.log(`The cost of the trip is ${cost}`);
} else {
  console.log("The trip is not possible.");
}

module.exports= {
  Graph,
  businessTrip
}