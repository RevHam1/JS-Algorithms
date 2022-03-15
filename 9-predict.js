// // Predict 1
// function a() {
//   console.log("hello");
// }
// console.log("Dojo");

// // Predict
// function a(n) {
//   console.log("n is", n);
//   return n + 15;
// }
// x = a(3);
// console.log("x is", x);

// Predict 3
// function a(n) {
//   console.log("n is", n);
//   return n + 15;
// }
// x = a(3);
// console.log("x is", x);

// Predict 4
// function a(n) {
//   console.log("n is", n);
//   y = n * 2;
//   return y;
// }
// x = a(3) + a(5);
// console.log("x is", x);

// Predict 5
// function op(a, b) {
//   c = a + b;
//   console.log("c is", c);
//   return c;
// }
// x = op(2, 3) + op(3, 5);
// console.log("x is", x);

// Predict 6
// function op(a, b) {
//   c = a + b;
//   console.log("c is", c);
//   return c;
// }
// x = op(2, 3) + op(3, op(2, 1)) + op(op(2, 1), op(2, 3));
// console.log("x is", x);

// Predict 7
var x = 15;

function a() {
  var x = 10;
}

console.log(x);
a();
console.log(x);
