/* EXERCISE 1 – Array.prototype.map() */
// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 
// 2 and log the new array.

console.log('---------Exercise 1----------');

const multiplied = nums.map(num => num * 2);
console.log(multiplied);

/* EXERCISE 2 – Array destructuring */
// Given the following array, use destructuring to 
// pull out the first and second values and place 
// them into variables. Log both variables.

console.log('---------Exercise 2----------');
const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

const [firstTopping, secondTopping] = pizzaToppings;
console.log(firstTopping);
console.log(secondTopping);


/* EXERCISE 3 – Object destructuring */
// Given the following object, use destructuring to 
// create variables `make` and `model` that will hold the 
// respective values.

console.log('---------Exercise 3---------');
const car = {
    make: 'Audi',
    model: 'q5',
  };

const { make, model } = car;
console.log(make);
console.log(model);


/* EXERCISE 4 – Spread operator */


console.log('---------Exercise 4---------');
