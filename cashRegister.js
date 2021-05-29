const INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS";
const OPEN = "OPEN";
const CLOSED = "CLOSED";

function checkCashRegister(price, cash, cid) {

  let change = cash - price;
  let totalCid = 0;

  for (const item of cid) {
    totalCid += item[1];
  }

  totalCid = Math.round((totalCid + Number.EPSILON) * 100) / 100;
  cid.reverse();

  if (totalCid > change) {
    return getReturnCid(change, cid);
  } else if (totalCid === change) {
    cid.reverse();
    return { status: CLOSED, change: cid };
  } else {
    return { status: INSUFFICIENT_FUNDS, change: [] };
  }
}

function getReturnCid(change, cid) {

  let returnCid = [];

  if (cid[0][1] > 0) {
    let division = Math.floor(change / 100);
    if (division > 0) {
      let changeValue = 100 * division - cid[0][1];
      returnCid.push(['ONE HUNDRED', changeValue]);
      change -= Math.round((changeValue + Number.EPSILON) * 100) / 100;
    }
  }

  if (cid[1][1] > 0) {
    let division = Math.floor(change / 20);
    if (division > 0) {
      let changeValue = 20 * division;
      if (changeValue >= cid[1][1]) {
        changeValue = cid[1][1];
      }
      returnCid.push(['TWENTY', changeValue]);
      change -= changeValue;
      change = Math.round((change + Number.EPSILON) * 100) / 100;
    }
  }

  if (cid[2][1] > 0) {
    let division = Math.floor(change / 10);
    if (division > 0) {
      let changeValue = 10 * division;
      if (changeValue >= cid[2][1]) {
        changeValue = cid[2][1];
      }
      returnCid.push(['TEN', changeValue]);
      change -= changeValue;
      change = Math.round((change + Number.EPSILON) * 100) / 100;
    }
  }

  if (cid[3][1] > 0) {
    let division = Math.floor(change / 5);
    if (division > 0) {
      let changeValue = 5 * division;
      if (changeValue >= cid[3][1]) {
        changeValue = cid[3][1];
      }
      returnCid.push(['FIVE', changeValue]);
      change -= changeValue;
      change = Math.round((change + Number.EPSILON) * 100) / 100;
    }
  }

  if (cid[4][1] > 0) {
    let division = Math.floor(change / 1);
    if (division > 0) {
      returnCid.push(['ONE', division]);
      change -= division;
      change = Math.round((change + Number.EPSILON) * 100) / 100;
    }
  }

  if (cid[5][1] > 0) {
    let division = Math.floor(change / 0.25);
    if (division > 0) {
      let changeValue = 0.25 * division;
      if (changeValue >= cid[5][1]) {
        changeValue = cid[5][1];
      }
      returnCid.push(['QUARTER', changeValue]);
      change -= changeValue;
      change = Math.round((change + Number.EPSILON) * 100) / 100;
    }
  }

  if (cid[6][1] > 0) {
    let division = Math.floor(change / 0.1);
    if (division > 0) {
      let changeValue = 0.1 * division;
      if (changeValue >= cid[6][1]) {
        changeValue = cid[6][1];
      }
      returnCid.push(['DIME', changeValue]);
      change -= changeValue;
      change = Math.round((change + Number.EPSILON) * 100) / 100;
    }
  }

  if (cid[7][1] > 0) {
    let division = Math.floor(change / 0.05);
    if (division > 0) {
      let changeValue = 0.05 * division;
      if (changeValue >= cid[7][1]) {
        changeValue = cid[7][1];
      }
      returnCid.push(['NICKEL', changeValue]);
      change -= changeValue;
      change = Math.round((change + Number.EPSILON) * 100) / 100;
    }
  }

  if (cid[8][1] > 0) {
    let division = Math.floor(change / 0.01);
    if (division > 0) {
      let changeValue = 0.01 * division;
      if (changeValue >= cid[8][1] && returnCid.length === 0) {
        return { status: INSUFFICIENT_FUNDS, change: [] };
      }
      else if (changeValue >= cid[8][1]) {
        changeValue = cid[8][1];
      }
      returnCid.push(['PENNY', changeValue]);
      change -= changeValue;
      change = Math.round((change + Number.EPSILON) * 100) / 100;
    }
  }

  return ((returnCid.length > 0) ? { status: OPEN, change: returnCid } : { status: INSUFFICIENT_FUNDS, change: [] });
}

// Freecodecamp tests
// console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
// console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));