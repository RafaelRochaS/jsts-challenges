// From: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter

function convertToRoman(num) {

  // Crappy implementation

  let base = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let strings = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  let index = 0;
  let quotient = 0;
  let resultingString = '';

  while (num > 0) {
    while (num < base[index]) { // find starting index
      index++;
    }
    quotient = Math.floor(num / base[index]);
    num = num % base[index];
    let charToAdd = strings[index];
    while (quotient > 0) {
      resultingString += charToAdd;
      quotient--;
    }
  }

  return resultingString;
}
