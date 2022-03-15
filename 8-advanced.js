//**********************1)map_by_name****************************/
//Write a function map_by_name that takes in an array of objects and
//returns a new array containing the names of each objects.
//******A) Pets pets.map below works; individual map******/

// const pets = [
//   { type: "dog", name: "Rolo" },
//   { type: "cat", name: "Sunny" },
//   { type: "rat", name: "Saki" },
//   { type: "dog", name: "Finn" },
//   { type: "cat", name: "Buffy" },
// ];

// const map_by_pets = pets.map((item, index, array) => {
//   return item.name;
// });

// console.log(map_by_pets);

//******B) Countries countries.map below works; individual map******/
// const countries = [
//   { name: "Japan", continent: "Asia" },
//   { name: "Hungary", continent: "Europe" },
//   { name: "Kenya", continent: "Africa" },
// ];

// const map_by_name = countries.map((item, index, array) => {
//   return item.name;
// });

// console.log(map_by_name);

//**C) Using a while loop works with a general function; have to push into a new array**/
// const map_by_name = (arr) => {
//     let by_name = [];
//     let i = 0;
//     while (i < arr.length) {
//       by_name.push(arr[i].name);
//       i += 1;
//     }
//     return by_name;
//   };

//**D) Arr arr.map below works with a general function; have to push into a new array**/
// const map_by_name = (arr) => {
//   let by_name = [];

//   arr.map((object, index, arr) => {
//     by_name.push(object.name);
//   });
//   return by_name;
// };

// const pets = [
//   { type: "dog", name: "Rolo" },
//   { type: "cat", name: "Sunny" },
//   { type: "rat", name: "Saki" },
//   { type: "dog", name: "Finn" },
//   { type: "cat", name: "Buffy" },
// ];

// const countries = [
//   { name: "Japan", continent: "Asia" },
//   { name: "Hungary", continent: "Europe" },
//   { name: "Kenya", continent: "Africa" },
// ];

// console.log(map_by_name(pets));
// console.log(map_by_name(countries));

//**********************2)map_by_key****************************/
// //Write a function map_by_key that takes in an array of hashes and
// //a key string. The function should returns a new array containing
// //the values from each hash for the given key.

// const map_by_key = (arr, key) => {
//   let by_key = [];

//   arr.map((object, index, arr) => {
//     by_key.push(object[key]); //must use [] not .
//   });
//   return by_key;
// };

// const locations = [
//   { city: "New York City", state: "New York", coast: "East" },
//   { city: "San Francisco", state: "California", coast: "West" },
//   { city: "Portland", state: "Oregon", coast: "West" },
// ];

// console.log(map_by_key(locations, "state"));
// console.log(map_by_key(locations, "city"));

//**********************3)yell_sentence****************************/
// //Write a function yell_sentence that takes in a sentence string and
// //returns a new sentence where every word is yelled. See the examples.
// //Use map to solve this.

// const yell_sentence = (sent) => {
//   let words = sent.split(" ");
//   let new_sentence = "";

//   words.map((word) => {
//     new_sentence += word.toUpperCase() + "! ";
//   });
//   return new_sentence;
// };

// console.log(yell_sentence("I have a good feeling about this"));
// console.log(yell_sentence("Use map to solve this"));

//**********************4)whisper_words****************************/
// //Write a function whisper_words that takes in an array of words
// //and returns a new array containing a whispered version of each word.
// //See the examples. Solve this using map :).

// const whisper_words = (arr_words) => {
//   let new_arr = [];

//   arr_words.map((word) => {
//     new_arr.push(word.toLowerCase() + "... ");
//   });
//   return new_arr;
// };

// console.log(whisper_words(["KEEP", "The", "NOISE", "down"]));

//**********************5)o_words****************************/
// //Write a function o_words that takes in a sentence string and returns
// //an array of the words that contain an "o". Use select in your solution!

// const o_words = (sentence) => {
//   //   let words = sentence.split(" ");
//   let new_arr = [];

//   sentence.split(" ").map((word) => {
//     if (word.includes("o")) {
//       new_arr.push(word);
//     }
//   });
//   return new_arr;
// };

// console.log(o_words("How did you do that?"));

//**********************6)last_index****************************/
// //Write a function last_index that takes in a string and a character.
// //The function should return the last index where the character can be
// //found in the string.

// const last_index = (str, char) => {
//   i = str.length - 1;
//   while (i >= 0) {
//     if (str[i] == char) {
//       return i;
//     }
//     i -= 1;
//   }
// };

// console.log(last_index("abca", "a"));
// console.log(last_index("mississipi", "i"));
// console.log(last_index("octagon", "o"));
// console.log(last_index("programming", "m"));

//**********************7)most_vowels???****************************/
// //Write a function most_vowels that takes in a sentence string and
// //returns the word of the sentence that contains the most vowels.

// const most_vowels = (sentence) => {
//   let counts = {};

//   //   person.nationality = "English";
//   sentence.split(" ").forEach((word) => {
//     counts[word] = vowel_count(word);
//     //NOTE: it is a bit complex to select the highest value in an object in javascript
//   });
//   return counts;
// };

// const vowel_count = (word) => {
//   let count = 0;
//   let vowels = "aeiou";

//   i = 0;
//   while (i < word.length) {
//     if (vowels.includes(word[i])) {
//       count += 1;
//     }
//     i += 1;
//   }
//   return count;
// };

// console.log(most_vowels("what a wonderful life"));

//**********************8)prime****************************/
// //Write a function prime? that takes in a number and returns a
// //boolean, indicating whether the number is prime. A prime number
// //is only divisible by 1 and itself.

// const prime = (num) => {
//   if (num === 2) {
//     return true;
//   }
//   if (num < 2 || !(num % 2)) {
//     return false;
//   }

//   for (i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(prime(2));
// console.log(prime(5));
// console.log(prime(11));
// console.log(prime(4));
// console.log(prime(9));
// console.log(prime(-5));

//**********************9)pick_primes****************************/
// //Write a function pick_primes that takes in an array of numbers and
// //returns a new array containing only the prime numbers.

// const pick_primes = (numbers) => {
//   let array = [];
//   numbers.forEach((number) => {
//     if (prime(number)) {
//       array.push(number);
//     }
//   });
//   return array;
// };

// const prime = (num) => {
//   if (num === 2) {
//     return true;
//   }
//   if (num < 2 || !(num % 2)) {
//     return false;
//   }

//   for (i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(pick_primes([2, 3, 4, 5, 6]));
// console.log(pick_primes([101, 20, 103, 2017]));

//**********************10)prime_factors???****************************/
// //Write a function prime_factors that takes in a number and returns
// //an array containing all of the prime factors of the given number.

// const prime_factors = (num) => {
//   let prime_facts = [];

//   for (i = 1; i <= num; i++) {
//     if (num % i === 0 && prime(i)) {
//       prime_facts.push(i);
//       //   setImmediate(prime(i))
//     }
//   }
//   return prime_facts;
// };

// const prime = (num) => {
//   if (num === 2) {
//     return true;
//   }
//   if (num < 2 || !(num % 2)) {
//     return false;
//   }

//   for (i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(prime_factors(24)); //only works with 24; other numbers case memory leak
// // console.log(prime_factors(15));
// // console.log(prime_factors(60));

//**********************11)greatest_factor_array****************************/
//Write a function greatest_factor_array that takes in an array
//of numbers and returns a new array where every even number is
//replaced with it's greatest factor. A greatest factor is the largest
//number that divides another with no remainder. For example the
//greatest factor of 16 is 8. (For the purpose of this problem we won't
//say the greatest factor of 16 is 16, because that would be too easy, ha

// const greatest_factor_array = (arr) => {
//   let new_arr = [];

//   arr.map((num) => {
//     if (num % 2 == 0) {
//       new_arr.push(greatest_factor(num));
//     } else {
//       new_arr.push(num);
//     }
//   });
//   return new_arr;
// };

// const greatest_factor = (num) => {
//   //reverse loop below
//   for (var i = num - 1; i >= 0; i--) {
//     if (num % i == 0) {
//       return i;
//     }
//   }
// };

// console.log(greatest_factor_array([16, 7, 9, 14]));
// console.log(greatest_factor_array([30, 3, 24, 21, 10]));

//**********************12)perfect_square****************************/
// //Write a function perfect_square? that takes in a number and returns a
// //boolean indicating whether it is a perfect square. A perfect square is a number
// //that results from multiplying a number by itself. For example, 9 is a perfect
// //square because 3 3 = 9, 25 is a perfect square because 5 5 = 25.

// const perfect_square = (num) => {
//   for (i = 1; i <= num; i++) {
//     if (i * i === num) {
//       return true;
//     }
//   }
//   return false;
// };

// console.log(perfect_square(5));
// console.log(perfect_square(12));
// console.log(perfect_square(30));
// console.log(perfect_square(9));
// console.log(perfect_square(25));

//**********************13)triple_sequence****************************/
// //Write a function triple_sequence that takes in two numbers, start and length.
// //The function should return an array representing a sequence that begins with start
// //and is length elements long. In the sequence, every element should be 3 times the
// //previous element. Assume that the length is at least 1.

// const triple_sequence = (start, length) => {
//   let seq = [start];

//   while (seq.length < length) {
//     seq.push(seq[seq.length - 1] * 3);
//   }
//   return seq;
// };

// console.log(triple_sequence(2, 4));
// console.log(triple_sequence(4, 5));

//**********************14)summation_sequence****************************/
// //A number's summation is the sum of all positive numbers less than
// //or equal to the number. For example: the summation of 3 is 6 because
// //1 + 2 + 3 = 6, the summation of 6 is 21 because 1 + 2 + 3 + 4 + 5 + 6 = 21.
// //Write a function summation_sequence that takes in a two numbers:
// //start and length. The function should return an array containing
// //length total elements. The first number of the sequence should be
// //the start number. At any point, to generate the next element of the
// //sequence we take the summation of the previous element. You can
// //assume that length is not zero.

// const summation = (n) => {
//   let sum = 0;
//   for (i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// };

// const summation_sequence = (start, length) => {
//   let seq = [start];

//   while (seq.length < length) {
//     let last_ele = seq[seq.length - 1];
//     let next_ele = summation(last_ele);
//     seq.push(next_ele);
//   }
//   return seq;
// };

// console.log(summation_sequence(3, 4));
// console.log(summation_sequence(5, 3));

//**********************15)fibonacci****************************/
//The fibonacci sequence is a sequence of numbers whose first and
//second elements are 1. To generate further elements of the sequence
//we take the sum of the previous two elements. For example the first
//6 fibonacci numbers are 1, 1, 2, 3, 5, 8. Write a function fibonacci
//that takes in a number length and returns the fibonacci sequence up to
//the given length.

// const fibonacci = (length) => {
//   if (length == 0) {
//     return [];
//   } else if (length == 1) {
//     return [1];
//   }

//   let seq = [1, 1];
//   while (seq.length < length) {
//     let last = seq[seq.length - 1];
//     let second_to_last = seq[seq.length - 2];
//     next_ele = last + second_to_last;
//     seq.push(next_ele);
//   }
//   return seq;
// };

// console.log(fibonacci(0));
// console.log(fibonacci(1));
// console.log(fibonacci(6));
// console.log(fibonacci(8));

//**********************16)caesar_cipher****************************/
//Write a function caesar_cipher that takes in a string and a number.
//The function should return a new string where every character of the
//original is shifted num characters in the alphabet.

// const caesar_cipher = (str, num) => {
//   let alphabet = "abcdefghijklmnopqrstuvwxyz";
//   let new_str = "";

//   for (i = 0; i < str.length; i++) {
//     let old_index = alphabet.indexOf(str[i]);
//     let new_index = old_index + num;
//     let new_char = alphabet[new_index % 26];
//     new_str = new_str += new_char;
//   }
//   //   console.log(new_str);
//   return new_str;
// };

// console.log(caesar_cipher("apple", 1));
// console.log(caesar_cipher("bootcamp", 2));
// console.log(caesar_cipher("zebra", 4));

//**********************17)vowel_cipher****************************/
// //Write a function vowel_cipher that takes in a string and returns a
// //new string where every vowel becomes the next vowel in the alphabet.

// const vowel_cipher = (string) => {
//   let new_array = [];
//   let vowels = "aeiou";

//   string.split("").map((char) => {
//     if (vowels.includes(char)) {
//       let old_index = vowels.indexOf(char);
//       let new_index = (old_index + 1) % vowels.length;
//       new_array.push(vowels[new_index]);
//     } else {
//       new_array.push(char);
//     }
//   });
//   return new_array.join("");
// };

// console.log(vowel_cipher("bootcamp"));
// console.log(vowel_cipher("paper cup"));

//**********************18)double_letter_count****************************/
// //Write a function that takes in a string and returns the number of times
// //that the same letter repeats twice in a row.

// const double_letter_count = (str) => {
//   let count = 0;

//   for (i = 0; i < str.length; i++) {
//     if (str[i] == str[i + 1]) {
//       count += 1;
//     }
//   }
//   return count;
// };

// console.log(double_letter_count("the jeep rolled down the hill"));
// console.log(double_letter_count("bootcamp"));

//**********************19)adjacent_sum****************************/
// //Write a function adjacent_sum that takes in an array of numbers
// //and returns a new array containing the sums of adjacent numbers
// //in the original array. See the examples.

// const adjacent_sum = (arr) => {
//   new_arr = [];

//   //**************1) Using forEach loop*******************/
//   arr.forEach((ele, i) => {
//     if (i != arr.length - 1) {
//       new_ele = ele + arr[i + 1];
//       new_arr.push(new_ele);
//     }
//   });

//   //**************2) Using while loop*******************/
//   //   i = 0;
//   //   while (i < arr.length - 1) {
//   //     new_ele = arr[i] + arr[i + 1];
//   //     new_arr.push(new_ele);
//   //     i += 1;
//   //   }

//   return new_arr;
// };

// console.log(adjacent_sum([3, 7, 2, 11]));
// console.log(adjacent_sum([2, 5, 1, 9, 2, 4]));

//**********************20)pyramid_sum****************************/
// //Write a function pyramid_sum that takes in an array of numbers
// //representing the base of a pyramid. The function should return a
// //2D array representing a complete pyramid with the given base.
// //To construct a level of the pyramid, we take the sum of adjacent
// //elements of the level below.

// const pyramid_sum = (base) => {
//   let pyramid = [base];

//   while (pyramid.length < base.length) {
//     let prev_level = pyramid[0];
//     let next_level = adjacent_sum(prev_level);
//     pyramid.unshift(next_level);
//   }
//   return pyramid;
// };

// const adjacent_sum = (arr) => {
//   new_arr = [];

//   arr.forEach((ele, i) => {
//     if (i != arr.length - 1) {
//       new_arr.push(arr[i] + arr[i + 1]);
//     }
//   });
//   return new_arr;
// };

// console.log(pyramid_sum([1, 4, 6]));
// console.log(pyramid_sum([3, 7, 2, 11]));

//**********************21)all_else_equal???****************************/
// //Write a function all_else_equal that takes in an array of numbers.
// //The function should return the element of the array that is equal to
// //half of the sum of all elements of the array. If there is no such element,
// //the function should return null.

// const all_else_equal = (arr) => {
//   let sum = sum_array(arr);

//   arr.forEach((ele, i) => {
//     if (ele == sum / 2) {
//       console.log(ele);
//       //   return ele;
//     }
//   });
//   return null;
// };

// const sum_array = (arr) => {
//   let sum = 0;

//   arr.forEach((num) => {
//     sum = sum += num;
//   });
//   return sum;
// };

// console.log(all_else_equal([2, 4, 3, 10, 1]));
// console.log(all_else_equal([6, 3, 5, -9, 1]));
// console.log(all_else_equal([1, 2, 3, 4]));

//**********************22)anagrams???****************************/
// //Write a function anagrams? that takes in two words and returns
// //a boolean indicating whether or not the words are anagrams.
// //Anagrams are words that contain the same characters but not
// //necessarily in the same order. Solve this without using .sort

//****************a) THIS Split, Sort, Join then compare***************/
// const anagrams = (word1, word2) => {
//   return char_count(word1) == char_count(word2);
// };

// const char_count = (word) => {
//   let changed_word = word.split("").sort().join();
//   return changed_word;
// };

// console.log(anagrams("cat", "act"));
// console.log(anagrams("restful", "fluster"));
// console.log(anagrams("cat", "dog"));
// console.log(anagrams("boot", "bootcamp"));

//****************b) THIS WAY USE REGEX***************/
// const anagrams = (word1, word2) => {
//   /*First, we remove any non-alphabet character using regex and convert
//     convert the strings to lowercase. */
//   word1 = word1.replace(/[^\w]/g, "").toLowerCase();
//   word2 = word2.replace(/[^\w]/g, "").toLowerCase();

//   return sortString(word1) === sortString(word2);
// };

// function sortString(string) {
//   return string.split("").sort().join("");
// }

// console.log(anagrams("cat", "act"));
// console.log(anagrams("restful", "fluster"));
// console.log(anagrams("cat", "dog"));
// console.log(anagrams("boot", "bootcamp"));

//**********************23)consonant_cancel****************************/
// //Write a function consonant_cancel that takes in a sentence and
// //returns a new sentence where every word begins with it's first vowel.

// const consonant_cancel = (sentence) => {
//   let words = sentence.split(" ");
//   let new_words = [];
//   words.map((word) => {
//     let split_word = remove_starting_consonant(word);
//     new_words.push(split_word);
//   });
//   return new_words.join(" ");
// };

// const remove_starting_consonant = (word) => {
//   let vowels = "aeiou";
//   i = 0;
//   while (i < word.length) {
//     if (vowels.includes(word[i])) {
//       return word.slice(i);
//     }
//     i += 1;
//   }
// };

// // console.log(remove_starting_consonant("challenging"));
// console.log(consonant_cancel("down the rabbit hole"));
// console.log(consonant_cancel("writing code is challenging"));

//**********************24)same_char_collapse****************************/
// //Write a method same_char_collapse that takes in a string and
// //returns a collapsed version of the string. To collapse the string, we
// //repeatedly delete 2 adjacent characters that are the same until there
// //are no such adjacent characters. If there are multiple pairs that can be
// //collapsed, delete the leftmost pair. For example, we take the following
// //steps to collapse "zzzxaaxy": zzzxaaxy -> zxaaxy -> zxxy

//****************a) Moves duplicate char NOT duplicate adjecent char***************/
// const same_char_collapse = (string) => {
//   var unique = "";
//   for (var i = 0; i < string.length; i++) {
//     if (unique.indexOf(string[i]) == -1) {
//       unique += string[i];
//     }
//   }
//   return unique;
// };
// console.log(same_char_collapse("baraban"));
// console.log(same_char_collapse("zzzxaaxy"));
// console.log(same_char_collapse("uqrssrqvtt"));

// //****************b) Removes Duplicate adjacent char, Using var NOT let, because let cause ERROR ***************/
// const same_char_collapse = (str) => {
//   var reducible = true;
//   //   let chars = str.split("");

//   while (reducible) {
//     reducible = false;

//     var chars = str.split(""); //ERROR: With let Cannot access 'str' before initialization
//     for (const [i, char] of chars.entries()) {
//       if (chars[i] == chars[i + 1]) {
//         chars[i] = "";
//         chars[i + 1] = "";
//         reducible = true;
//         break;
//       }
//     }
//     var str = chars.join("");
//   }
//   return str;
// };
// console.log(same_char_collapse("zzzxaaxy"));
// console.log(same_char_collapse("uqrssrqvtt"));
