class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
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
    repeatedWord(inputString) {
        const words = inputString.toLowerCase().split(/\W+/); // this /\W+/ is different than " " cus this ignore anything other than the words so if there is a charecter like - (" so i went - to") it wont add it to the array
        const encounteredWords = new Hashmap(this.size);

        for (const word of words) {
            if (encounteredWords.has(word)) {
                return word; 
            }
            encounteredWords.set(word, word);
        }

        return null; 
    }
}

const hashmap = new Hashmap(10); 

const inputString = "Once upon a time, there was a brave princess who...";
const result = hashmap.repeatedWord(inputString)

console.log(result); 

module.exports= Hashmap