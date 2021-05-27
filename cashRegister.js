function checkCashRegister(price, cash, cid) {

  const INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS";
  const OPEN = "OPEN";
  const CLOSED = "CLOSED";

  let change = cash - price;
  let totalCid = 0;

  for (const item of cid) {
    totalCid += item[1];
  }

  totalCid = Math.round((totalCid + Number.EPSILON) * 100) / 100;
  cid.sort((first, second) => second[1] - first[1]);

  if (totalCid > change) {
    return getReturnCid(change, cid);
  } else if (totalCid === change) {
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
      returnCid.push(['ONE HUNDRED', 100 * division]);
      change -= 100 * division;
    }
  }

  if (cid[1][1] > 0) {
    let division = Math.floor(change / 20);
    if (division > 0) {
      returnCid.push(['TWENTY', 20 * division]);
      change -= 20 * division;
    }
  }

  if (cid[2][1] > 0) {
    let division = Math.floor(change / 10);
    if (division > 0) {
      returnCid.push(['TEN', 10 * division]);
      change -= 10 * division;
    }
  }

  if (cid[3][1] > 0) {
    let division = Math.floor(change / 5);
    if (division > 0) {
      returnCid.push(['FIVE', 5 * division]);
      change -= 5 * division;
    }
  }

  if (cid[4][1] > 0) {
    let division = Math.floor(change / 1);
    if (division > 0) {
      returnCid.push(['ONE', division]);
      change -= division;
    }
  }

  if (cid[5][1] > 0) {
    let division = Math.floor(change / 0.25);
    if (division > 0) {
      returnCid.push(['QUARTER', division * 0.25]);
      change -= division * 0.25;
    }
  }

  if (cid[6][1] > 0) {
    let division = Math.floor(change / 0.1);
    if (division > 0) {
      returnCid.push(['DIME', division * 0.1]);
      change -= division * 0.1;
    }
  }

  if (cid[7][1] > 0) {
    let division = Math.floor(change / 0.05);
    if (division > 0) {
      returnCid.push(['NICKEL', division * 0.05]);
      change -= division * 0.05;
    }
  }

  if (cid[8][1] > 0) {
    let division = Math.floor(change / 0.01);
    if (division > 0) {
      returnCid.push(['PENNY', division * 0.01]);
      change -= division * 0.01;
    }
  }

  return ((returnCid.length > 0) ? { status: 'OPEN', change: returnCid } : { status: INSUFFICIENT_FUNDS, change: [] });
}


console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));