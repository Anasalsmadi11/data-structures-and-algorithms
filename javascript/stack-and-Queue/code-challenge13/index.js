const  validateBracket= require('./validate-brackets')

console.log(validateBracket('()')); // true
console.log(validateBracket('({[]})')); // true
console.log(validateBracket('({)')); // false
console.log(validateBracket('[()]{}{[()()]()}')); // true
console.log(validateBracket(']')); // false
