const PseudoQueue  = require('../PseudoQueue');

describe('PseudoQueue', () => {
  let pseudoQueue;

  beforeEach(() => {
    pseudoQueue = new PseudoQueue();
  });

  test('enqueue should insert values in a FIFO manner', () => {
    pseudoQueue.enqueue(10);
    pseudoQueue.enqueue(15);
    pseudoQueue.enqueue(20);

    expect(pseudoQueue.dequeue()).toBe(10);
    expect(pseudoQueue.dequeue()).toBe(15);
    expect(pseudoQueue.dequeue()).toBe(20);
    expect(pseudoQueue.dequeue()).toBeNull();
  });

  test('dequeue should extract values in a FIFO manner', () => {
    pseudoQueue.enqueue(5);
    pseudoQueue.enqueue(10);
    pseudoQueue.enqueue(15);

    expect(pseudoQueue.dequeue()).toBe(5);
    expect(pseudoQueue.dequeue()).toBe(10);
    expect(pseudoQueue.dequeue()).toBe(15);
    expect(pseudoQueue.dequeue()).toBeNull();
  });

  test('dequeue should return null if the queue is empty', () => {
    expect(pseudoQueue.dequeue()).toBeNull();
  });
});