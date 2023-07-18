'use strict'


class BinaryTree{
    constructor(root=null){ // here i put the null value so that if the tree is empty it shall return null , without it it will give an error
        this.root= root
    }
    preOrder(){  // i didnt add any new Node cuz here i dont want to add , i just want to traverse throught the array
        if (this.root === null) {
            return null;
          }
        let result =[]
        let traverse= (node)=>{
            result.push(node.value)
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right) 
        }
        traverse(this.root)
        return result
    }
    inOrder(){
        if (this.root === null) {
            return null;
          }
        let result =[]
        let traverse= (node)=>{
            if(node.left) traverse(node.left)
            result.push(node.value)
            if(node.right) traverse(node.right) 
    
        }
        traverse(this.root)
        return result
        
    }
    postOrder(){
        if (this.root === null) {
            return null;
          }
        let result =[]
        let traverse= (node)=>{
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right) 
            result.push(node.value)
    
        }
        traverse(this.root)
        return result

    }
    ///+++++++++++++++++++ code challenge 16 +++++++++++++++++++++

    findMaxValue() {
        if (this.root === null) {
          return null;
        }
        function findMaxValueNode(node) {
          let maxValue = node.value;
      
          if (node.left !== null) {
            const leftMax = findMaxValueNode(node.left);
            maxValue = Math.max(maxValue, leftMax);
          }
      
          if (node.right !== null) {
            const rightMax = findMaxValueNode(node.right);
            maxValue = Math.max(maxValue, rightMax);
          }
      
          return maxValue;
        }
        return findMaxValueNode(this.root);
      }

}

module.exports= BinaryTree;