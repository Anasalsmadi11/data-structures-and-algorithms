const Node= require('../code-challenge15/node')
const BinaryTree= require('../code-challenge15/BinaryTree')
const searchTree =require('./subClass')

// let tree= null

// let one = new Node(1);
// let two = new Node(2);
// let three = new Node(3);
// let four = new Node(4);
// let five = new Node(5);
// let six = new Node(6);
// let seven = new Node(7);
// let eight = new Node(8);
// let nine = new Node(9);

// one.left = two;
// one.right = three;
// two.left = six;
// three.left = four;
// three.right = five;
// six.right = seven;
// seven.left = eight;
// seven.right = nine;


// tree= new BinaryTree(one)

// let preOrder= tree.preOrder()
// let inOrder= tree.inOrder()
// let postOrder= tree.postOrder()


// console.log('preOrder: ', preOrder);
// console.log('inOrder: ', inOrder);
// console.log('postOrder: ', postOrder);  


// let root= new Node(70)
// let fifty= new Node(50)
// let hundred= new Node(100)
// let sixty= new Node(60)

// let subTree= new searchTree(root)

// root.left= fifty
// root.right= hundred
// fifty.left= sixty 
// // console.log(root.value)

// subTree.add(80)
// let preOrder =subTree.preOrder()
// console.log('preOrder',preOrder)

const bst = new searchTree();
bst.add(4);
bst.add(2);
bst.add(6);
bst.add(1);
bst.add(3);
bst.add(5);
bst.add(7);

console.log(bst.contains(5)); 
console.log(bst.contains(8));  

console.log(bst.preOrder()); 