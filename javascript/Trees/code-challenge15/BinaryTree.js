'use strict'


class BinaryTree{
    constructor(root=null){
        this.root= root
    }
    preOrder(){  // i didnt add any new Node cuz here i dont want to add , i just want to traverse throught the array
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
        let result =[]
        let traverse= (node)=>{
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right) 
            result.push(node.value)
    
        }
        traverse(this.root)
        return result

    }
}

module.exports= BinaryTree;