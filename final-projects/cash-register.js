function checkCashRegister(price, cash, cid) {
  const changeDue = (cash - price).toFixed(2);
  const currencyAvailable = getAvailableCurrency(cid);

  function getAvailableCurrency(changeInDrawer) {
   let total = 0;
   for (let change of changeInDrawer) {
     total += change[1];
   }
   return total.toFixed(2);
 }

 console.log(currencyAvailable);
 console.log(changeDue);

 if (currencyAvailable < changeDue) {
   return {status: "INSUFFICIENT_FUNDS", change: []};
 }
 else if (currencyAvailable === changeDue) {
   return {status: "CLOSED", change: cid};
 }
 else {
   return {status: "OPEN", change: [getChangeToReturn(changeDue, currencyAvailable)]};
 }

 function getChangeToReturn(changeDue, currencyAvailable) {
   const change = [];
   const currencyNameValue = {
      PENNY: 0.01,
      NICKEL: 0.05,
      DIME: 0.10,
      QUARTER: 0.25,
      ONE: 1.00,
      FIVE: 5.00,
      TEN: 10.00,
      TWENTY: 20.00,
      "ONE HUNDRED": 100.00
   };

   for (let i = cid.length - 1; i >= 0; i--) {
     
   }

 }
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1],
["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60],
["ONE HUNDRED", 100]]);
