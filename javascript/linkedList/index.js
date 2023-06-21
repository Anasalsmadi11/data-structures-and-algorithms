const Linkedlist = require('./lib/linkedList');
const Node = require('./lib/node');

let ll= new Linkedlist()
ll.append(100)
ll.append(200)
ll.insertBefore(100, 50)
ll.insertAfter(100, 1500)
ll.print()
console.log(ll)
//====================================


// Create a linked list: 1 -> 3 -> 8 -> 2
const linkedList = new Linkedlist();
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