const searchTree= require('../subClass')
const Node= require('../node')

// Assuming Jest testing framework is used

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
  });
  
  