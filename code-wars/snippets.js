
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
    console.log(separateWords.length);
    
    // assessing length of each words through loop inside the array
    for (let i = 0; i < separateWords.length; i++) {
      let wordLength = separateWords[i].length;
      
      // if above 5, reversing the word
      if (wordLength >= 5) {
        let word = separateWords[i].split("");
        word.reverse()
        let newWord = word.join("");
        console.log(newWord);
        outcome.splice(i, 0, newWord);
      } else {
        //outcome[i].push(separateWords[i]);
        outcome.splice(i, 0, separateWords[i])
        console.log(outcome);
      }
    }
    
    // joining back into a single string
    let finalString = outcome.join(" ");
    console.log(finalString);
    return finalString;
  }
  
  spinWords("Hey fellow warriors");




/* Complete the solution so that it returns true if the first argument(string)
 passed in ends with the 2nd argument (also a string).*/

console.log("================ CODE WARS ==============")

function solution(str, ending){
    // lengths of strings
    let x = str.length;
    let y = ending.length;

    // reverse and array the strings
    strArray = str.split("");
    endingArray = ending.split("");

    if (x >= y) {
      console.log(x, y);  
      for (let i = 0; i < y; i++) {

        // use reverse method
        if (strArray.reverse()[i] === endingArray.reverse()[i]) {
            console.log(strArray.reverse()[i]);
            console.log(endingArray.reverse()[i]);
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