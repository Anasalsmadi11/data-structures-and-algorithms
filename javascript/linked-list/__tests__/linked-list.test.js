'use strict';

// Require our linked list implementation
// const LinkedList = require('../index');

// describe('Linked List', () => {
//   it('works', () => {
//     expect(true).toBeTruthy();
//   });
// });


const LinkedList  = require('../index');

describe('LinkedList', () => {
  test('Can successfully instantiate an empty linked list', () => {
    const linkedList = new LinkedList();
    expect(linkedList.head).toBe(null);
  });

  test('Can properly insert into the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.insert('c');
    expect(linkedList.toString()).toBe('{ c } -> NULL');
  });

  test('The head property will properly point to the first node in the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.insert('c');
    expect(linkedList.head.value).toBe('c');
  });

  test('Can properly insert multiple nodes into the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.insert('c');
    linkedList.insert('b');
    linkedList.insert('a');
    expect(linkedList.toString()).toBe('{ a } -> { b } -> { c } -> NULL');
  });

  test('Will return true when finding a value within the linked list that exists', () => {
    const linkedList = new LinkedList();
    linkedList.insert('c');
    linkedList.insert('b');
    linkedList.insert('a');
    expect(linkedList.includes('b')).toBe(true);
  });

  test('Will return false when searching for a value in the linked list that does not exist', () => {
    const linkedList = new LinkedList();
    linkedList.insert('c');
    linkedList.insert('b');
    linkedList.insert('a');
    expect(linkedList.includes('d')).toBe(false);
  });

  test('Can properly return a collection of all the values that exist in the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.insert('c');
    linkedList.insert('b');
    linkedList.insert('a');
    expect(linkedList.toString()).toBe('{ a } -> { b } -> { c } -> NULL');
  });
});
