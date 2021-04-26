let calculateChange = (input) => {
  // Add your code here
  // define number values
  var amount = input;
  var countD = 0, countQ = 0, countDi = 0, countN = 0, countC = 0;

  if(input > 10) {
    console.log("$" + input + " ==> "+"Error: the number is too large");
  }
  else {
    // count the coins
    while(amount > 0) {
      if(amount >= 1) {
        amount -= 1;
        countD++;
      }
      else if(amount >= 0.25) {
        amount -= 0.25;
        countQ++;
      }
      else if(amount >= 0.1) {
        amount -= 0.1;
        countDi++;
      }
      else if(amount >= 0.05) {
        amount -= 0.05;
        countN++;
      }
      else {
        amount -= 0.01;
        countC++;
      }
    }

    // formatting for printing in console
    if(countD == 1) {
      var printD = "1 dollar"
    }
    else if(countD == 0) {
      var printD = "";
    }
    else {
      var printD = countD + " dollars";
    }

    if(countQ == 1) {
      var printQ = " 1 quarter"
    }
    else if(countQ == 0) {
      var printQ = "";
    }
    else {
      var printQ = " " + countQ + " quarters";
    }

    if(countDi == 1) {
      var printDi = " 1 dime"
    }
    else if(countDi == 0) {
      var printDi = "";
    }
    else {
      var printDi = " " + countDi + " dimes";
    }

    if(countN == 1) {
      var printN = " 1 nickel"
    }
    else if(countN == 0) {
      var printN = "";
    }
    else {
      var printN = " " + countN + " nickels";
    }

    if(countC == 1) {
      var printC = " 1 penny"
    }
    else if(countC == 0) {
      var printC = "";
    }
    else {
      var printC = " " + countC + " pennies";
    }

    // print in console
    console.log("$"+input+" ==> "+printD+printQ+printDi+printN+printC);
  }
};

// Sample Test Cases
console.log(calculateChange(4.62));
// $4.62 ==> 4 dollars, 2 quarters, 1 dime, 2 pennies
console.log(calculateChange(9.74));
// $9.72 ==> 9 dollars, 2 quarters, 2 dimes, 4 pennies
console.log(calculateChange(0.16));
// $0.16 ==> 1 dime, 1 nickel, 1 penny
console.log(calculateChange(15.11));
// $15.11 ==> Error: the number is too large
