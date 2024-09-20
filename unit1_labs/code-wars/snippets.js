
console.log("================ CODE WARS ==============")

/*Write a function that takes in a string of one or 
more words, and returns the same string, but with 
all words that have five or more letters reversed 
(Just like the name of this Kata). 
Strings passed in will consist of only letters and spaces. 
Spaces will be included only when more than one word is present. */

function spinWords(string){
    //TODO Have fun :)
    // intiializing output array
    let outcome = [];
    
    // separating words
    const separateWords = string.split(" ");
    
    // assessing length of each words through loop inside the array
    for (let i = 0; i < separateWords.length; i++) {
      let wordLength = separateWords[i].length;
      
      // if above 5, reversing the word
      if (wordLength >= 5) {
        let word = separateWords[i].split("");
        word.reverse()
        let newWord = word.join("");
        outcome.splice(i, 0, newWord);
      } else {
        //outcome[i].push(separateWords[i]);
        outcome.splice(i, 0, separateWords[i])
      }
    }
    
    // joining back into a single string
    let finalString = outcome.join(" ");
    return finalString;
  }
  
  spinWords("Hey fellow warriors");




/* Complete the solution so that it returns true if the first argument(string)
 passed in ends with the 2nd argument (also a string).*/

function solution(str, ending){
    // lengths of strings
    let x = str.length;
    let y = ending.length;

    // reverse and array the strings
    strArray = str.split("");
    endingArray = ending.split("");

    if (x >= y) { 
      for (let i = 0; i < y; i++) {

        // use reverse method
        if (strArray.reverse()[i] === endingArray.reverse()[i]) {
        } else {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  }
  
  console.log(solution('abc', 'bc')); // returns true
  console.log(solution('abc', 'd')); // returns false


/* Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

Note: The function accepts an integer and returns an integer.

Happy Coding! */

function squareDigits(num){

    const squaredArray = []

    const numArray = num.toString().split("");
    
    if (Number.isInteger(num)) {
      
      numArray.forEach((number) => {
        let newNumber = number ** 2;
        squaredArray.push(newNumber);
      })
      
      let result = squaredArray.join("");
      
      return Number(result);
      
    } else {
      
      return 0;
      
    }
  }

console.log(squareDigits(9119));





// Simple Fun #352: Reagent Formula

function isValid(formula){
  //coding and coding..
  
  /* rules:
  material1 and material2 cannot be selected at the same time
  material3 and material4 cannot be selected at the same time
  material5 and material6 must be selected at the same time
  material7 or  material8 must be selected(at least one, or both)
  */
  
  // material1 and material2 cannot be selected at the same time
  if (formula.includes(1) && formula.includes(2)) {
    
    return false;
    
  } else {
    
    // material3 and material4 cannot be selected at the same time
    if (formula.includes(3) && formula.includes(4)) {
      
      return false;
      
    } else {
      
      // material5 and material6 must be selected at the same time
      if (formula.includes(5) && formula.includes(6)) {

        // material7 or  material8 must be selected(at least one, or both)
        if (formula.includes(7) || formula.includes(8)) {
          
          return true;
            
        } else {
          
          return false;
          
        }
          
      } else if (!formula.includes(5) && !formula.includes(6)) {

        // material7 or  material8 must be selected(at least one, or both)
        if (formula.includes(7) || formula.includes(8)) {
          
          return true;
            
        } else {
          
          return false;
          
        }

      } else {
          
          return false;
          
      }
      
    }
    
  }
  
}




// array Diff 
/* INSTRUCTIONS
Your goal in this kata is to implement a difference function, 
which subtracts one list from another and returns the result.

It should remove all values from list a, which are present 
in list b keeping their order.

arrayDiff([1,2],[1]) == [2]

If a value is present in b, all of its occurrences must be 
removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
 */
console.log("====================CODE WARS: ARRAY DIFF======================");

function arrayDiff(a, b) {
  
  // new array initialize
  const result = [];

  // desired length
  let finalLength = a.length // maximum possible length
  
  // nested functions
  // cycle through the first array
  for (let i = 0; i < a.length; i++) {
    
    if (b.length === 0) {
      
      result.push(a[i]);
      
    } else if (b.includes(a[i])) {

      // if subset b includes a, remove it from result
      console.log(`${a[i]} is included in ${b}, it is removed`)

    } else {

      result.push(a[i]);

    }

  }

  console.log("result is ", result);
  return result;
  
}

console.log(arrayDiff([1,2,2,2,3],[2]));
console.log(arrayDiff([1,2,2],[]));
console.log(arrayDiff([1,2,3],[1,2]));


// digital root
/* INSTRUCTIONS
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more 
than one digit, continue reducing in this way until a single-digit 
number is produced. The input will be a non-negative integer.

    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

 */

console.log("====================CODE WARS: DIGITAL ROOT======================");

function digitalRoot(n) {
  // define final sum
  let finalSum = 0;

  // break the n down to digits array
  const nArray = n.toString().split('');

  // create loop for array adding all to final sum
  nArray.forEach((nu) => {
    finalSum += +nu;
  })

  // break down the final sum into an array
  const newArray = finalSum.toString().split('');

  // if length of the final array is larger than 1
  if (newArray.length > 1) {

    // call the same function – must return for recursive function
    const x = finalSum
    return digitalRoot(x);

  } else if (newArray.length === 1) {

    return finalSum;

  }
}

digitalRoot(908);
console.log(digitalRoot(25111996));