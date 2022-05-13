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

  // // drinks order
  // drinksOrdered(orderList) {
  //   // for each item in list
  //   for (let i = 0; i < orderList.length; i++) {
  //     if (this.drinks.hasOwnProperty(orderList[i])) {
  //       finalOrder.push(` ${orderList[i]}: £${this.drinks[orderList[i]]}`);
  //       // console.log(`${orderList[i]}: £${this.drinks[orderList[i]]}`);
  //       total = total + this.drinks[orderList[i]];
  //     }
  //   }
  // },

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
