/* 
Code Nation Masters Coding
Week 1 - Day 4 
JavaScript Objects 
*/

// Cafe object
const cafe = {
  name: "Whitesheep",
  seatingCapacity: 100,
  hasSpecialOffers: true,
  drinks: ["Cappuccino", "Latte", "Filter Coffee", "Tea", "Hot Chocolate"],
  breakfastOffer: "Free croissant with coffee",
  lunchOffer: "Free drink with sandwich",
  noOffer: "Sorry no offer",
  openCafe() {
    if (this.hasSpecialOffers) {
      return "Come on in";
    }
  },
  closeCafe() {
    return "We are closed";
  },
};
console.log(cafe.openCafe());

const findOffer = (time) => {
  if (time < 1100) {
    console.log(`${time} : ` + cafe.breakfastOffer);
  } else if (time < 1500) {
    console.log(`${time} : ` + cafe.lunchOffer);
  } else {
    console.log(`${time} : ` + cafe.noOffer);
  }
};

findOffer(1000);
findOffer(1300);
findOffer(1800);

console.log(cafe.openCafe());
console.log(cafe.closeCafe());

// Alarm Activity

const theAlarm = {
  weekendAlarm: "No alarm needed",
  weekdayAlarm: "Get up at 7am",
};

const setAlarm = (day) => {
  if (day == "Saturday" || day == "Sunday") {
    console.log(`${day} ` + theAlarm.weekendAlarm);
  } else {
    console.log(`${day} ` + theAlarm.weekdayAlarm);
  }
};

setAlarm("Saturday");
setAlarm("Sunday");
setAlarm("Monday");

// Person Object
const person = {
  name: "Katy",
  age: 38,
};
console.log(person.name);
// console.log(person["name"]);

// activity fav songs
person.favSongs = [
  "Billy Joel - Why should I worry",
  "Bruce Springsteen - Born to run",
];

console.log(person.favSongs);
console.log(person.favSongs[0]);
