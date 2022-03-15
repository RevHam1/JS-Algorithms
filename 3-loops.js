// // **********************1)count_e****************************/
// // Write a function count_e(word) that takes in a string word and returns the
// // number of e's in the word
// const count_e = (word) => {
//   count = 0;

//   i = 0;
//   while (i < word.length) {
//     char = word[i];
//     if (char == "e") {
//       count += 1;
//     }
//     i += 1;
//   }
//   return count;
// };

// console.log(count_e("movie"));
// console.log(count_e("fruit"));
// console.log(count_e("excellent"));

// // **********************2)count_a****************************/
// //Write a function count_a(word) that takes in a string word and returns the number
// //of a's in the word. The function should count both lowercase (a) and uppercase (A)
// const count_a = (word) => {
//   count = 0;

//   i = 0;
//   while (i < word.length) {
//     char = word[i];
//     if (char == "a" || char == "A") {
//       count += 1;
//     }
//     i += 1;
//   }
//   return count;
// };

// console.log(count_a("application"));
// console.log(count_a("bike"));
// console.log(count_a("Arthur"));
// console.log(count_a("Aardvark"));

// // **********************3)count_vowels****************************/
// // Write a function, count_vowels(word), that takes in a string
// // word and returns the number of vowels in the word. Vowels are
// // the letters a, e, i, o, u.
// const count_vowels = (word) => {
//   count = 0;

//   i = 0;
//   while (i < word.length) {
//     char = word[i];
//     if (
//       char == "a" ||
//       char == "e" ||
//       char == "i" ||
//       char == "o" ||
//       char == "u"
//     ) {
//       count += 1;
//     }
//     i += 1;
//   }
//   return count;
// };

// console.log(count_vowels("bootcamp"));
// console.log(count_vowels("apple"));
// console.log(count_vowels("pizza"));

// //**********************4)sum_nums****************************/
// //Write a function sum_nums(max) that takes in a number max and returns the sum
// //of all numbers from 1 up to and including max.
// const sum_nums = (max) => {
//   sum = 0;

//   i = 1;
//   while (i <= max) {
//     sum += i;
//     i += 1;
//   }
//   return sum;
// };

// console.log(sum_nums(4));
// console.log(sum_nums(5));

// // **********************5)factorial****************************/
// // Write a function factorial(num) that takes in a number num and returns the product
// // of all numbers from 1 up to and including num.
// const factorial = (num) => {
//   product = 1;

//   i = 1;
//   while (i <= num) {
//     product *= i;
//     i += 1;
//   }
//   return product;
// };

// console.log(factorial(3));
// console.log(factorial(5));

// // **********************6)reverse****************************/
// // Write a function reverse(word) that takes in a string word and
// // returns the word with its letters in reverse order.
// const reverse = (word) => {
//   reversed_str = "";
//   i = 0;
//   while (i < word.length) {
//     char = word[i];
//     reversed_str = char + reversed_str;
//     i += 1;
//   }
//   return reversed_str;
// };

// console.log(reverse("cat"));
// console.log(reverse("programming"));
// console.log(reverse("bootcamp"));

// // **********************7)is_palindrome****************************/
// // Write a function is_palindrome(word) that takes in a string word and returns
// // the true if the word is a palindrome, false otherwise. A palindrome is a word
// // that is spelled the same forwards and backwards.
// const is_palindrome = (word) => {
//   reversed = "";
//   i = 0;
//   while (i < word.length) {
//     reversed = word[i] + reversed;
//     i += 1;
//   }
//   if (word == reversed) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(is_palindrome("racecar"));
// console.log(is_palindrome("kayak"));
// console.log(is_palindrome("bootcamp"));

// //**********************8)For Loop****************************/
// for (var i = 1; i <= 3; i++) {
//   console.log(i);
// }

// //**********************9)While Loop****************************/
// i = 0;
// while (i <= 3) {
//   console.log(i);

//   i += 1;
// }
