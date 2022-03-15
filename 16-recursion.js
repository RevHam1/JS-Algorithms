// //Recursion Case
// function inception() {
//   inception();
// }

// //Recursion "Base" -Stop Calling the function
// let counter = 0;
// function inception() {
//   console.log(counter);
//   if (counter > 3) {
//     return "done"; //Have to retrun the Base
//   }
//   counter++;
//   return inception(); //Have to return the Recursion
// }

// console.log(inception());

// 1. Identify Base Case
// 2. Identify Recursive Case
// 3. Usual two returns

//When to use reursion: Complicated problem like searching throgh trees or graphs; Sorting through certain items
//*********************END RECURSIVE NOTE********************/

// //*********************EXAMPLES********************/
// //A) RECURSIVE O(n)
// function findFactorialRecursive(number) {
//   //Base Case
//   if (number === 2) {
//     return 2;
//   }

//   //Recursive Case
//   return number * findFactorialRecursive(number - 1);
// }
// console.log(findFactorialRecursive(5));

// //B) ITERATIVE O(n)
// function findFactorialIterative(number) {
//   let answer = 1;
//   if (number === 2) {
//     answer = 2;
//   }
//   for (let i = 2; i <= number; i++) {
//     answer = answer * i;
//   }
//   return answer;
// }
// console.log(findFactorialIterative(5));

// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3
//Or (val @index n) =  (val @index n - 1) + (val @index n - 2)
//the goal is to return the nth value of the fibonacci pattern

//For example: fibonacciIterative(6) should return 8 O(n)
function fibonacciIterative(n) {
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
}
fibonacciIterative(3);

//***************FIBONACCI RECURSIVE O(2^n)**********************//
function fibonacciRecursive(n) {
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}
console.log(fibonacciRecursive(5));

//********FIBONACCI RECURSIVE WITH MEMOIZATION(1) OPTIMAZATION O(n)********//
//*************Memorization To Improve Recusive calls***************//
let fibo = (n, array = []) => {
  if (array[n] != null) return array[n];
  let result;
  if (n < 2) result = n;
  else result = fibo(n - 1, array) + fibo(n - 2, array);

  array[n] = result;

  return result;
};

function fiboseq(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    result.push(fibo(i));
  }
  returnresult;
}

console.log(fibo(108));

//*************Tail Call Optimization To Improve Recusive calls***************//

//********FIBONACCI RECURSIVE WITH MEMOIZATION(2) OPTIMAZATION O(n)********//
function fib(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  var res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;
  return res;
}

//********FIBONACCI TABULATED Botom Up OPTIMAZATION O(n)********//
function fib(n) {
  if (n <= 2) return 1;
  var fibNums = [0, 1, 1];
  for (var i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
}

//**********reverseString******************//
function reverseString(str) {
  let arrayStr = str.split("");
  let reversedArray = [];
  //We are using closure here so that we don't add the above variables to the global scope.
  function addToArray(array) {
    if (array.length > 0) {
      reversedArray.push(array.pop());
      addToArray(array);
    }
    return;
  }
  addToArray(arrayStr);
  return reversedArray.join("");
}

reverseString("yoyo master");

function reverseStringRecursive(str) {
  if (str === "") {
    return "";
  } else {
    return reverseStringRecursive(str.substr(1)) + str.charAt(0);
  }
}

reverseStringRecursive("yoyo master");
