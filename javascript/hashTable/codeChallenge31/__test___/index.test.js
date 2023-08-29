const repeatedWord = require('../index'); 

describe('Hashmap', () => {
    // let hashmap;

    beforeEach(() => {  // either put it like this or define it in each it test , like the commented ones
        // hashmap = new Hashmap(10);
        
    });

    describe('repeatedWord', () => {
        it('should return the first repeated word in the string', () => {
        //    let  hashmap = new Hashmap(10);
            const inputString = "Once upon a time, there was a brave princess who...";
            const result = repeatedWord(inputString);
            expect(result).toEqual('a');
        });

        it('should return null if no repeated word is found', () => {
            // let  hashmap = new Hashmap(10);
            const inputString = "This is a test string with no repeated words.";
            const result =repeatedWord(inputString);
            expect(result).toBeNull();
        });
    });
});
