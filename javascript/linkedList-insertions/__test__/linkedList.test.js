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
});
