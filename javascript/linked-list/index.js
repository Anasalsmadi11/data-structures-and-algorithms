'use strict';

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    insert(value) {
      const newNode = new Node(value);
  
      if (!this.head) {
        this.head = newNode;
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }
    }
  
    includes(value) {
      let currentNode = this.head;
  
      while (currentNode) {
        if (currentNode.value === value) {
          return true;
        }
        currentNode = currentNode.next;
      }
  
      return false;
    }
  
    toString() {
      let currentNode = this.head;
      let result = '';
  
      while (currentNode) {
        result += `{ ${currentNode.value} } -> `;
        currentNode = currentNode.next;
      }
  
      result += 'NULL';
      return result;
    }
  }
  let linkedList= new LinkedList()
  linkedList.insert('c');
  linkedList.insert('b');
  linkedList.insert('a');

  console.log(linkedList.includes('b')); // Output: true
console.log(linkedList.includes('d')); // Output: false


console.log(linkedList.toString());

module.exports = LinkedList;
