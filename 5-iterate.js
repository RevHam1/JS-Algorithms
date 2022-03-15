// //**********************NOTES****************************/
// // let names = ["Brian", "Abby", "David", "Ommi"];

// // names.forEach((item, index, array) => {
// //   if (item === "David") {
// //     item = item.toUpperCase();
// //   } else {
// //     item = item.toLowerCase();
// //   }
// //   console.log(index, item);
// // });

// // const sentence = "hello world";

// // let nums = [5, 7, 9];
// // [5, 7, 9].forEach((item, index, array) => {
// //   console.log(index, item);
// // });

// // for (const x of Array(5).keys()) {
// //   console.log(x, String.fromCharCode("5".charCodeAt(0) + x));
// // }

// // for (const char of sentence) {
// //   console.log(char);
// // }

// // const sentence = "hello world";

// // for (char of sentence) {
// //   concole.log(sentence[0])
// //   console.log(char.toUpperCase());
// // }

// // const fizz_buzz = (max) => {
// //     nums = [];
// //     i = 0;
// //     while (i < max) {
// //       if ((i % 4 == 0 || i % 6 == 0) && !(i % 4 == 0 && i % 6 == 0)) {
// //         nums.push(i);
// //       }
// //       i += 1;
// //     }
// //     return nums;
// //   };

// //   console.log(fizz_buzz(20));
// //   console.log(fizz_buzz(15));

// // **********************1)to_initials****************************/
// // Write a function to_initials that takes in a person's name string
// // and returns a string representing their initials.
// const to_initials = (name) => {
//   initials = "";
//   parts = name.split(" "); //split to an array of parts
//   parts.forEach((part, index, array) => {
//     initials += part[0]; //gets the first character of each part of the array string[0]
//   });
//   return initials;
// };

// console.log(to_initials("Kelvin Bridges"));
// console.log(to_initials("Michaela Yamamoto"));
// console.log(to_initials("Mary La Grange"));

// // **********************2)first_in_array****************************/
// //Write a function first_in_array that takes in an array and two
// //elements, the function should return the element that appears
// //earlier in the array.
// const first_in_array = (arr, el1, el2) => {
//   if (arr.indexOf(el1) < arr.indexOf(el2)) {
//     return el1;
//   } else {
//     return el2;
//   }
// };

// console.log(first_in_array(["a", "b", "c", "d"], "d", "b"));
// console.log(first_in_array(["cat", "bird", "dog", "mouse"], "dog", "mouse"));

// **********************3)abbreviate_sentence****************************/
//Write a function abbreviate_sentence that takes in a sentence
//string and returns a new sentence where every word longer than 4
//characters has all of it's vowels removed.
// const abbreviate_sentence = (sent) => {
//   words = sent.split(" ");
//   new_sentence = [];

//   words.forEach((word) => {
//     if (word.length > 4) {
//       //   new_word = remove_vowels(word);
//       new_word = word.replace(/[aeiouAEIOU]/g, "");
//       new_sentence.push(new_word);
//     } else {
//       new_sentence.push(word);
//     }
//   });
//   return new_sentence.join(" ");
// };

// const remove_vowels = (word) => {
//   // vowels = ["a", "e", "i", "o", "u"]
//   return word.replace(/[aeiouAEIOU]/g, "");
// };

// console.log(abbreviate_sentence("follow the yellow brick road"));
// console.log(abbreviate_sentence("what a wonderful life"));

// // **********************4)format_name****************************/
// //Write a function format_name that takes in a name string and
// //returns the name properly capitalized.
// const format_name = (str) => {
//   let parts = str.split(" ");
//   let new_parts = [];

//   parts.forEach((part) => {
//     word = part.toLowerCase();
//     capitalize = word.charAt(0).toUpperCase() + word.slice(1);
//     new_parts.push(capitalize);
//   });
//   return new_parts.join(" ");
// };

// console.log(format_name("chase WILSON"));
// console.log(format_name("brian CrAwFoRd scoTT"));

// // **********************5)is_valid_name****************************/
// //Write a function is_valid_name that takes in a string and returns
// // a boolean indicating whether or not it is a valid name.
// const is_valid_name = (str) => {
//   let parts = str.split(" ");
//   if (parts.length < 2) {
//     return false;
//   }
//   parts.forEach((part) => {
//     if (!is_capitalized(part)) {
//       return false;
//     }
//   });
//   return true;
// };

// const is_capitalized = (word) => {
//   if (
//     word.charAt(0) == word.charAt(0).toUpperCase() &&
//     word.slice(1) == word.slice(1).toLowerCase()
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(is_valid_name("Kush Patel"));
// console.log(is_valid_name("Daniel"));
// console.log(is_valid_name("Robert Downey Jr"));
// console.log(is_valid_name("ROBERT DOWNEY JR"));

// // console.log(is_capitalized("Robert Downey Jr"));
// // console.log(is_capitalized("ROBERT DOWNEY JR"));

// // **********************6)is_valid_email****************************/
// //Write a function is_valid_email that takes in a string and returns
// //a boolean indicating whether or not it is a valid email address.
// const is_valid_email = (str) => {
//   parts = str.split("@");

//   if (parts.length != 2) {
//     return false;
//   }
//   first = parts[0];
//   second = parts[1];
//   alpha = "abcdefghijklmnopqrtuvwxyz";

//   for (i = 0; i < first.length; i++) {
//     if (!alpha.includes(first[i])) {
//       return false;
//     }
//   }

//   if (second.split(".").length == 2) {
//     return true;
//   } else {
//     return false;
//   }
// };

// // console.log(is_valid_email("123@xy45.6"));
// console.log(is_valid_email("abc@xy.z"));
// console.log(is_valid_email("jdoe@gmail.com"));
// console.log(is_valid_email("jdoe@g@mail.com"));
// console.log(is_valid_email("jdoe42@gmail.com"));
// console.log(is_valid_email("jdoegmail.com"));
// console.log(is_valid_email("az@email"));

// // **********************7)reverse_words****************************/
// //Write a function reverse_words that takes in a sentence string and
// //returns the sentence with the order of the characters in each word
// //reversed. Note that we need to reverse the order of characters in the
// //words, do not reverse the order of words in the sentence.
// const reverse_words = (sentence) => {
//   let words = sentence.split(" ");
//   let new_words = [];
//   words.forEach((word) => {
//     let splitWord = word.split("");
//     let reverseArray = splitWord.reverse();
//     let joinArray = reverseArray.join("");
//     new_words.push(joinArray);
//     new_sentence = new_words.join(" ");
//   });
//   return new_sentence;
// };

// console.log(reverse_words("keep coding"));
// console.log(reverse_words("simplicity is prerequisite for reliability"));

// //Several ways to revere a string
// //https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/

function reverseString(str) {
  const backwards = [];
  for (let i = str.length - 1; i >= 0; i--) {
    backwards.push(str[i]);
  }
  return backwards.join("");
}
console.log(reverseString("Hi my name is drew"));

// const reverseString2 = (str) => {
//   return str.split("").reverse().join("");
// };
// console.log(reverseString2("hello"));

// //**********************8)rotate_array****************************/
// //Write a function rotate_array that takes in an array and a number.
// //The function should return the array after rotating the elements the
// //specified number of times. A single rotation takes the last element of
// //the array and moves it to the front.
// const rotate_array = (arr, num) => {
//   for (let i = 0; i < num; i++) {
//     arr.unshift(arr.pop());
//   }
//   return arr;
// };

// console.log(rotate_array(["Matt", "Danny", "Mashu", "Matthias"], 1));
// console.log(rotate_array(["a", "b", "c", "d"], 2));
