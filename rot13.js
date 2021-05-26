// From: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator

import { timing } from './utils.js';

function rot13(str) {

  const LOWER_BOUND = 65;
  const UPPER_BOUND = 90;
  const ROT13_VALUE = 13;
  
  let arr = str.split('');
  let resultArr = [];

  for (const char of arr) {
    if (char === ' ' || char === '!' || char === '?' || char === '.' || char === ',') {
      resultArr.push(char);
      continue;
    }
    let charValue = char.toUpperCase().charCodeAt();
    let rotted = charValue + ROT13_VALUE;
    if (rotted > UPPER_BOUND) {
      rotted = LOWER_BOUND + (rotted - UPPER_BOUND) - 1;
    }
    resultArr.push(String.fromCharCode(rotted));
  }

  return resultArr.join('');
}

// Freecodecamp tests
// console.log(rot13('SERR PBQR PNZC'));
// console.log(rot13('SERR CVMMN!'));
// console.log(rot13('SERR YBIR?'));
// console.log(rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.'));

// Performance tests
timing(rot13,'SERR PBQR PNZC');
timing(rot13,'SERR CVMMN!');
timing(rot13,'SERR YBIR?');
timing(rot13,'GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.');