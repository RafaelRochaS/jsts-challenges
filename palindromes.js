// From: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker

import { timing } from './utils.js';

function palindrome(str) {

  // Short, fast version
  return str.replace(/[^0-9a-z]/gi, '').toLowerCase().split('').reverse().join('') === str.replace(/[^0-9a-z]/gi, '').toLowerCase();
}

function palindromeVars(str) {

  // Longer, with variables

  str = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
  let rev = str.split('').reverse().join('');

  return str === rev;
}

function palindromeManual(str) {

  // Slow, manual version

  str = str.replace(/[^0-9a-z]/gi, '').toLowerCase();

  let strArr = [];
  let reverseArr = [];

  for (let c of str) {
    strArr.push(c);
  }

  for (let index = strArr.length - 1; index >= 0; index--) {
    reverseArr.push(strArr[index]);
  }

  for (let index = 0; index < strArr.length; index++) {
    if (reverseArr[index] !== strArr[index]) {
      return false;
    }
  }

  return true;
}

// Freecodecamp tests
// console.log(palindrome("eye"));
// console.log(palindrome("_eye"));
// console.log(palindrome("race car"));
// console.log(palindrome("not a palindrome"));
// console.log(palindrome("A man, a plan, a canal. Panama"));
// console.log(palindrome("never odd or even"));
// console.log(palindrome("nope"));
// console.log(palindrome("almostomla"));
// console.log(palindrome("My age is 0, 0 si ega ym."));
// console.log(palindrome("1 eye for of 1 eye."));
// console.log(palindrome("0_0 (: /-\ :) 0-0"));
// console.log(palindrome("five|\_/|four"));

// Performance tests
console.log('\n\n[*] Timing vars...');
console.time('Vars');
palindromeVars("eye");
palindromeVars("_eye");
palindromeVars("race car");
palindromeVars("not a palindrome");
palindromeVars("A man, a plan, a canal. Panama");
palindromeVars("never odd or even");
palindromeVars("nope");
palindromeVars("almostomla");
palindromeVars("My age is 0, 0 si ega ym.");
palindromeVars("1 eye for of 1 eye.");
palindromeVars("0_0 (: /-\ :) 0-0");
palindromeVars("five|\_/|four");
console.timeEnd('Vars');
console.log('[+] Vars done');

timing(palindromeVars, "eye");

console.log('\n[*] Timing One liner...');
console.time('One liner');
palindrome("eye");
palindrome("_eye");
palindrome("race car");
palindrome("not a palindrome");
palindrome("A man, a plan, a canal. Panama");
palindrome("never odd or even");
palindrome("nope");
palindrome("almostomla");
palindrome("My age is 0, 0 si ega ym.");
palindrome("1 eye for of 1 eye.");
palindrome("0_0 (: /-\ :) 0-0");
palindrome("five|\_/|four");
console.timeEnd('One liner');
console.log('[+] One liner done');

console.log('\n[*] Timing manual...');
console.time('Manual');
palindromeManual("eye");
palindromeManual("_eye");
palindromeManual("race car");
palindromeManual("not a palindrome");
palindromeManual("A man, a plan, a canal. Panama");
palindromeManual("never odd or even");
palindromeManual("nope");
palindromeManual("almostomla");
palindromeManual("My age is 0, 0 si ega ym.");
palindromeManual("1 eye for of 1 eye.");
palindromeManual("0_0 (: /-\ :) 0-0");
palindromeManual("five|\_/|four");
console.timeEnd('Manual');
console.log('[+] Manual done');