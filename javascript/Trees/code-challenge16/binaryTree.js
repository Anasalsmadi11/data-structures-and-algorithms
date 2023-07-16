'use strict'

class BinaryTree{
    constructor(root){
        this.root= root
    }


    findMaxValue() {
        if (this.root === null) {
          return null;
        }
    
        return this.findMaxValueNode(this.root);
      }
    
      findMaxValueNode(node) {
        let maxValue = node.value;
    
        if (node.left !== null) {
          const leftMax = this.findMaxValueNode(node.left);
          maxValue = Math.max(maxValue, leftMax);
        }
    
        if (node.right !== null) {
          const rightMax = this.findMaxValueNode(node.right);
          maxValue = Math.max(maxValue, rightMax);
        }
    
        return maxValue;
      }
//     maxValue(){
//         let maxLeft=0
//         let maxRight=0
//         let traverse=(node)=>{
//             if(node.left){
//                 if(node.value >node.left.value){
//                     maxLeft= node.value
//                     traverse(node.left)
//                     // console.log(maxLeft)
                    
                    
//                 }else{
//                     maxLeft= node.left.value
//                     traverse(node.left)
//                     // console.log(maxLeft)
//                     //  return max

//                 }
//         }
//             if(node.right){
//                 if(node.value >node.right.value){
//                     maxRight= node.value
//                     traverse(node.right)
//                     // console.log(maxRight)
//                 }else{
//                     maxRight= node.right.value
//                     traverse(node.right)
//                     // console.log(maxRight)
//                 }
               
//             }
           
//             if(maxRight >maxLeft){
//                console.log( maxRight)
//             }else{
//                 console.log( maxLeft)
//             }
//         }
//     traverse(this.root)
//     // console.log(this.root.value)
 
// }


}
module.exports= BinaryTree