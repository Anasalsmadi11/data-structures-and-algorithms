// const Node = require('../queue/Node');
const Queue = require('../queue/Queue');
const Stack = require('../stack/Stack');

// Stack Tests
describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('can successfully push onto a stack', () => {
    stack.push(1);
    expect(stack.peek()).toEqual(1);
  });

  it('can successfully push multiple values onto a stack', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.peek()).toEqual(3);
  });

  it('can successfully pop off the stack', () => {
    stack.push(1);
    stack.push(2);
    const popped = stack.pop();
    expect(popped).toEqual(2);
    expect(stack.peek()).toEqual(1);
  });

  it('can successfully empty a stack after multiple pops', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.isEmpty()).toEqual(true);
  });

  it('can successfully peek the next item on the stack', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.peek()).toEqual(2);
  });

  it('can successfully instantiate an empty stack', () => {
    expect(stack.isEmpty()).toEqual(true);
  });

  // it('calling pop on empty stack raises an exception', () => {
  //   const popFn = () => stack.pop();
  //   expect(popFn).toThrowError('empty stack');
  // });

  // it('calling peek on empty stack raises an exception', () => {
  //   const peekFn = () => stack.peek();
  //   expect(peekFn).toThrowError('sorry stack is empty');
  // });
});

// Queue Tests
describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  it('can successfully enqueue into a queue', () => {
    queue.enqueue(1);
    expect(queue.peek()).toEqual(1);
  });

  it('can successfully enqueue multiple values into a queue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.peek()).toEqual(1);
  });

  it('can successfully dequeue out of a queue the expected value', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    const dequeued = queue.dequeue();
    expect(dequeued).toEqual(1);
    expect(queue.peek()).toEqual(2);
  });

  it('can successfully peek into a queue, seeing the expected value', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.peek()).toEqual(1);
  });

  it('can successfully empty a queue after multiple dequeues', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.isEmpty()).toEqual(true);
  });

  it('can successfully instantiate an empty queue', () => {
    expect(queue.isEmpty()).toEqual(true);
  });

  // it('calling dequeue on empty queue raises an exception', () => {
  //   const dequeueFn = () => queue.dequeue();
  //   expect(dequeueFn).toThrowError('sorry queue is empty');
  // });

  // it('calling peek on empty queue raises an exception', () => {
  //   const peekFn = () => queue.peek();
  //   expect(peekFn).toThrowError('sorry queue is empty');
  // });
});
