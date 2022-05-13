// Code Nation Masters Coding Course
// Week 1 Day 3
// Arrays and Loops

// ARRAY ACTIVITIES

// Activity 1 - Make an array of 3 your favourite songs. 3 of them. Log them to the console.
// create a variable of an array (aka a list)
let favouriteSongs = [
  "Book of Mormon - Man up",
  "Funny Girl - The Greatest Star",
  "Annie - Little Girls",
];
console.log(favouriteSongs);

// Can you add another two songs to the list using a method and then remove the last one added?
// push will add to end of list 
favouriteSongs.push("Funny Girl - Don't rain on my parade");
//  adds to start of the list
favouriteSongs.unshift("Sister Act - Oh Happy Days");
console.log(favouriteSongs);
//  pop removes the last item of array (aka list)
favouriteSongs.pop();
console.log(favouriteSongs);

// Acrivity 2 -  Using MDN choose one of the following methods:
// map(), shift(), unshift(), splice(), unsplice().
// Create a program to demonstrate the use of the method.
// (Note: Not all methods would permanently update/make changes to the arrays themselves.)

// Map() - works likea for loop 
// map each index element and replace with conditionl value 
let aListOfNumbers = [1, 3, 5, 7];
let aMap = aListOfNumbers.map((x) => x * 3);
console.log(aMap);

// shift() - resturns first element of array and removes from the list 
console.log(aMap.shift());
console.log(aMap);

// unshift() - adds at start of list 
aListOfNumbers.unshift(1);
console.log(aListOfNumbers);

// push and pop adds to end or removes from end 
// shift and unshift adds or removes from start of list 

// splice() - inserts and selects a portion of the array 
// (indexToGoIn, sliceAtIndex, newItem)
aListOfNumbers.splice(1, 0, 8);
console.log(aListOfNumbers);

//  slice() - slice the array at index value (n)
//  removes first (n) items of list
console.log(aListOfNumbers.slice(3));

// LOOP ACTIVITIES

// Activity 1 - Create an array that lists your favourite films, up to 5 elements.
// Add 2 more using a method.
// Use a loop to cycle through the array

let favouriteFilms = [
  "Schindler's List",
  "Fight Club",
  "King of Kings",
  "Imitation Game",
  "The Muppets Movie",
];

//  added two more with a push - added at end 
favouriteFilms.push("Forest Gump", "Toy Story");

// iterate through list printing each indexed element 
for (let i = 0; i < favouriteFilms.length; i++) {
  console.log(favouriteFilms[i]);
}

// Activity 2 - Generate 6 random numbers between 1-50 and log them to the console

//  for loop
// create empty list
let randomNumbers = [];
// for loop while i less than the value of 6 
for (let i = 0; i < 6; i++) {
  // push add - Math is telling it to use maths - floor round down - time by 50 because JS Math is 0-1
  // so 0.123456 * 10 = 1.23456 
  // Math.floor turn 1.234 to a whole number so 1 
  // floor round down - 1.6 floor = 1
  // ceiling rounds up - 1.2 and ceiling = 2
  // round - 1.2 i 1 or 1.6 is 2 
  // round is to the nearest whole number 
  randomNumbers.push(Math.floor(Math.random() * 50));
}
console.log(randomNumbers);

// While loop
let randNum = [];
while (randNum.length < 6) {
  let r = Math.floor(Math.random() * 50) + 1;
  if (randNum.indexOf(r) === -1) randNum.push(r);
}
console.log(randNum);

// Activity 3 - If we can create a loop to put 0-9 on the screen, how can we count from 9-0? Create a program that does this.

let aNumber = 0;
// while the number is less than 10 
while (aNumber < 10) {
  // rpint to terminal
  console.log(aNumber);
  //  add 1 to the number 
  aNumber++;
} 
// loop untill value = 6

let aNumber1 = 9;
// greater than -1
while (aNumber1 > -1) {
  console.log(aNumber1);
  // subtracting 1 from the aNumber value 
  aNumber1--;
}
// will loop untill value is -1 and the stop 

// Activity 4 - Displays 4 films stored in an array.
// Use a for loop to show each film in the array.
// Use an if statement to check if the 3rd film in the array is Ghostbusters.
// If it is, return “Yay it’s Ghostbusters”. If it isn’t return “Boo! we want Ghostbusters!

let fourFilms = ["Toy Story", "Home Alone", "Spiderman", "Gremlins"];

// for each index value while the index value is less than the length of the list and add 1 on each iteration
for (let i = 0; i < fourFilms.length; i++) {
  // print
  console.log(fourFilms[i]);
}

//  3rd item is in slot 2
if (fourFilms[2] == "GhostBusters") {
  console.log("Yay it's Ghostbusters");
} else {
  console.log("Boo! We want Ghostbusters");
}

// Activity 5 - Generate a random number between 1 and 30 six times.
// For each random number generated, check if this number of divisible by 7 or not.
// Log out a message to the console if it is divisible by 7 or not.

let randomNumberList = [];
// for eachItem in List; add 1 at end and iterated again 
for (let i = 0; i < 6; i++) {
  randomNumberList.push(Math.floor(Math.random() * 30));
}
console.log(randomNumberList);

// for each item in index while index value is less than the length of the list the add one and itterate again until the index value equal the length of the list
for (let i = 0; i < randomNumberList.length; i++) {
  // if the index value element of list in divisible by 7 
  if (randomNumberList[i] % 7 == 0) {
    console.log(`${randomNumberList[i]} is divisible by 7`);
  } else {
    console.log(`${randomNumberList[i]} is not divisible by 7`);
  }
}

//  example code for index and index values
// theNameOfAList[IndexPosition] - [] square brackets for index value 
//  index value 0, 1, 2, 3, 4 ....n
//  index element is what is stored in the index slot i.e aList[aIndexValue] return indexElement
for (let i = 0; i < randomNumberList.length; i++) {
  console.log(`${i}: ${randomNumberList[i]}`);
}

// Activity 6 - magine you’re a programmer for a social media platform! You have been tasked with building a prototype for a mutual followers program
// Create 2 arrays of followers e.g. bobsFollowers & hannahsFollowers. In these arrays place 4 names as strings. Make sure there are 2 names that are in BOTH arrays.
// Using a nested loop iterate over both arrays and console.log out the matching follower.

let bobsFollowers = ["Katy", "Sarah", "Mark", "Taz"];
let hannahsFollowers = ["Joanne", "Claire", "Sarah", "Katy"];

// OUT LOOP - index called bobIndex
// bobIndex = 0 Index elenment is "Katy"
for (let bobIndex = 0; bobIndex < bobsFollowers.length; bobIndex++) {
  // INNER LOOP - index called hannahIndex
  for (
    let hannahIndex = 0;
    hannahIndex < hannahsFollowers.length;
    hannahIndex++
  ) {
      // Check each index slot for "Katy"
    if (bobsFollowers[bobIndex] == hannahsFollowers[hannahIndex]) {
      console.log(`${bobsFollowers[bobIndex]} follows Bob and Hannah`);
    }
  }
}

// OUTER LOOP = "Katy"
// INNER LOOP; does "Katy" equal "Claire" no next
//  does katy equal sarah no next 
//  does katy equal joanne no next 
//  does katy equal katy - yes print to console
// OUTERLOOP = "Sarah"
// ... repeat untill all items in bobsFollowers have been comapred with all items of Hannahs followers

// Activity 7 - Research on do...while loop, find out about the difference between
// for loop, while loop and do...while loop. Give an example of each. What are the pros and cons?

// While Loop
// Uses a condition and the program will run WHILE the condition is met
// Pros - Can iterate through part of an array example is only want to iterate 1/2 the list
// Cons - Can get stuck on an loop if condition is not met 

// For Loop 
// Iterates over an array for a condition i.e for the length of a list 
// Pros - can iterate over a full list if you dont know long the list is i.e a list of over 1200000 items 
// Con - cant not iterate over part of list ? 