const {AnimalShelter,Animal} = require("./AnimalShelter ")

const shelter= new AnimalShelter()

shelter.enqueue(new Animal('dog', 'Buddy'));
shelter.enqueue(new Animal('cat', 'Whiskers'));
shelter.enqueue(new Animal('dog', 'Max'));

console.log(shelter.dequeue('cat').name)

const dog= shelter.dequeue('dog')
console.log(dog.name)


// let arr= [1,2,3,4,5]
// for(let i =0; i< arr.length; i++){
//     if(arr[i]==2){
//         console.log( arr.splice(i,1)[0]) //without [0] it will return [2], with it it will return 2
//         console.log(arr)
//     }
// }