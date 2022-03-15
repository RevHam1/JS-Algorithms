//**********************1)average_of_three****************************/
// //Write a function average_of_three(num1, num2, num3)
// //that returns the average of three numbers
// const average_of_three = (num1, num2, num3) => {
//   return (num1 + num2 + num3) / 3;
// };

// console.log(average_of_three(3, 7, 8));

//**********************2)goodbye****************************/
//Write a function goodbye(name) that takes in a string name and
//returns a string saying bye to that name. See the example calls.
const goodbye = (name) => {
  return "Good bye " + name + "...";
};

console.log(goodbye("Daniel"));

//**********************3)Character Count****************************/
//Write a function that takes in a string and returns counts of each character in the string
function charCount(str) {
  // make object to return at the end
  var results = {};
  // loop over string for each Character
  for (var i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      // if char is a numb/letter & is a key in results obj add 1 to count
      if (results[char] > 0) {
        results[char]++;
      } else {
        // if char is a numb/letter & is not a key in results obj add it to obj
        results[char] = 1;
      }
    }
  }
  // return object at the end
  console.log(results);
  return results;
}

//**********************4)Character Count Refactored****************************/
function charCount2(str) {
  var results = {};
  for (var char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      if (results[char] > 0) {
        results[char]++;
      } else {
        results[char] = 1;
      }
    }
  }
  console.log(results);
  return results;
}

//**********************5)Character Count Refactored 2****************************/
function charCount3(str) {
  var results = {};
  for (var char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      results[char] = ++results[char] || 1;
    }
  }
  console.log(results);
  return results;
}

//**********************6)Character Count Refactored 3****************************/
function charCount4(str) {
  var results = {};
  for (var char of str) {
    if (isAlphaNemeric(char)) {
      char = char.toLowerCase();
      results[char] = ++results[char] || 1;
    }
  }
  console.log(results);
  return results;
}

function isAlphaNemeric(char) {
  var code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // numeric (0-9)
    !(code > 96 && code < 123) // numeric (0-9)
  ) {
    return false;
  }
  return true;
}

charCount("hello");
charCount("Hi there!");
charCount2("Bye boss!");
charCount3("Bye boss!");
charCount4("Hi there!");
