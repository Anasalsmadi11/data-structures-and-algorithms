const validateBracket = require('../validate-brackets');

describe('validateBracket', () => {
  test('should return true for a string with valid and properly closed brackets', () => {
    expect(validateBracket('()')).toBe(true);
    expect(validateBracket('({[]})')).toBe(true);
    expect(validateBracket('[()]{}{[()()]()}')).toBe(true);
  });

  test('should return false for a string with invalid or improperly closed brackets', () => {
    expect(validateBracket('(')).toBe(false);
    expect(validateBracket(')')).toBe(false);
    expect(validateBracket('({)')).toBe(false);
    expect(validateBracket('({[]})]')).toBe(false);
    expect(validateBracket('[({)]}')).toBe(false);
  });
});
