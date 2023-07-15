const BinaryTree = require('./BinaryTree');
const Node= require('./node')

class searchTree extends BinaryTree{
    constructor(root){
        super(root)
    
    }
    
  add(value) {
    const newNode = new Node(value);
    
    if (this.root === null) {
      this.root = newNode;
    } else {
    function insertNode(node,newNode){
        if(newNode.value <node.value  ){
            if(node.left === null){
                node.left= newNode
            }else{
                insertNode(node.left, newNode)
            }
        }else{
            if(node.right === null){
                node.right= newNode
            }else{
               insertNode(node.right, newNode)
            }
        }
    
      }
      return insertNode(this.root, newNode);
    }
  }

 // ++++++++++++ or: +++++++++++++++++++++++

//   insertNode(node, newNode) {
//     if (newNode.value < node.value) {
//       if (node.left === null) {
//         node.left = newNode;
//       } else {
//         this.insertNode(node.left, newNode); // here is the difference , we put this cuz insertNode is a method for the searchTree class
//       }
//     } else {
//       if (node.right === null) {
//         node.right = newNode;
//       } else {
//         this.insertNode(node.right, newNode);
//       }
//     }
//   }

  contains(value) {
    
      function searchNode(node, value) {
          if (node === null) return false;
    
          if (value === node.value) {
              return true;
            } else if (value < node.value) {
      return searchNode(node.left, value);
    } else {
        return searchNode(node.right, value);
    }
    }
    return searchNode(this.root, value);
    }

 // ++++++++++++ or: +++++++++++++++++++++++

//   searchNode(node, value) {
//     if (node === null) return false;
    
//     if (value === node.value) {
//       return true;
//     } else if (value < node.value) {
//       return this.searchNode(node.left, value); 
//     } else {
//       return this.searchNode(node.right, value);
//     }
//   }
    
}

module.exports= searchTree