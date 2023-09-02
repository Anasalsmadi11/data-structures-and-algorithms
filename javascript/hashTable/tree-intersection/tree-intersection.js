"strict mode"
class Node{
    constructor(value, left= null , right=null){
        this.value= value,
        this.left= left,
        this.right= right
    }
}

class BinaryTree{
    constructor(root=null){
        this.root= root
    }
    preorder(){
        if(this.root ===null){
            return null
        }
        let result=[]
        let traverse=(node)=>{
            result.push(node.value)
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)

        }
        traverse(this.root)
        return result
    }
}

let level_150 = new Node(150);
let level_100 = new Node(100);
let level_250 = new Node(250);
let level_75 = new Node(75);
let level_160 = new Node(160);
let level_200 = new Node(200);
let level_350 = new Node(350);
let level_125 = new Node(125);
let level_175 = new Node(175);
let level_300 = new Node(300);
let level_500 = new Node(500);

level_150.left= level_100
level_150.right= level_250
level_100.left= level_75
level_100.right= level_160
level_250.left= level_200
level_250.right= level_350
level_160.left= level_125
level_160.right= level_175
level_350.left= level_300
level_350.right= level_500


let leveel_42 = new Node(42);
let leveel_100 = new Node(100);
let leveel_600 = new Node(600);
let leveel_15 = new Node(15);
let leveel_160 = new Node(160);
let leveel_200 = new Node(200);
let leveel_350 = new Node(350);
let leveel_125 = new Node(125);
let leveel_175 = new Node(175);
let leveel_4 = new Node(4);
let leveel_500 = new Node(500);

leveel_42.left= leveel_100
leveel_42.right= leveel_600
leveel_100.left= leveel_15
leveel_100.right= leveel_160
leveel_600.left= leveel_200
leveel_600.right= leveel_350
leveel_160.left= leveel_125
leveel_160.right= leveel_175
leveel_350.left= leveel_4
leveel_350.right= leveel_500


let firstTree= new BinaryTree(level_150)
let secondTree= new BinaryTree(leveel_42)

console.log(firstTree.preorder())
console.log(secondTree.preorder())


function tree_intersection(tree1, tree2){
let result=[]
    // tree1= new BinaryTree()
    // tree2= new BinaryTree()

    let arr1 = tree1.preorder()
    let arr2 = tree2.preorder()

    if(tree1.root== null || tree2.root ==null){
        return null
    }

    for(let i= 0 ; i<arr1.length; i++){
        for(let k= 0 ; k<arr2.length; k++){
    
            if(arr1[i]===arr2[k]){

                let spliced_i= arr1.splice(i,1)  //splice takes O(n) always
                let spliced_k =arr2.splice(i,1)
                
                i=i-1

                result.push(spliced_i)
                
            }
        }
        
    }
    return result.flatMap(item => item )

    
}

// let firstTree= new BinaryTree(level_150)
// let secondTree= new BinaryTree(leveel_42)

// console.log(firstTree.root.value)
console.log(tree_intersection(firstTree, secondTree))

module.exports={
    BinaryTree,
    Node,
    tree_intersection
}