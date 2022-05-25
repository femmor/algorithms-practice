// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution 1 - using reverse method
// const reverse = str => {
//   return str.split('').reverse().join('');
// };

// Solution 2 - using forOf
// const reverse = str => {
//   let reversed = '';
//   for (let character of str) {
//     reversed = character + reversed;
//   }
//   return reversed;
// };

// Solution 3 - using for loop
// const reverse = str => {
//   let reversed = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// };

// Solution 4 - using reduce method
const reverse = str => {
  return str.split('').reduce((acc, curr) => {
    return curr + acc;
  }, '');
};

module.exports = reverse;
