const {AnimalShelter,Animal} = require("../AnimalShelter ")



describe('AnimalShelter', () => {
  let shelter;

  beforeEach(() => {
    shelter = new AnimalShelter();
  });

  describe('enqueue', () => {
    test('should add a cat or dog to the queue', () => {
      const animal1 = new Animal('cat', 'Fluffy');
      const animal2 = new Animal('dog', 'Buddy');

      shelter.enqueue(animal1);
      shelter.enqueue(animal2);

      expect(shelter.queue).toContain(animal1);
      expect(shelter.queue).toContain(animal2);
    });

    test('should not add an animal other than a cat or dog to the queue', () => {
      const animal = new Animal('bird', 'Tweetie');

      shelter.enqueue(animal);

      expect(shelter.queue).not.toContain(animal);
    });
  });

  describe('dequeue', () => {
    beforeEach(() => {
      shelter.enqueue(new Animal('cat', 'Fluffy'));
      shelter.enqueue(new Animal('dog', 'Buddy'));
    });

    test('should return and remove the first cat in the queue when "cat" is passed', () => {
      const cat = shelter.dequeue('cat');

      expect(cat.species).toBe('cat');
      expect(cat.name).toBe('Fluffy');
      expect(shelter.queue).not.toContain(cat);
    });

    test('should return and remove the first dog in the queue when "dog" is passed', () => {
      const dog = shelter.dequeue('dog');

      expect(dog.species).toBe('dog');
      expect(dog.name).toBe('Buddy');
      expect(shelter.queue).not.toContain(dog);
    });

    test('should return null when an invalid preference is passed', () => {
      const animal = shelter.dequeue('bird');

      expect(animal).toBeNull();
    });
  });
});



// describe("AnimalShelter", () => {
//   test("enqueue should add animals to the shelter", () => {
//     const shelter = new AnimalShelter();
//     const dog = new Animal("dog", "Buddy");
//     const cat = new Animal("cat", "Whiskers");
//     shelter.enqueue(dog);
//     shelter.enqueue(cat);
//     expect(shelter.dogQueue[0]).toEqual(dog);
//     expect(shelter.catQueue[0]).toEqual(cat);
//   });
//   test('dequeue should return the first dog when preference is "dog"', () => {
//     const shelter = new AnimalShelter();
//     const dog1 = new Animal("dog", "Buddy");
//     const dog2 = new Animal("dog", "Max");
//     const cat = new Animal("cat", "Whiskers");
//     shelter.enqueue(dog1);
//     shelter.enqueue(cat);
//     shelter.enqueue(dog2);
//     const dequeuedDog = shelter.dequeue("dog");
//     expect(dequeuedDog).toEqual(dog1);
//   });
//   test('dequeue should return null when preference is neither "dog" nor "cat"', () => {
//     const shelter = new AnimalShelter();
//     const dog = new Animal("dog", "Buddy");
//     const cat = new Animal("cat", "Whiskers");
//     shelter.enqueue(dog);
//     shelter.enqueue(cat);
//     const dequeuedAnimal = shelter.dequeue("bird");
//     expect(dequeuedAnimal).toBeNull();
//   });
// });