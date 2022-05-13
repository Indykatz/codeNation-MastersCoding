// Week 1 Day 2

// Activities

// Activity 1 - Create a program that stores someone’s name, age and favourite colour and log it to the console in a complete sentence using Template Literals.
let userName = "Katy";
let userAge = 38;
let userColour = "Red"
console.log(`${userName} is ${userAge} years old and their favourite colour is ${userColour}`)

// Update all of your variables and write out a new sentence underneath your original.
userName = "Mark";
userAge = 36;
userColour = "Orange";
console.log(`${userName} is ${userAge} years old and their favourite colour is ${userColour}`);

// Activity 2 - Create a program that stores what you eat today for breakfast, lunch and dinner. Log these to the console.
let breakfast = "Cereal";
let lunch = "Soup";
let dinner = "Pizza";
console.log(`I have ${breakfast} for breakfast, ${lunch} for lunch and ${dinner} for my dinner`);

// Update each of these variables to what you will eat tomorrow. Log these to the console.
breakfast = "Toast";
lunch = "Salad";
dinner = "Pasta";
console.log(`Tomorrow I will have ${breakfast} for breakfast, ${lunch} for lunch and ${dinner} for my dinner`);

// Activity 3 - Create a program that calculates the number of days from today to your birth date.
let myBirthday = new Date("2022-08-02")
let dateToday = new Date()
let calculateTime = myBirthday.getTime() - dateToday.getTime()
let timeDifference = calculateTime / (1000*60*60*24)
console.log(`There are ${Math.round(timeDifference)+1} till my birthday`)

// Activity 4 - > Create 9 variables: space1, space2... space9.
// > Assign either the value ‘x’,’o’,’ ‘, to each of these variables.
// > Insert the variables into your board using the ${varName} syntax and make it look like the displayed board.

let space1 = "X"
let space2 = "O"
let space3 = " "
let space4 = "X"
let space5 = "X"
let space6 = " "
let space7 = "O"
let space8 = " "
let space9 = " "

console.log("     |     |    ")
console.log(`  ${space1}  |  ${space2}  |  ${space3}  `)
console.log("     |     |    ")
console.log("-----------------")
console.log("     |     |    ")
console.log(`  ${space4}  |  ${space5}  |  ${space6}  `)
console.log("     |     |    ")
console.log("-----------------")
console.log("     |     |    ")
console.log(`  ${space7}  |  ${space8}  |  ${space9}  `)
console.log("     |     |    ")

// While solution
console.log("While solution for grid")
const gridArray = ["     |     |    ", "----------------"]
const row2 = (`  ${space1}  |  ${space2}  |  ${space3}  `)
const row6 = (`  ${space4}  |  ${space5}  |  ${space6}  `)
const row10 = (`  ${space7}  |  ${space8}  |  ${space9}  `)

let i = 1;
while (i < 12) {
    // if i / 4 = 0
    if (i % 4 === 0){
    // print item 1 "----------"
    console.log(gridArray[1])};
    if (i == 2){
    console.log(row2)}
    if (i == 6){
    console.log(row6)}
    if (i == 10){
    console.log(row10)}
    // print item 1 "    |    |    "
    if (i == 1 | i == 3 | i == 5 | i == 7 | i == 8 | i == 10) {console.log(gridArray[0])}
    i = i+1
    }


// Renee's solution
console.log("Renee's solution")
let row = [`   |   |   \n ${space1} | ${space2} | ${space3}  \n   |   |   `,
   `   |   |   \n ${space4} | ${space5} | ${space6}  \n   |   |   `,
   `   |   |   \n ${space7} | ${space8} | ${space9}  \n   |   |   `]
     for (let i = 0; i < row.length; i++){
     console.log(row[i]);
     if(i < row.length -1){
         console.log('-----------')
     }
}