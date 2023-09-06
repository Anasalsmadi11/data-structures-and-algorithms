
class HashMap {
    constructor(size) {
      this.size = size;
      this.map = new Array(size);
    }

    set(key, value) {
      this.map[key] = value;
    }
  

    get(key) {
      return this.map[key];
    }
  

    keys() {
      return Object.keys(this.map);
    }
  }
  
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
  
  function leftJoin(synonyms, antonyms) {
    const result = [];
  
    const synonymKeys = synonyms.keys();
    for (let i = 0; i < synonymKeys.length; i++) {
      const key = synonymKeys[i];
      const synonym = synonyms.get(key);
      const antonym = antonyms.get(key) || null;
      result.push([key, synonym, antonym]);
    }
  
    return result;
  }
  
  const result = leftJoin(synonyms, antonyms);
  console.log(result);
  
  module.exports={
    HashMap,
    leftJoin
  }