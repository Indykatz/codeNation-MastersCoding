/* 
Code Nation Masters Coding
Week 1 - Day 4 
JavaScript Functions 
*/

// new way to do functions
const pressGrindBeans = () => {
  console.log("Grinding for 2 seconds");
};
// call function
pressGrindBeans();

// functions with IF statements
let coffeeIsGrinding = false;

const pressGrindBeans1 = () => {
  if (coffeeIsGrinding) {
    console.log("Stop gridning");
    coffeeIsGrinding = false;
  } else {
    console.log("Grinding is about to begin");
    coffeeIsGrinding = true;
  }
};
pressGrindBeans1();

// global varaibles in functions
let accNumber = 50449921;
const cashWithdrawal = (amount, accNum) => {
  console.log(`Withdraw ${amount} from account ${accNum}`);
};
cashWithdrawal(300, accNumber);
cashWithdrawal(20, 50449921);
cashWithdrawal(200, 50447921);

// return in functions
const addUp = (num1, num2) => {
  return num1 + num2;
};
addUp(7, 3);
console.log(addUp(2, 5));

// functions calling functions - recursive programming
const multiplyByNineFiths = (celsius) => {
  return celsius * (9 / 5);
};
const getFahrenheit = (celsius) => {
  return multiplyByNineFiths(celsius) + 32;
};
console.log("The temperature is " + getFahrenheit(15) + "°F");

// Arrow Function - modern way 
const square1 = (number) => {
  return number * number;
};
console.log(square1(5));

// function declaration
function square2(number) {
  return number * number;
}
console.log(square2(5));

// Functions expression - Anonymous function ? 
const square3 = function (number) {
  return number * number;
};
console.log(square3(5));
