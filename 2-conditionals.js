// // **********************1)is_div_by_5****************************/
// // Write a function is_div_by_5(number) that takes in a number and returns
// // the boolean true if the given number is divisible by 5, false otherwise
// const is_div_by_5 = (number) => {
//   if (number % 5 == 0) return true;
//   else return false;
// };

// console.log(is_div_by_5(40));
// console.log(is_div_by_5(42));

// // **********************2)either_only****************************/
// //Write a function either_only(number) that takes in a number and returns true if the number
// //is divisible by either 3 or 5, but not both. The function should return false otherwise.
// const either_only = (number) => {
//   if (
//     (number % 3 == 0 || number % 5 == 0) &&
//     !(number % 3 == 0 && number % 5 == 0)
//   )
//     return true;
//   else return false;
// };

// console.log(either_only(9));
// console.log(either_only(15));

// // **********************3)larger_number****************************/
// //Write a function larger_number(num1, num2) that takes in two numbers and
// //returns the larger of the two numbers.
// const larger_number = (num1, num2) => {
//   if (num1 > num2) return num1;
//   else return num2;
// };

// console.log(larger_number(42, 28));
// console.log(larger_number(99, 100));

// //Write a function longer_string(str1, str2) that takes in two
// //strings and returns the longer of the two strings. In the case of a tie,
// //the function should return the first string.
// const longer_string = (str1, str2) => {
//   if (str1.length >= str2.length) return str1;
//   else return str2;
// };

// console.log(longer_string("app", "academy"));
// console.log(longer_string("summer", "fall"));

// // **********************4)number_check****************************/
// //Write a function number_check(num) that takes in a number and returns a string.
// //The function should return the string 'positive' if the num is positive, 'negative' if
// //the num is negative, and 'zero' if the num is zero.
// const number_check = (num) => {
//   if (num > 0) return "positive";
//   else if (num < 0) return "negative";
//   else return "zero";
// };

// console.log(number_check(5));
// console.log(number_check(-2));
// console.log(number_check(0));

// **********************5)word_check****************************/
//Write a function word_check(word) that takes in a word and
//returns a string. The function should return the string "long" if the
//word is longer than 6 characters, "short" if it is less than 6 characters,
//and "medium" if it is exactly 6 characters long.
const word_check = (word) => {
  if (word.length > 6) return "long";
  else if (word.length < 6) return "short";
  else return "medium";
};

console.log(word_check("contraption"));
console.log(word_check("fruit"));
console.log(word_check("puzzle"));
