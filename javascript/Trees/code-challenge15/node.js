class Node {
    constructor( value,  left=null, right=null){ // here the value param should be put at the first of the params cus once i put value to a new node it will take the first params here
        this.left= left;
        this.right= right;
        this.value= value
    }
}

module.exports= Node;