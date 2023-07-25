const searchTree= require('../subClass')
const Node= require('../node')
const breadthFirst= require('../index')
const { fizzBuzzTree, getFizzBuzzValue, createKaryTree } = require('../fizz-buzz-tree')

describe('searchTree', () => {
    let tree;
  
    beforeEach(() => {
      // Create a binary search tree with initial nodes: 5, 3, 7, 2, 4, 6, 8
      tree = new searchTree(new Node(5));
      tree.add(3);
      tree.add(7);
      tree.add(2);
      tree.add(4);
      tree.add(6);
      tree.add(8);
    });
  
    test('add method should add a new node to the correct location in the tree', () => {
      tree.add(9);
      expect(tree.contains(9)).toBe(true);
    });
  
    test('contains method should return true if the value is present in the tree', () => {
      expect(tree.contains(4)).toBe(true);
    });
  
    test('contains method should return false if the value is not present in the tree', () => {
      expect(tree.contains(10)).toBe(false);
    });
  
    test('preorder method should return an array with the pre-order traversal of the tree', () => {
      expect(tree.preOrder()).toEqual([5, 3, 2, 4, 7, 6, 8]);
    });
  
    test('inorder method should return an array with the in-order traversal of the tree', () => {
      expect(tree.inOrder()).toEqual([2, 3, 4, 5, 6, 7, 8]);
    });
  
    test('postorder method should return an array with the post-order traversal of the tree', () => {
      expect(tree.postOrder()).toEqual([2, 4, 3, 6, 8, 7, 5]);
    });

    it('should return the maximum value in a binary tree', () => {
      const root = new Node(10);
      const node5 = new Node(5);
      const node15 = new Node(15);
      const node3 = new Node(3);
      const node7 = new Node(7);
      const node20 = new Node(20);

      root.left = node5;
      root.right = node15;
      node5.left = node3;
      node5.right = node7;
      node15.right = node20;

      tree.root = root;

      expect(tree.findMaxValue()).toBe(20);
    });

    // Assuming you have a Tree class with the root property
class Tree {
  constructor(root) {
    this.root = root;
  }
}

 // ++++++++++++++++++++++++++ code challenge 17 +++++++++++++++++++

  it('returns an array of values in breadth-first order', () => {
    const root = {
      value: 10,
      left: {
        value: 5,
        left: {
          value: 3,
          left: null,
          right: null,
        },
        right: {
          value: 8,
          left: null,
          right: null,
        },
      },
      right: {
        value: 15,
        left: null,
        right: {
          value: 20,
          left: null,
          right: null,
        },
      },
    };

    const tree = new Tree(root);

    const result = breadthFirst(tree);

    expect(result).toEqual([10, 5, 15, 3, 8, 20]);

});


///////////////////// code challenge 19 /////////////////

test('should convert tree values to Fizz, Buzz, or FizzBuzz', () => {
  const originalTree = createKaryTree();
  const fizzBuzzModifiedTree = fizzBuzzTree(originalTree);

  // Helper function to recursively check the modified tree values
  function checkTreeValues(node) {
    if (!node) return;
    const fizzBuzzValue = getFizzBuzzValue(node.value);

    expect(node.value).toEqual(fizzBuzzValue);
    node.children.forEach((child) => checkTreeValues(child));
  }

  checkTreeValues(fizzBuzzModifiedTree);
});

test('should return null for an empty tree', () => {
  expect(fizzBuzzTree(null)).toBeNull();
});
});

// Test cases for getFizzBuzzValue function
describe('getFizzBuzzValue', () => {
test('should return "Fizz" for multiples of 3', () => {
  expect(getFizzBuzzValue(3)).toEqual('Fizz');
  expect(getFizzBuzzValue(6)).toEqual('Fizz');
});

test('should return "Buzz" for multiples of 5', () => {
  expect(getFizzBuzzValue(5)).toEqual('Buzz');
  expect(getFizzBuzzValue(10)).toEqual('Buzz');
});

test('should return "FizzBuzz" for multiples of both 3 and 5', () => {
  expect(getFizzBuzzValue(15)).toEqual('FizzBuzz');
  expect(getFizzBuzzValue(30)).toEqual('FizzBuzz');
});

test('should return the original value as a string for other numbers', () => {
  expect(getFizzBuzzValue(2)).toEqual('2');
  expect(getFizzBuzzValue(7)).toEqual('7');
});
  });
  
  