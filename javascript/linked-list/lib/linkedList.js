'use strict'
const Node= require('./node')

class LinkedList {
    constructor() {
      this.head = null;
    }
  
    append(newValue) {
      const newNode = new Node(newValue);
  
      if (!this.head) {
        
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        // Append the new node at the end of the list
        current.next = newNode;

    }
    }
  
    toString() {
      let result = "";
      let current = this.head;
      while (current) {
        result += `{${current.value}} -> `;
        current = current.next;
      }
      result += "null";
      return result;
    }

    
    insertBefore(value, newValue) {
      const newNode = new Node(newValue);
  
      if (!this.head) {
        // If the list is empty, do nothing
        return;
      }
  
      if (this.head.value === value) {
        // If the value to insert before is at the head, update the head reference
        newNode.next = this.head;
        // console.log(this.head)
        this.head = newNode;
        // console.log(this.head)
        return;
      }
  
      let current = this.head;
      let previous = null;
  
      while (current) {
        if (current.value === value) {
          // Found the node with the specified value, insert the new node before it
          previous.next = newNode;
          newNode.next = current;
          return;
        }
        previous = current;
        current = current.next;
      }
    }
  
    insertAfter(value, newValue) {
      const newNode = new Node(newValue);
  
      if (!this.head) {
        // If the list is empty, do nothing
        return;
      }
  
      let current = this.head;
  
      while (current) {
        if (current.value === value) {
            // Found the node with the specified value, insert the new node after it
            newNode.next = current.next; // here i assigned the next value of the node i created to be current.next because the default value of the next (from the class Node) is null thats why i need to reassign its value // without this it wont point to the next node, it will be like this (50 -> 100 -> 1500) ,but with it it will be like this(50 -> 100 -> 1500 -> 200)
            current.next = newNode;
          return;
        }
        current = current.next; // this is to go to the next node
      }
    }
  /// ====================== linkedlist-kth====

  kthFromEnd(k) {
    if (this.head === null) {
      return null;
    }

    // Create two pointers, initially pointing to the head
    let p1 = this.head;
    let p2 = this.head;


    for (let i = 0; i < k; i++) {
      if (p2 === null) {
        return null;
      }
      p2 = p2.next;
    }


    while (p2.next !== null) {
      p1 = p1.next;
      p2 = p2.next;
    }


    return p1.value;
  }

  
  /// ======================
    print() {
      let current = this.head;
      let values = [];
  
      while (current) {
        values.push(current.value);
        current = current.next;
      }
  
      console.log(values.join(" -> "));
    }
  }
module.exports = LinkedList;