// From https://www.freecodecamp.org/learn/coding-interview-prep/rosetta-code/100-doors

function getFinalOpenedDoors(numDoors) {

  let doors = [];

  for (let index = 0; index < numDoors; index++) {
    doors.push(new Door());
  }

  for (let visit = 1; visit <= numDoors; visit++) {
    for (let index = 0; index < doors.length; index++) {
      if ((index + 1) % visit === 0 && (index + 1) >= visit) {
        doors[index].toggle();
      }
    }
  }

  let result = [];

  doors.forEach((door, index) => {
    if (door.status === 'open') {
      result.push(index + 1);
    }
  });

  return result;
}

class Door {

  constructor() {
    this.status = 'closed';
  }

  toggle() {
    this.status === 'closed' ? this.status = 'open' : this.status = 'closed'
  }
}

console.log(getFinalOpenedDoors(100));