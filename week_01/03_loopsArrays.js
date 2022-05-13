// Code Nation Masters Coding
// Week 1 Day 3
// JavaScript Arrays and Loops

// ARRAYS

// Arrays (Lists)
let coffeeOrder = [
  "Alex - Cortade",
  "Ben - Cortade",
  "Charlie - Whatever's new",
];
console.log(coffeeOrder);

// accessing index
console.log(coffeeOrder[2]);

// changing an item in arrau
coffeeOrder[1] = "Ann - Vanilla latte";
console.log(coffeeOrder);

// Length of Array
console.log(coffeeOrder.length);

// Push method - adds to end of list
coffeeOrder.push("Donna - espresso");
console.log(coffeeOrder);

// pop method - removes last item from list
coffeeOrder.pop();
console.log(coffeeOrder);

// unshift() - adds at start of list
coffeeOrder.unshift("Katy - Flatwhite");
console.log(coffeeOrder);

// splice() - add new element in position
coffeeOrder.splice(1, 0, "Mark - Espresso");
console.log(coffeeOrder);

// slice() - removes the element in brackets (1)
console.log(coffeeOrder.slice(1));

// map() - loops with condition
let anArray = [1, 2, 3, 4];
let aMap = anArray.map((x) => x * 2);
console.log(aMap);

// LOOPS

let favouriteDrinks = ["Coffee", "Coke", "Beer"];
console.log(favouriteDrinks);

// console.log(favouriteDrinks[0]);
// console.log(favouriteDrinks[1]);
// console.log(favouriteDrinks[2]);

for (i = 0; i < favouriteDrinks.length; i++) {
  console.log(favouriteDrinks[i]);
}

// for loops with if statements
let multiplesTwo = [];
for (let i = 0; i < 20; i++) {
  if (i % 2 == 0) {
    multiplesTwo.push(i);
  }
}
console.log(`Numbers divisible by 2 between 0 and 20 are: ${multiplesTwo}`);

// While loops
let age = 15;
while (age < 18) {
  console.log("You're a child!");
  age++;
}
console.log("You're and adult");

// while loops
let cards = ["Diamond", "Spade", "Heart", "Club"];
let currentCard = "Club";

while (currentCard != "Spade") {
  console.log(currentCard);
  currentCard = cards[Math.floor(Math.random() * 4)];
}
console.log(currentCard);
