const LinkedList = require('./lib/linkedList');
const Node = require('./lib/node');

let ll= new LinkedList()
ll.append(100)
ll.append(200)
ll.insertBefore(100, 50)
ll.insertAfter(100, 1500)
ll.print()
console.log(ll)
//====================================


// Create a linked list: 1 -> 3 -> 8 -> 2
const linkedList = new LinkedList();
const node1 = new Node(1);
const node2 = new Node(3);
const node3 = new Node(8);
const node4 = new Node(2);

linkedList.head = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;


const kthValue = linkedList.kthFromEnd(2);
console.log(kthValue); 




function zipLists(list1, list2) {
   // here if one of the two linked lists is empty return the other one
    if (!list1.head) {
      return list2;
    }
    if (!list2.head) {
      return list1;
    }
  
    const result = new LinkedList();
    let current1 = list1.head;
    let current2 = list2.head;
  
    while (current1 && current2) {
      result.append(current1.value);
      result.append(current2.value);
      current1 = current1.next;
      current2 = current2.next;
    }
  
    return result;
  }

  const list1 = new LinkedList();
  list1.append(1);
  list1.append(3);
  list1.append(2);

  const list2 = new LinkedList();
  list2.append(5);
  list2.append(9);
  list2.append(4);
  
  
  console.log(zipLists(list1, list2).toString());

  module.exports= zipLists;