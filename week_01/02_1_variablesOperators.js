// Week 1 Day 2 
// Variables and operators

// character at postion 8 to upper case (remember it satrts at 0)
console.log("All Around the World".charAt(7).toUpperCase())

// Storing variables 
// "let" can be changed "const" cannot be changed
// use ; at the end as best practice
let i = 10;
// i = i + 2;
i += 2; // A better way
console.log(i);

// camelCase for declaring variables
let favouriteDrink = "Coffee";
console.log(favouriteDrink);
// concatenation - using varibales in string
console.log("My favourite drink is " + favouriteDrink);

// Template Literals uses "`" to format with "${}"
const myName = "Katy";
let age = 38
console.log(`Hi my name is ${myName}, I am ${age} and my favourite drink is ${favouriteDrink}.`);

// Changeing Variable
favouriteDrink = "Water"
console.log(`Hi my name is ${myName}, I am ${age} and my favourite drink is ${favouriteDrink}.`);