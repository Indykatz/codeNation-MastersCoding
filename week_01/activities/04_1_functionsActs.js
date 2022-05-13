/* 
Code Nation Masters Coding
Week 1 - Day 4 
JavaScript Functions - Activities
*/

// Activity 1 -Take this code and turn it into arrow function syntax:
/* 
function factorial (n) {
    if ((n === 0) || (n === 1)) 
    return 1;
    } else {
        return ( n * factorial(n-1));
    }
}
*/

const factorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

console.log(factorial(33));

// Activity 2 - Edit the below snippet to include two parameters and a running order count updated when the function is called:
/*
let orderCount = 0;
const takeOrder = (topping) => {
    console.log(`Pizza with ${topping});
    orderCount++;
}
takeOrder("Pineapple");
*/

let orderCount = 0;
const takeOrder = (size, topping) => {
  console.log(`Order ${orderCount} : ${size} inch Pizza with ${topping}`);
  orderCount++;
};

takeOrder(12, "Pineapple");
takeOrder(10, "Ham");

//  Activity 3 Cash machine time! Let’s create one that:
// Dispenses cash if your pin number is correct and your balance is equal to, or more than, the amount you’re trying to withdraw!

// declared the variables
let pinNumber = 1234;
let accBalance = 500;

// Functions expression - Anonymous function ? DOESNT STORE IT IN MEMORY JUST DOES MATH ?
const balanceCheck = function (number) {
  return accBalance - number;
};

// anonymous function for pin check
const pinCheck = function (thePin) {
  if (pinNumber == thePin) {
    return false;
  } else {
    return true;
  }
};

// the function with arrow function method
const cashMachine = (thePin, amount) => {
  // is pin corrent?

  if (pinCheck(thePin)) {
    // no correct print
    console.log("Incorrect Pin Number");
    // it is correct so else do this
  } else {
    // is the amount greater than balance
    if (amount > accBalance) {
      // print
      console.log("Insufficient funds");
    } else {
      // the ammount is less than the balance
      accBalance = balanceCheck(amount);
      console.log(`New balance is ${accBalance}`);
    }
  }
};

cashMachine(1233, 300);
cashMachine(1234, 600);
cashMachine(1234, 400);
cashMachine(1234, 200);
