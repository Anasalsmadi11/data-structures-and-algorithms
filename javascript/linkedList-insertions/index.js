const Linkedlist = require('./lib/linkedList');

let ll= new Linkedlist()
ll.append(100)
ll.append(200)
ll.insertBefore(100, 50)
ll.insertAfter(100, 1500)
ll.print()
// console.log(ll)