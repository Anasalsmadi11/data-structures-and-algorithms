const BinaryTree= require('../binaryTree')
const Node= require('../node')

describe('BinaryTree', () => {
  // let BinaryTree;

  beforeEach(() => {

    tree = new BinaryTree();
  });

  describe('findMaxValue', () => {


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
  });
});
