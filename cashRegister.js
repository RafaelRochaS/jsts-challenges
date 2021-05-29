const INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS";
const OPEN = "OPEN";
const CLOSED = "CLOSED";

let references = new Map();
references.set('ONE HUNDRED', 100);
references.set('TWENTY', 20);
references.set('TEN', 10);
references.set('FIVE', 5);
references.set('ONE', 1);
references.set('QUARTER', 0.25);
references.set('DIME', 0.1);
references.set('NICKEL', 0.05);
references.set('PENNY', 0.01);

function checkCashRegister(price, cash, cid) {

  let change = cash - price;
  let totalCid = 0;
  let returnCid = [];

  for (const item of cid) {
    totalCid += item[1];
  }

  totalCid = Math.round((totalCid + Number.EPSILON) * 100) / 100;
  cid.reverse();

  if (totalCid > change) {
    for (const item of cid) {
      let updateObj = updateCidChange(change, item[0], item[1]);
      if (updateObj !== undefined) {
        change = updateObj.change;
        returnCid.push([item[0], updateObj.changeValue]);
      }
    }
    return ((returnCid.length > 0) ?
      { status: OPEN, change: returnCid } :
      { status: INSUFFICIENT_FUNDS, change: [] });
  } else if (totalCid === change) {
    cid.reverse();
    return { status: CLOSED, change: cid };
  } else {
    return { status: INSUFFICIENT_FUNDS, change: [] };
  }
}

function updateCidChange(change, valueString, value) {

  let divValue = references.get(valueString);
  if (divValue === undefined) {
    throw new Error('Value not found in map');
  }
  let division = Math.floor(change / divValue);
  if (division > 0) {
    let changeValue = divValue * division - value;
    change -= Math.round((changeValue + Number.EPSILON) * 100) / 100;
    return { change: change, changeValue: changeValue };
  } else {
    return;
  }
}

// Freecodecamp tests
console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));