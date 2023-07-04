'use strict'

const PseudoQueue= require('./PseudoQueue')

const pseudoQueue = new PseudoQueue();
pseudoQueue.enqueue(10)
pseudoQueue.enqueue(15);
pseudoQueue.enqueue(20); 

console.log(pseudoQueue.dequeue()); 

pseudoQueue.enqueue(5);
console.log(pseudoQueue.dequeue()); 
console.log(pseudoQueue.dequeue()); 
console.log(pseudoQueue.dequeue()); 
console.log(pseudoQueue.dequeue()); 
