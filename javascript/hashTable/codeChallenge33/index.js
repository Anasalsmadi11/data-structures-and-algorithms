function leftJoin(synonyms, antonyms) {
    const result = [];
  
    const synonymKeys = Object.keys(synonyms);
    for (let i = 0; i < synonymKeys.length; i++) {
      const key = synonymKeys[i];
      const synonym = synonyms[key];
      const antonym = antonyms[key] || null;
      result.push([key, synonym, antonym]);
    }
  
    return result;
  }
  
  
  const synonyms = {
    diligent: 'employed',
    fond: 'enamored',
    guide: 'usher',
    outfit: 'garb',
    wrath: 'anger',
  };
  
  const antonyms = {
    diligent: 'idle',
    fond: 'averse',
    flow: 'jam',
    wrath: 'delight',
  };
  
  const result = leftJoin(synonyms, antonyms);
  console.log(result);
  