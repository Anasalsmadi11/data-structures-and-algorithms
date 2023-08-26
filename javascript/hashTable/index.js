

class Node{
    constructor(key,value){
        this.key= key
        this.value= value
        this.next= null
    }
}

class LinkedList{
    constructor(head){
        this.head= head
    }
   append(key,value) {
        const node = new Node(key,value);
        if (!this.head) {
            this.head = node;
            return;
        }else{

            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        
        }

        let current = this.head
       while(current){
           if(current.key == key){
            current.value= value
            return // this will break the loop  
        }
        current= current.next
        }
        
    }
    find(key){
        let current=this.head
        while(current){
            if(current.key== key){
                return current.value
            }
            current= current.next
        }
        return undefined

    }
    has(key){
        let current= this.head
        let check= false
        while(current){
            if(current.key === key){
                check= true
                return check
            }
            current= current.next
        
        }
        return check
    }
    keys(){
        let keysArray=[]
        let current= this.head
        while(current){
            keysArray.push(current.key)
            current= current.next
        }
        return keysArray
    }
}

class Hashmap{
    constructor(size){
        this.size= size
        this.map= new Array(size)
    }
    
    makeHash(key){
        let asciiCode= key.split('').reduce((acc, char)=>{
            return acc + char.charCodeAt()
        },0)
        let multiPrime= asciiCode *599
        let index= multiPrime % this.size
        return index
    }
    
    set(key,value){
        let hash = this.makeHash(key)
        if(!this.map[hash]){
            this.map[hash]= new LinkedList()
        }
        this.map[hash].append(key,value)
    }
    get(key){
        let hash = this.makeHash(key)
        if(!this.map[hash]) return undefined
       return  this.map[hash].find(key)
    }
    has(key){
        let hash= this.makeHash(key)
        if(!this.map[hash]) return false
        return this.map[hash].has(key)
    }
    keys(){
        let allKeys=[]
        for(let i= 0; i< this.size ; i++){
            if(this.map[i]){
                allKeys.push(...this.map[i].keys())
            }
        }
        return allKeys

    }
    hash(key){
        return  this.makeHash(key)
      
    }
}

const hashTable = new Hashmap(10);

hashTable.set("name", "Alice");
hashTable.set("age", 25);
hashTable.set("name", "Bob"); 
hashTable.set("omar", "401d15 student");
hashTable.set("anas", "401d15");
hashTable.set("anas", "401d15 student");
hashTable.set("mohamad", "401d15 student");
hashTable.set("dali", "401d15 student");
hashTable.set("arma", "401d15 student");
hashTable.set("shihab", "401d15 student");

console.log(hashTable.get("name")); 
console.log(hashTable.has("age")); 
console.log(hashTable.has("city"));
console.log(hashTable.keys());      
console.log(hashTable.hash("arma"));

module.exports={
    Node,
    LinkedList,
    Hashmap
}