const LinkedList = require('../lib/linkedList');

describe('LinkedList', () => {
  let linkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  test('append should add a new node to the end of the list', () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);

    expect(linkedList.head.value).toBe(1);
    expect(linkedList.head.next.value).toBe(2);
    expect(linkedList.head.next.next.value).toBe(3);
  });

  test('insertBefore should insert a new node before the specified value', () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.insertBefore(2, 4);

    expect(linkedList.head.value).toBe(1);
    expect(linkedList.head.next.value).toBe(4);
    expect(linkedList.head.next.next.value).toBe(2);
    expect(linkedList.head.next.next.next.value).toBe(3);
  });

  test('insertAfter should insert a new node after the specified value', () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.insertAfter(2, 4);

    expect(linkedList.head.value).toBe(1);
    expect(linkedList.head.next.value).toBe(2);
    expect(linkedList.head.next.next.value).toBe(4);
    expect(linkedList.head.next.next.next.value).toBe(3);
  });

//===================linkedList-kth=============
// test('Returns the kth value from the end of the list', () => {
//   // Create a linked list: 1 -> 3 -> 8 -> 2
//   const linkedList = new LinkedList();
//   const node1 = new Node(1);
//   const node2 = new Node(3);
//   // const node3 = new Node(8);
//   // const node4 = new Node(2);

//   linkedList.head = node1;
//   node1.next = node2;
//   node2.next = node3;
//   node3.next = node4;

//   expect(linkedList.kthFromEnd(0)).toBe(2); // k = 0
//   expect(linkedList.kthFromEnd(2)).toBe(3); // k = 2
//   expect(linkedList.kthFromEnd(5)).toBeNull(); // k = 5 (greater than the length of the list)
// });


});
