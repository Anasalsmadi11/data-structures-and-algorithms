'use strict'
const Stack= require('./stack')

class PseudoQueue {
    constructor() {
      this.stack1 = new Stack();
      this.stack2 = new Stack();
    }
  
    enqueue(value) {
      // i need to move all the element inside stack1 to stack2 so the new value i will add in stack1 be the first value 
      while (!this.stack1.isEmpty()) {

        this.stack2.push(this.stack1.pop());
      }
  
      // Push the new value to stack1
      this.stack1.push(value);
  
      // with this i move back all the elements from stack1 that i pushed  to stack2 to stack1 so that the last element i pushed will appear as if it was the first element added
      while (!this.stack2.isEmpty()) {
        this.stack1.push(this.stack2.pop());
      }

    }
  
    dequeue() {
      if (this.stack1.isEmpty()) {
        return null;
      }
      return this.stack1.pop();
    }
  }

  module.exports= PseudoQueue