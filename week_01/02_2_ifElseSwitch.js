// Week 1 Day 2
// If Else and Switch

// If else comparisons
let weather = "sunny";
if (weather == "sunny"){
    console.log("Well, I better wear some sunscream!");
} else if (weather == "rainy"){
    console.log("Better take an umbrella");
} else {
    console.log("Hmmm, it could go either way!");
}

// Strict equals 
if (1 === "1"){
    console.log(true);
} else {
    console.log(false);
}

// Not Equal 
if (1 != "1"){
    console.log(true);
} else {
    console.log(false);
}

// And comparisons
let place = "Manc";
let weather1 = "Cloudy";

if (place == "Manc" && weather1 == "Sunny"){
    console.log("Check again");
} 
else if (place == "Manc" && weather1 == "Rain"){
    console.log("Obvs");
}
else {
    console.log("What it isn't raining?");
}

// example days of week
let day = "Saturday";
if (day == "Saturday" || day == "Sunday"){
    console.log("It's the weekend");
}
else{
    console.log("When's the weeknd?")
}

// Switch 
let car = "Peugeot";

switch(car){
    case "Ford":
    case "GM":
        console.log("You've got an American car!");
        break;
    case "Peugeot":
    case "Citroen":
        console.log("You've got a French boy!");
        break;
    case "Honda":
    case "Toyota":
    case "Suzuki":
        console.log("Japanese cares are dead quiet!");
        break;
    case "Mercedes":
        console.log("You are a prooper pose German!");
        break;
    case "Volkswagen":
        console.log("German aren't that bad at all");
        break;
    case "Hyundai":
    case "Kia":
        console.log("South Korean cars are getting popular!");
        break;
    default:
        console.log("Your car is not in top ten companies in the world!")
}

// example grade
const grade = 87;
switch (true) {
    case grade >= 70:
        console.log("Distinction");
        break;
    case grade >= 60:
        console.log("Merit");
        break;
    case grade >= 50:
        console.log("Pass");
        break;
    default:
        console.log("Failed")
}
