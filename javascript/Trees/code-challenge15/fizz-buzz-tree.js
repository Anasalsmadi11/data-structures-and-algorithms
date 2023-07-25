class Node {
    constructor(value) {
      this.value = value;
      this.children = [];
    }
  }
  
  function fizzBuzzTree(root) {
    if (!root) {
      return null;
    }
  
    const newRoot = new Node(getFizzBuzzValue(root.value));
  
    for (const child of root.children) {
      const newChild = fizzBuzzTree(child);
      newRoot.children.push(newChild);
    }
  
    return newRoot;
  }
  
  function getFizzBuzzValue(value) {
    let result = '';
  
    if (value % 3 === 0) {
      result += 'Fizz';
    }
  
    if (value % 5 === 0) {
      result += 'Buzz';
    }
    // else{
    //   result += value.toString()
    // }
  
    return result || value.toString()
  }

  function createKaryTree() {
    const root = new Node(1);
    const child1 = new Node(2);
    const child2 = new Node(3);
    const child3 = new Node(5);
    const child4 = new Node(15); 
  
    root.children.push(child1, child2, child3, child4);
    return root;
  }
  
  const originalTree = createKaryTree();
  const fizzBuzzModifiedTree = fizzBuzzTree(originalTree);
  console.log(fizzBuzzModifiedTree);
  

  module.exports = { fizzBuzzTree, getFizzBuzzValue, createKaryTree };