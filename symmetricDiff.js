// From https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/find-the-symmetric-difference

import { timing } from './utils.js';

function symmetricDiff(...args) {

  let arraysSum = [...args];

  if (arraysSum.length === 0) {
    return [0];
  } 

  if (arraysSum.length === 1) {
    return arraysSum;
  }

  let result = Array.from(new Set(repeated(arraysSum[0], arraysSum[1])));

  for (let index = 2; index < arraysSum.length; index++) {
    result = Array.from(new Set(repeated(result, arraysSum[index])));
  }

  return result;
}

function repeated(arr1, arr2) {

  let result = [];

  arr1.forEach(element => {
    if (!arr2.includes(element)) {
      result.push(element);
    }
  });

  arr2.forEach(element => {
    if (!arr1.includes(element)) {
      result.push(element);
    }
  });

  return result;
}

console.log(symmetricDiff([1, 2, 3], [5, 2, 1, 4]));
console.log(symmetricDiff([1, 2, 5], [2, 3, 5], [3, 4, 5]));
console.log(symmetricDiff([1, 2, 3, 3], [5, 2, 1, 4]));
console.log(symmetricDiff([1, 2, 3], [5, 2, 1, 4, 5]));
console.log(symmetricDiff([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]));
console.log(symmetricDiff([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]));
console.log(symmetricDiff([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]));

// timing(symmetricDiff, [1, 2, 3], [5, 2, 1, 4]);
// timing(symmetricDiff, [1, 2, 3, 3], [5, 2, 1, 4]);
// timing(symmetricDiff, [1, 2, 3], [5, 2, 1, 4, 5]);

