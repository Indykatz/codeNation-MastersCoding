/* 
Code Nation Masters Coding
Week 1 - Day 4 
JavaScript Objects Activities 
*/

// Activity 1 - Let’s edit our person object to include...
// A function called sayHi and when it’s called, it should return “Hello my name is ${this.name}”

// Person Object
const person = {
  name: "Katy",
  age: 38,
  sayHi() {
    return `Hello my name is ${this.name} and I am ${this.age}`;
  },
};
console.log(person.sayHi());

// Activity 2 - Create an object called pet with the key values of:
// name, typeOfPet, age, colour
// And methods called eat and drink. They should return a string saying [Your Pet Name] is eating/drinking.

const pet = {
  name: "Aryeh",
  typeOfPet: "Cat",
  age: 15,
  breed: "Bengal",
  eat() {
    return `${this.name} is eating`;
  },
  drink() {
    return `${this.name} is drinking`;
  },
};

console.log(pet.eat());
console.log(pet.drink());

// Activity 3 Create an object called coffeeShop with key values of: branch, drinks with prices, food with prices
// And methods called drinksOrdered and foodOrdered.
// They should return a string saying [Your order] is ... with all items chosen with costs and total costs.

// coffee shop challange

let total = 0;
let finalOrder = [];

const coffeeShop = {
  drinks: {
    coffee: 2.5,
    tea: 2,
    milk: 1,
  },
  food: {
    sandwich: 5,
    toastie: 5,
    soup: 4,
  },

  // drinks order
  drinksOrdered(orderList) {
    // for each item in list
    for (let i = 0; i < orderList.length; i++) {
      if (this.drinks.hasOwnProperty(orderList[i])) {
        finalOrder.push(` ${orderList[i]}: £${this.drinks[orderList[i]]}`);
        // console.log(`${orderList[i]}: £${this.drinks[orderList[i]]}`);
        total = total + this.drinks[orderList[i]];
      }
    }
  },

  // food order
  foodOrdered(orderList) {
    // for each item in list
    for (let i = 0; i < orderList.length; i++) {
      if (this.food.hasOwnProperty(orderList[i])) {
        finalOrder.push(` ${orderList[i]}: £${this.food[orderList[i]]}`);
        // console.log(`${orderList[i]}: £${this.food[orderList[i]]}`);
        total = total + this.food[orderList[i]];
      }
    }
  },

  // Order
  customerOrder(orderList) {
    this.drinksOrdered(orderList);
    this.foodOrdered(orderList);
    console.log(`Your order is${finalOrder}, comes to £${total}`);
  },
};

theOrder = ["tea", "coffee", "tea", "sandwich", "toastie", "soup"];

coffeeShop.customerOrder(theOrder);
