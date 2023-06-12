'use strict';

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

class LinkedList {
    constructor(){
        this.head= null;
    }
    insert(value){
        const newNode = new Node(value);
        if (!this.head) {
          this.head = newNode;
        } else {
          newNode.next = this.head;
          this.head = newNode;
        }
    };
    includes(value){
        let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
    }
    toString() {
        let current = this.head;
        let result = "";
        while (current) {
          result += `{ ${current.value} } -> `;
          current = current.next;
        }
        result += "NULL";
        return result;
      }
}

const myLinkedList = new LinkedList();


myLinkedList.insert('c');
myLinkedList.insert('b');
myLinkedList.insert('a');


console.log(myLinkedList.includes('b'));  // true
console.log(myLinkedList.includes('d'));  // false

console.log(myLinkedList.toString());
module.exports = LinkedList;
