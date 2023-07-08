'use strict'

class Animal{
    constructor(species, animalName){
        this.species= species;
        this.name= animalName
    }
}

class AnimalShelter {
    constructor(){
        this.queue=[]
    }
    enqueue(animal){
        // const animal= new Animal(this.species ,this.name)
        if(animal.species === "cat" || animal.species=== "dog"){
            this.queue.push(animal)
        }
    }
    dequeue(pref){
        if(pref=== 'dog' || pref === 'cat'){
        for(let i =0; i< this.queue.length; i++){
            if(this.queue[i].species === pref){
                // console.log(this.queue.splice(i, 1)[0])
                return this.queue.splice(i, 1)[0] //why we put [0], see the commented example in the index
            }
        }    
        }
        return null
    }
}

module.exports={
    AnimalShelter,
    Animal
}