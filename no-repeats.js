function permAlone(str) {

  let repetitons = 0;
  let permutations = 0;

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (i === j) {
        continue;
      }
      let testStr = changeItemPlaces(str, i, j);
      if (!checkRepeatedChars(testStr)) {
        repetitons += 1;
      }
      console.log('--------------------------------------------------------------');
      console.log(`Iteration: ${i}\tPosition: ${j}\tRepetitons: ${repetitons}\tPermutations: ${permutations}\nString: ${testStr.join('')}`);
      permutations += 1;
    }
  }

  return repetitons;
}

function changeItemPlaces(arrInput, pos1, pos2) {

  let arr = arrInput.split('');
  let temp = arr[pos1];
  arr[pos1] = arr[pos2];
  arr[pos2] = temp;

  return arr;
}

function checkRepeatedChars(str) {

  for (let index = 0; index < str.length - 1; index++) {
    if (str[index] === str[index + 1]) {
      return true;
    }
  }

  return false;
}

// console.log(permAlone('aab'));
// console.log();
// console.log(permAlone('aaa'));
// console.log();
// console.log(permAlone('aabb'));
// console.log();
console.log(permAlone('abcdefa'));
// console.log();
// console.log(permAlone('abfdefa'));
// console.log();
