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


/* EXERCISE 4 – Spread operator on arrays ... */
// Duplicate the following array using the spread 
// operator and assign it to `controversialPizzaToppings`. 
// Then, log the variable.

console.log('---------Exercise 4---------');
const controversialPizzaToppings = [...pizzaToppings];
console.log(controversialPizzaToppings);

/* EXERCISE 5 – Spread operator on objects ... */
// Duplicate the following object and spread its 
// values into a new variable `myCar`.
// Change the `model` property of `myCar` to 'q7'. 
// Log both objects.

console.log('---------Exercise 5---------');

const myCar = { ...car };
myCar.model = 'q7';
console.log("car is ", car);
console.log("myCar is ", myCar);

/* EXERCISE 6 – Dynamic keys in objects */
// [] bracket notation

const fruitType = 'bananas'; // Variable as a dynamic key

const fruitInventory = {
  [fruitType]: 5,
};

// Create an object named userProfile. 
// Define a variable named propertyName and assign a 
// string to it (like a username, age, or email). 
// Use propertyName as a dynamic key in userProfile, 
// assigning a relevant value.

console.log('---------Exercise 6---------');

const propertyName = 'username';

const userProfile = {
    [propertyName]: 'nicky',
}
console.log(userProfile[propertyName]);


/* EXERCISE 8 – Default parameters */
// Create a function that takes two parameters, 
// `noun` and `adjective`, both with the following 
// respective default values:

// 1. `cat`

// 2. `white`

// The function should log a sentence 'The cat is white.' 
// by default. The function should substitute the appropriate 
// parameters when supplied arguments.

console.log('---------Exercise 8---------');
const nounAdjective = (noun = 'cat', adjective = 'white') => {
    return `The ${noun} is ${adjective}`;
};
console.log(nounAdjective());
console.log(nounAdjective('drama', 'dramatic'));


/* EXERCISE 9 – Ternary operators */
// Convert the following `if...else` statement in to a ternary:

let pizza = 'tasty';

// if (pizza === 'tasty') {
//   console.log('yum');
// } else {
//   console.log('yuck');
// }

console.log('---------Exercise 9---------');

// condition ? true : false
let taste = pizza === 'tasty' ? 'Yum' : 'Yuck';
console.log(taste);

/* EXERCISE 10 – Boolean gates */
// The && operator evaluates expressions from left to right 
// and returns the first falsy value it encounters.

// falsy values: falsy values include '' (empty strings), 0, null, 
// undefined, NaN, and false

// The || operator evaluates expressions from left to right and returns the first truthy value it encounters. 
// If all values are falsy, it returns the last value.

console.log('---------Exercise 10---------');

// 1. SET LANGUAGE

// Construct a single line of code that assigns a default value using the logical OR operator. 
// This line should match the logic of the following statement: 

// "LANG is equal to localLangConfig or the default value of English."

const localLangConfig = null;  // Change to 'es', 'fr', etc., or keep it null

// a. Create a variable called LANG
// b. Assign LANG the value of localLangConfig or 'en' as a default
const LANG = localLangConfig || 'en';

// Log the result
console.log('Language setting:', LANG);

// 2. SET WEBSITE THEME

const userSavedTheme = null; // Change to 'dark', 'contrast', etc., or keep it null

// a. Create a variable called USER_THEME
// b. Assign USER_THEME the value of userSavedTheme or 'light' as a default

const USER_THEME = userSavedTheme || 'light';

// Log the result
console.log('User theme setting:', USER_THEME);

/* EXERCISE 11 – Optional chaininig */
console.log('---------Exercise 11---------');

// Now check for `cat.age` on `adventurer`. See how it errors out? 
// Use optional chaining in a console.log that it returns undefined instead.

const adventurer = {
    name: 'Alice',
};
  
let cat = adventurer.cat?.age;

console.log(cat);
  









