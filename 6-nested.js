//**********************1)combinations****************************/
// //Write a function combinations that takes in an array of unique
// //elements, the function should return a 2D array representing all
// //possible combinations of 2 elements of the array.
// const combinations = (arr) => {
//   let pairs = [];

//   arr.forEach((ele1, idx1) => {
//     arr.forEach((ele2, idx2) => {
//       if (idx2 > idx1) {
//         pairs.push([ele1, ele2]);
//       }
//     });
//   });
//   return pairs;
// };

// console.log(combinations(["a", "b", "c"]));
// console.log(combinations([0, 1, 2, 3]));

//**********************2)opposite_count****************************/
// //Write a function opposite_count that takes in an array of unique
// //numbers. The function should return the number of pairs of
// //elements that sum to 0.
// const opposite_count = (nums) => {
//   let count = 0;

//   nums.forEach((num1, idx1) => {
//     nums.forEach((num2, idx2) => {
//       if (num1 + num2 == 0 && idx2 > idx1) {
//         count += 1;
//       }
//     });
//   });
//   return count;
// };

// console.log(opposite_count([2, 5, 11, -5, -2, 7]));
// console.log(opposite_count([21, -23, 24 - 12, 23]));

//**********************3)two_d_Sum****************************/
// //Write a function two_d_Sum that takes in a two dimensional array
// //and returns the sum of all elements in the array.
// const two_d_Sum = (arr) => {
//   let total = 0;
//   arr.forEach((subArray) => {
//     subArray.forEach((num) => {
//       total += num;
//     });
//   });
//   return total;
// };

// array_1 = [
//   [4, 5],
//   [1, 3, 7, 1],
// ];

// array_2 = [[3, 3], [2], [2, 5]];

// console.log(two_d_Sum(array_1));
// console.log(two_d_Sum(array_2));

//**********************4)two_d_translate****************************/
// //Write a function two_d_translate that takes in a 2 dimensional
// //array and translates it into a 1 dimensional array. You can assume
// //that the inner arrays always have 2 elements. See the examples.
// const two_d_translate = (arr) => {
//   let new_arr = [];

//   arr.forEach((subArray) => {
//     ele = subArray[0];
//     num = subArray[1];

//     for (let i = 0; i < num; i++) {
//       new_arr.push(ele);
//     }
//   });
//   return new_arr;
// };

// let arr_1 = [
//   ["boot", 3],
//   ["camp", 2],
//   ["program", 0],
// ];

// let arr_2 = [
//   ["red", 1],
//   ["blue", 4],
// ];

// console.log(two_d_translate(arr_1));
// console.log(two_d_translate(arr_2));

//**********************5)array_translate****************************/
// //Write a function array_translate that takes in an array whose
// //elements alternate between words and numbers. The function
// //should return a string where each word is repeated the number of
// //times that immediately follows in the array.
// const array_translate = (array) => {
//   let str = "";

//   let i = 0;
//   while (i < array.length) {
//     let ele = array[i];
//     let num = array[i + 1];

//     for (let j = 0; j < num; j++) {
//       str += ele;
//     }

//     i += 2;
//   }
//   return str;
// };

// console.log(array_translate(["Cat", 2, "Dog", 3, "Mouse", 1]));
// console.log(array_translate(["red", 3, "blue", 1]));

//**********************6)pig_latin_word****************************/
//Write a function pig_latin_word that takes in a word string and
//translates the word into pig latin.
//**************pig_latin 1****************/
// const pig_latin_word = (word) => {
//   let vowels = "aeiou";

//   if (vowels.includes(word[0])) {
//     return word + "yay";
//   }
//   for (let i = 0; i < word.length; i += 1) {
//     if (vowels.indexOf(word[i]) != -1) {
//       //means letter is a vowel
//       return word.slice(i) + word.slice(0, i) + "ay";
//     }
//   }
//   return word + "ay";
// };

//**************pig_latin 2****************/
// const pig_latin_word = (str) => {
//   var firstChar = str[0];
//   var vowels = /[aeiou]/gi;
//   var newStr = "";

//   if (!str.match(vowels)) {
//     return str;
//   }

//   if (firstChar.match(vowels)) {
//     newStr = str + "way";
//   } else {
//     var indexOfVowel = str.indexOf(str.match(vowels)[0]);
//     newStr = str.substr(indexOfVowel) + str.substr(0, indexOfVowel) + "ay";
//   }
//   return newStr;
// };

//**************pig_latin 3****************/
// const pig_latin_word = (str) => {
//   let vowels = "aeiou".split("");
//   for (let i = 0; i < str.length; i += 1) {
//     let letter = str[i];
//     if (vowels.indexOf(letter) != -1 && i === 0) {
//       return str + "yay";
//     }
//     if (vowels.indexOf(letter) != -1) {
//       return str.slice(i) + str.slice(0, i) + "ay";
//     }
//   }
//   return str + "ay";
// };

//**************pig_latin 4****************/
const pig_latin_word = (word) => {
  const firstVowel = word.match(/[aeiou]/);
  const firstPosition = word.indexOf(firstVowel);

  if (firstPosition > 0) {
    return word.slice(firstPosition) + word.slice(0, firstPosition) + "ay";
  }
  return word + "ay";
};

console.log(pig_latin_word("apple"));
console.log(pig_latin_word("eat"));
console.log(pig_latin_word("banna"));
console.log(pig_latin_word("trash"));
console.log(pig_latin_word("rhythm"));
