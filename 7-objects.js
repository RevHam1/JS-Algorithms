//**************************1)get_double_age******************************/
// //Write a function get_double_age that takes in an object and returns
// //twice the "age" value of the object.

// const get_double_age = (obj) => {
//   return obj.age * 2;
// };

// // console.log("hello")

// console.log(get_double_age({ name: "App Academy", age: 5 }));
// console.log(get_double_age({ name: "Ruby", age: 23 }));

//**************************2)get_full_name******************************/
// //Write a function get_full_name that takes in an object containing a
// //first, last, and title. The function should return a string representing
// //the object's full name

// const get_full_name = (obj) => {
//   return obj.first + " " + obj.last + ", the " + obj.title;
//   //   return obj[first] + " " + obj[last] + ", the " + obj[title];
// };

// let object1 = { first: "Michael", last: "Jordan", title: "GOAT" };
// let object2 = { first: "Fido", last: "McDog", title: "Loyal" };
// console.log(get_full_name(object1));
// console.log(get_full_name(object2));

//**************************3)word_lengths******************************/
// // Write a function word_lengths that takes in a sentence string and
// // returns an object where every key is a word of the sentence, and its'
// // corresponding value is the length of that word. Console log the results.

// const word_lengths = (sentence) => {
//   words = sentence.split(" ");
//   let obj = {};

//   words.forEach((word) => {
//     obj[word] = word.length;
//   });

//   return obj;
// };

// console.log(word_lengths("this is fun"));
// console.log(word_lengths("When in doubt, leave it out"));

//**********************4)retrieve_values****************************/
// // Write a function retrieve_values that takes in two objects and a key.
// // The function should return an array containing the values from the two objects
// // that correspond with the given key.

// const retrieve_values = (obj1, obj2, key) => {
//   val1 = obj1[key];
//   val2 = obj2[key];
//   return [val1, val2];
// };

// dog1 = { name: "Fido", color: "brown" };
// dog2 = { name: "Spot", color: "white" };
// console.log(retrieve_values(dog1, dog2, "name"));
// console.log(retrieve_values(dog1, dog2, "color"));

//**********************5)cat_builder****************************/
// //Write a function cat_builder that takes in a name, color, and age.
// //The function should return an object representing a cat with those values.

// const cat_builder = (name_str, color_str, age_num) => {
//   return { name: name_str, color: color_str, age: age_num };
// };

// console.log(cat_builder("Whiskers", "orange", 3));
// console.log(cat_builder("Salem", "black", 100));

//**********************6)ae_countr****************************/
// //Write a function ae_count that takes in a string and returns an object
// //containing the number of a's and e's in the string. Assume the string
// //contains only lowercase characters.

// const ae_countr = (str) => {
//   let array = str.split("");
//   let count = { a: 0, e: 0 };

//   array.forEach((char) => {
//     if (char == "a" || char == "e") count[char] += 1;
//   });
//   return count;
// };

// console.log(ae_countr("everyone can program"));
// console.log(ae_countr("keyboard"));

//**********************7)element_count****************************/
// //Write a function element_count that takes in an array and returns an
// //object representing the count of each element in the array.

// const element_count = (arr) => {
//   var count = new Object(0);

//   arr.forEach((ele) => {
//     if (!(ele in count)) {
//       count[ele] = 0;
//     }
//     count[ele]++;
//   });
//   return count;
// };

// console.log(element_count(["a", "b", "a", "a", "b"]));
// console.log(element_count(["red", "red", "blue", "green"]));

//**********************8)select_upcase_keys****************************/
// //Write a function select_upcase_keys that takes in an object and
// //returns a new object containing key-value pairs of the original object
// //that had uppercase keys. You can assume that the keys will always
// //be strings.

// const select_upcase_keys = (obj) => {
//   let selected = {};

//   for (const [k, v] of Object.entries(obj)) {
//     //or use Object.entries(obj).forEach(([key, value])
//     if (k == k.toUpperCase()) {
//       selected[k] = v;
//     }
//   }
//   return selected;
// };

// console.log(
//   select_upcase_keys({ make: "Tesla", MODEL: "S", Year: 2018, SEATS: 4 })
// );
// console.log(
//   select_upcase_keys({
//     DATE: "July 4th",
//     holiday: "Independence Day",
//     type: "Federal",
//   })
// );

//**********************9)hand_score****************************/
// //Write a function hand_score that takes in a string representing a
// //hand of cards and returns it's total score. You can assume the letters
// //in the string are only A, K, Q, J. A is worth 4 points, K is 3 points, Q is
// //2 points, and J is 1 point. The letters of the input string not necessarily
// //uppercase.

// const hand_score = (hand) => {
//   let array = hand.split("");
//   let points = {
//     A: 4,
//     K: 3,
//     Q: 2,
//     J: 1,
//   };
//   let score = 0;

//   array.forEach((char) => {
//     score += points[char.toUpperCase()];
//   });
//   return score;
// };

// console.log(hand_score("AQAJ")); //11, 10
// console.log(hand_score("jJka")); //9, 10

// //**********************10)frequent_letters****************************/
// //Write a function frequent_letters that takes in a string and
// //returns an array containing the characters that appeared more
// //than twice in the string.

// const frequent_letters = (string) => {
//   var count = new Object(0);
//   let arr = string.split("");
//   let frequency = [];

//   arr.forEach((ele) => {
//     if (!(ele in count)) {
//       count[ele] = 0;
//     }
//     count[ele]++;
//   });

//   for (const [k, v] of Object.entries(count)) {
//     if (v > 2) {
//       frequency.push(k);
//     }
//   }
//   return frequency;
// };

// console.log(frequent_letters("mississippi"));
// console.log(frequent_letters("bootcamp"));

// //**********************11)hash_to_pairs****************************/
// //Write a function hash_to_pairs that takes in an object and returns
// //a 2D array representing each key-value pair of the object.

// const hash_to_pairs = (obj) => {
//   let pairs = [];

//   for (const [k, v] of Object.entries(obj)) {
//     pairs.push([k, v]);
//   }
//   return pairs;
// };

// console.log(
//   hash_to_pairs({ name: "skateboard", wheels: 4, weight: "7.5 lbs" })
// );
// console.log(
//   hash_to_pairs({
//     kingdom: "animal",
//     genus: "canis",
//     breed: "German Shepherd",
//   })
// );

//**********************12)unique_elements****************************/
// //Write a function unique_elements that takes in an array and
// //returns a new array where all duplicate elements are removed.
// //Solve this using a hash.

// const unique_elements = (arr) => {
//   let object = {};
//   let new_array = [];

//   i = 0;
//   while (i < arr.length) {
//     object[arr[i]] = true;

//     i += 1;
//   }
//   for (key in object) {
//     new_array.push(key);
//   }
//   return new_array;
// };

// console.log(unique_elements(["a", "b", "a", "a", "b", "c"]));

//**********************13)element_replace****************************/
// //Write a function element_replace that takes in an array and an object.
// //The function should return a new array where elements of the original array
// //are replaced with their corresponding values in the object.

// const element_replace = (arr, obj) => {
//   const new_arr = [];
//   i = 0;
//   while (i < arr.length) {
//     if (obj.hasOwnProperty(arr[i])) {
//       new_arr.push(obj[arr[i]]);
//     } else {
//       new_arr.push(arr[i]);
//     }
//     i += 1;
//   }
//   return new_arr;
//   //   });
// };

// const arr1 = ["LeBron James", "Lionel Messi", "Serena Williams"];
// const object1 = { "Serena Williams": "tennis", "LeBron James": "basketball" };

// const arr2 = ["dog", "cat", "mouse"];
// const object2 = { dog: "bork", cat: "meow", duck: "quack" };

// console.log(element_replace(arr1, object1));
// console.log(element_replace(arr2, object2));

//**********************14)Create OBJECT-HASH****************************/
// class HashTable {
//   constructor(size) {
//     this.data = new Array(size);
//     // this.data = [];
//   }

//   _hash(key) {
//     let hash = 0;
//     for (let i = 0; i < key.length; i++) {
//       hash = (hash + key.charCodeAt(i) * i) % this.data.length;
//     }
//     return hash;
//   }

//   //insert key and value
//   set(key, value) {
//     let address = this._hash(key);
//     if (!this.data[address]) {
//       this.data[address] = [];
//     }
//     this.data[address].push([key, value]);
//     return this.data;
//   }

//   //lookup a value for a given key
//   get(key) {
//     const address = this._hash(key);
//     const currentBucket = this.data[address];
//     if (currentBucket) {
//       for (let i = 0; i < currentBucket.length; i++) {
//         if (currentBucket[i][0] === key) {
//           return currentBucket[i][1];
//         }
//       }
//     }
//     return undefined;
//   }

//   //search for a certain key
//   keys() {
//     const keysArray = [];
//     console.log(this.data.length);
//     for (let i = 0; i < this.data.length; i++) {
//       if (this.data[i]) {
//         keysArray.push(this.data[i][0][0]);
//       }
//     }
//     return keysArray;
//   }
// }

// const myHashTable = new HashTable(50);
// myHashTable.set("grapes", 10000);
// myHashTable.set("grapes", 10000);
// myHashTable.get("grapes");
// myHashTable.set("apples", 9);
// myHashTable.get("apples");
// myHashTable.keys();

// //**********15)First Recurring Character Google Question*****************/
// //Given an array = [2,5,1,2,3,5,1,2,4]: It should return 2
// //Given an array = [2,1,1,2,3,5,1,2,4]: It should return 1
// //Given an array = [2,3,4,5]: It should return undefined

// //******NAIVE O(n^2)******//
// function firstRecurringCharacter(input) {
//   for (let i = 0; i < input.length; i++) {
//     for (let j = i + 1; j < input.length; j++) {
//       if (input[i] === input[j]) {
//         return input[i];
//       }
//     }
//   }
//   return undefined;
// }

// firstRecurringCharacter2([2, 5, 1, 2, 3, 5, 1, 2, 4]);

// //******REFACTORED with HASH TABLE O(n); O(n)******//
// function firstRecurringCharacter2(input) {
//   let map = {};
//   for (let i = 0; i < input.length; i++) {
//     if (map[input[i]] !== undefined) {
//       return input[i];
//     } else {
//       map[input[i]] = i;
//     }
//   }
//   return undefined;
// }

// firstRecurringCharacter2([1, 5, 5, 1, 3, 4, 6]);

//Bonus... What if we had this: [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

//****************16)Common Items***********************//
//Whether two arrays contain any common items
//Given array1 = ['a','b','c','x']
//Given array2 = ['z','y','x']: It should return true

// //******NAIVE O(a*b)******//
// function containsCommonItem(arr1, arr2) {
//   for (i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// const array1 = ["a", "b", "c", "x"];
// const array2 = ["z", "y", "x"];

// console.log(containsCommonItem(array1, array2));

//******REFACTORED with HASH TABLE O(n); O(n)******//
// function containsCommonItem2(arr1, arr2) {
//   let map = {};
//   for (let i = 0; i < arr1.length; i++) {
//     if (!map[arr1[i]]) {
//       // const item = arr1[i];
//       map[item] = true;
//     }
//     console.log({ map });
//   }
//   for (let j = 0; j < arr2.length; j++) {
//     if (map[arr2[j]]) {
//       // console.log(arr2[j]);
//       return true;
//     }
//   }
//   return false;
// }

// const array1 = ["a", "b", "c", "x"];
// const array2 = ["z", "y", "x", "c"];

// console.log(containsCommonItem2(array1, array2));

//******REFACTORED with OTHER WAY METHOD readable******//
// function containsCommonItem3(arr1, arr2) {
//   return arr1.some((item) => arr2.includes(item));
// }

// const array3 = ["a", "b", "c", "x"];
// const array4 = ["z", "y", "z"];

// console.log(containsCommonItem3(array3, array4));

//****************17)Pair Equals a Sum***********************//
//Given an array of numbers find a matching pair that is equal to a sum
//Given numbers1 = [1,2,3,9] //Sum = 8 false
//Given numbers2 = [1,2,4,4] //Sum = 8 true

// // //******A) NAIVE O(n^2)******//
// function hasPairWithSum(numArr, sum) {
//   //Use two for loops
//   //the frist i for each item
//   //the second j does i + j = sum
//   for (let i = 0; i < numArr.length; i++) {
//     for (let j = 1; j < numArr.length; j++) {
//       if (numArr[i] + numArr[j] === sum) {
//         return true;
//       }
//     }
//   }
//   return false;
// }
// numbers1 = [1, 2, 3, 9]; //Sum = 8 false
// numbers2 = [1, 2, 4, 4]; //Sum = 8 true

// console.log(hasPairWithSum(numbers1, 8));
// console.log(hasPairWithSum(numbers2, 8));

// //******B) SORTED ARRAY Linear search O(n)******//
// function hasPairWithSum2(numArr, sum) {
//   for (let i = 0; i < numArr.length; i++) {
//     let low = numArr[i];
//     let high = numArr[numArr.length - 1];
//     console.log(low, high);
//     if (low + high === sum) {
//       // console.log(low, high);
//       return true;
//     }
//   }
//   return false;
// }

// numbers1 = [1, 2, 3, 9]; //Sum = 8 false
// numbers2 = [1, 2, 4, 4]; //Sum = 8 true

// console.log(hasPairWithSum2(numbers1, 8));
// console.log(hasPairWithSum2(numbers2, 8));

// //******C) HASH USE SET O(n)******//
function hasPairWithSum3(arr, sum) {
  let mySet = new Set(); //Initialized empty here; Set objects store unique values of any type, primitive values or object references.

  for (let i = 0; i < arr.length; i++) {
    if (mySet.has(arr[i])) {
      // console.log("has  i   1, 2, 3, 4, 5, 6");
      // console.log("sum:    " + sum);
      // console.log("i:      " + arr[i]);
      // console.log("sum-i: ", sum - arr[i]);
      return true;
    }
    mySet.add(sum - arr[i]); //10: 9 8 7 6 5; 7: 6 5 4; 5: 4 3
    console.log(mySet);
  }
  return false;
}

// let arr = [1, 2, 3, 4, 5, 6];
// let arr1 = [1, 2, 3, 6, 4, 5, 7];

// console.log(hasPairWithSum3(arr, 10));
// console.log(hasPairWithSum3(arr1, 10));

// //******D) ONE LINER******//
function hasPairWithSum4(data, sum) {
  return data.some(function () {
    return data.includes(sum - data.pop());
  });
}

let arr = [1, 2, 3, 4, 5, 6];
let arr1 = [1, 2, 3, 6, 4, 5, 7];

console.log(hasPairWithSum4(arr, 50));
console.log(hasPairWithSum4(arr1, 10));
