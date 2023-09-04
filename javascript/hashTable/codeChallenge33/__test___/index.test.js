const {HashMap,leftJoin} = require('../index'); 


describe('leftJoin', () => {
  it('should do a left join correctly', () => {

    const synonyms = new HashMap(10);
    synonyms.set('diligent', 'employed');
    synonyms.set('fond', 'enamored');
    synonyms.set('guide', 'usher');
    synonyms.set('outfit', 'garb');
    synonyms.set('wrath', 'anger');

    const antonyms = new HashMap(10);
    antonyms.set('diligent', 'idle');
    antonyms.set('fond', 'averse');
    antonyms.set('flow', 'jam');
    antonyms.set('wrath', 'delight');


    const expectedResult = [
      ['diligent', 'employed', 'idle'],
      ['fond', 'enamored', 'averse'],
      ['guide', 'usher', null],
      ['outfit', 'garb', null],
      ['wrath', 'anger', 'delight'],
    ];


    const result = leftJoin(synonyms, antonyms);


    expect(result).toEqual(expectedResult);
  });

  it('should handle empty synonym hashmap', () => {

    const synonyms = new HashMap(10);
    const antonyms = new HashMap(10);
    antonyms.set('example', 'sample');


    const expectedResult = [];


    const result = leftJoin(synonyms, antonyms);

    expect(result).toEqual(expectedResult);
  });

});
