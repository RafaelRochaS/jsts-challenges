// From https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/inventory-update

function updateInventory(arr1, arr2) {

  let names = [];

  arr1.forEach(element => {
    names.push(element[1]);
  });

  arr2.forEach(element => {
    if (names.includes(element[1])) {
      arr1[names.indexOf(element[1])][0] += element[0];
    } else {
      arr1.push(element);
    }
  });

  return arr1.sort(sortItems);
}

function sortItems(a, b) {
  if (a[1] < b[1]) {
    return -1;
  }

  if (a[1] > b[1]) {
    return 1;
  }

  return 0;
}

let curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

let newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));