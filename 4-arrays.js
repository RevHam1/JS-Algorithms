// // **********************1)doubler****************************/
// //Write a function doubler(numbers) that takes an array of numbers and returns
// //a new array where every element of the original array is multiplied by 2.
// const doubler = (numbers) => {
//   doubled_nums = [];
//   i = 0;
//   while (i < numbers.length) {
//     doubled_nums.push(2 * numbers[i]);
//     i += 1;
//   }
//   return doubled_nums;
// };

// console.log(doubler([1, 2, 3, 4]));
// console.log(doubler([7, 1, 8]));

// // **********************2)yell****************************/
// // Write a function yell(words) that takes in an array of words and
// // returns a new array where every word from the original array has an
// // exclamation point after it.
// const yell = (words) => {
//   yelled = [];
//   i = 0;
//   while (i < words.length) {
//     yelled.push(words[i] + "!");
//     i += 1;
//   }
//   return yelled;
// };

// console.log(yell(["hello", "world"]));
// console.log(yell(["code", "is", "cool"]));

// // **********************3)element_times_index****************************/
// // Write a functions element_times_index(nums) that takes in an
// // array of numbers and returns a new array containing every number
// // of the original array multiplied with its index.
// const element_times_index = (nums) => {
//   new_nums = [];
//   i = 0;
//   while (i < nums.length) {
//     new_nums.push(nums[i] * i);
//     i += 1;
//   }
//   return new_nums;
// };

// console.log(element_times_index([4, 7, 6, 5]));
// console.log(element_times_index([1, 1, 1, 1, 1, 1]));

// // **********************4)even_nums****************************/
// // Write a function even_nums(max) that takes in a number max and
// // returns an array containing all even numbers from 0 to max
// const even_nums = (max) => {
//   evens = [];
//   i = 0;
//   while (i <= max) {
//     if (i % 2 == 0) {
//       evens.push(i);
//     }
//     i += 1;
//   }
//   return evens;
// };

// console.log(even_nums(10));
// console.log(even_nums(5));

// // **********************5)range****************************/
// //Write a function range(min, max) that takes in two numbers min
// //and max. The function should return an array containing all numbers
// //from min to max inclusive.
// const range = (min, max) => {
//   array = [];
//   i = min;
//   while (i <= max) {
//     array.push(i);
//     i += 1;
//   }
//   return array;
// };

// console.log(range(2, 7));
// console.log(range(13, 20));

// // **********************6)odd_range****************************/
// //Write a function odd_range(min, max) that takes in two numbers min and max. The
// //function should return an array containing all odd numbers from min to max (inclusive).
// const odd_range = (min, max) => {
//   odd = [];
//   i = min;
//   while (i <= max) {
//     if (i % 2 == 1) {
//       odd.push(i);
//     }
//     i += 1;
//   }
//   return odd;
// };

// console.log(odd_range(11, 18));
// console.log(odd_range(3, 7));

// // **********************7)reverse_range****************************/
// //Write a function reverse_range(min, max) that takes in two
// //numbers min and max. The function should return an array
// //containing all numbers from min to max in reverse order. The min
// //and max should be excluded from the array
// const reverse_range = (min, max) => {
//   reverse = [];
//   i = max - 1;
//   while (i > min) {
//     reverse.push(i);
//     i -= 1;
//   }
//   return reverse;
// };

// console.log(reverse_range(10, 17));
// console.log(reverse_range(1, 7));

// // **********************8)first_half****************************/
// //Write a function first_half(array) that takes in an array and
// //returns a new array containing the first half of the elements in the
// //array. If there is an odd number of elements, return the first half
// //including the middle element.
// const first_half = (array) => {
//   half = [];
//   i = 0;
//   while (i < array.length / 2) {
//     half.push(array[i]);
//     i += 1;
//   }
//   return half;
// };

// console.log(first_half(["Brian", "Abby", "David", "Ommi"]));
// console.log(first_half(["a", "b", "c", "d", "e"]));

// // **********************9)factors_of****************************/
// // Write a function factors_of(num) that takes in a num and returns
// // an array of all positive numbers less than or equal to num that can
// // divide num.
// const factors_of = (num) => {
//   factors = [];
//   i = 1;
//   while (i <= num) {
//     if (num % i == 0) {
//       factors.push(i);
//     }
//     i += 1;
//   }
//   return factors;
// };

// console.log(factors_of(3));
// console.log(factors_of(4));
// console.log(factors_of(9));
// console.log(factors_of(16));

// // **********************10)select_odds****************************/
// //Write a function select_odds(numbers) that takes in an array
// //of numbers and returns a new array containing the odd numbers
// //of the original array.
// const select_odds = (numbers) => {
//   odds = [];
//   i = 0;
//   while (i <= numbers.length) {
//     if (numbers[i] % 2 == 1) {
//       odds.push(numbers[i]);
//     }
//     i += 1;
//   }
//   return odds;
// };

// console.log(select_odds([13, 4, 3, 7, 6, 11]));
// console.log(select_odds([2, 4, 6]));

// // **********************11)select_long_words****************************/
// //Write a function select_long_words(words) that takes in an
// //array of words and returns a new array containing all of the words
// //of the original array that are longer than 4 characters.
// const select_long_words = (words) => {
//   long_words = [];
//   i = 0;
//   while (i < words.length) {
//     word = words[i];
//     if (word.length > 4) {
//       long_words.push(word);
//     }
//     i += 1;
//   }
//   return long_words;
// };

// console.log(
//   select_long_words(["what", "are", "we", "eating", "for", "dinner"])
// );
// console.log(select_long_words(["keep", "coding"]));

// // **********************12)sum_elements****************************/
// // Write a function sum_elements(arr1, arr2) that takes in two
// // arrays. The function should return a new array containing the results
// // of adding together corresponding elements of the original arrays.
// // You can assume the arrays have the same length.
// const sum_elements = (arr1, arr2) => {
//   new_elements = [];
//   i = 0;
//   while (i < arr1.length) {
//     new_ele = arr1[i] + arr2[i];
//     new_elements.push(new_ele);
//     i += 1;
//   }
//   return new_elements;
// };

// console.log(sum_elements([7, 4, 4], [3, 2, 11]));
// console.log(sum_elements(["cat", "pizza", "boot"], ["dog", "pie", "camp"]));

// // **********************13)fizz_buzz****************************/
// // Write a function fizz_buzz(max) that takes in a number max and
// // returns an array containing all numbers greater than 0 and less than
// // max that are divisible by either 4 or 6, but not both.
// const fizz_buzz = (max) => {
//   nums = [];
//   i = 0;
//   while (i < max) {
//     if ((i % 4 == 0 || i % 6 == 0) && !(i % 4 == 0 && i % 6 == 0)) {
//       nums.push(i);
//     }
//     i += 1;
//   }
//   return nums;
// };

// console.log(fizz_buzz(20));
// console.log(fizz_buzz(15));

// // **********************14)MERGE SORTED ARRAY****************************/
function mergeSortedArrays(array1, array2) {
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  //We should actually move these 2 if statements to line 2 so that we do the checks before we do assignments in line 3 and 4!
  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }

  while (array1Item || array2Item) {
    if (array2Item === undefined || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }
  return mergedArray;
}

console.log(mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30]));

// // **********************15)CREATE AN ARRAY****************************/
// class MyArray {
//   constructor() {
//     this.length = 0;
//     this.data = {};
//   }
//   get(index) {
//     return this.data[index];
//   }
//   size() {
//     return this.length;
//   }
//   push(item) {
//     this.data[this.length] = item;
//     this.length++;
//     return this.length;
//   }
//   pop() {
//     const lastItem = this.data[this.length - 1];
//     delete this.data[this.length - 1];
//     this.length--;
//     return lastItem;
//   }
//   delete(index) {
//     const item = this.data[index];
//     this.shiftItems(index);
//   }
//   shiftItems(index) {
//     for (let i = index; i < this.length - 1; i++) {
//       this.data[i] = this.data[i + 1];
//     }
//     delete this.data[this.length - 1];
//     this.length--;
//   }
//   length() {
//     return this.length;
//   }
// }

// const newArray = new MyArray();
// newArray.push("Hi");
// newArray.push("there");
// newArray.push("friend");
// newArray.push("lover");
// console.log(newArray);

// // newArray.pop();
// // newArray.delete(1);
// console.log(newArray);

// console.log(newArray.get(2));
// console.log(newArray.size());
