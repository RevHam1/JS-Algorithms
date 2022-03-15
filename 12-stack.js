// //STACK IMPLEMENTING LINKED LIST
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Stack {
//   constructor() {
//     this.top = null;
//     this.bottom = null;
//     this.length = 0;
//   }
//   peek() {
//     return this.top;
//   }
//   push(value) {
//     const newNode = new Node(value);
//     if (this.length === 0) {
//       this.top = newNode;
//       this.bottom = newNode;
//     } else {
//       const holdingPointer = this.top;
//       console.log("1) holdingPointer: WasTop ", holdingPointer);
//       this.top = newNode;
//       console.log("2) this.top newNode: NewTop ", this.top);
//       this.top.next = holdingPointer;
//       console.log("3) this.top.next : NewTopNext ", this.top);
//     }
//     this.length++;
//     return this;
//   }
//   pop() {
//     if (!this.top) {
//       return null;
//     }
//     if (this.top === this.bottom) {
//       this.bottom = null;
//     }
//     // const holdingPointer = this.top;
//     // console.log("A) holdingPointer: WasTop ", holdingPointer);
//     this.top = this.top.next;
//     console.log("A) this.top this.top.next: NewTop ", this.top);
//     this.length--;
//     // return holdingPointer;
//     return this;
//   }
//   //isEmpty() {}
// }

// const myStack = new Stack();

// console.log(myStack.peek());
// console.log(myStack.push("1google"));
// console.log(myStack.push("2Udemy"));
// console.log(myStack.push("3Discord"));
// console.log(myStack.peek());

// console.log(myStack.pop());
// console.log(myStack.pop());
// console.log(myStack.pop());

//STACK IMPLEMENTING ARRAY
class Stack {
  constructor() {
    this.array = [];
  }
  peek() {
    return this.array[this.array.length - 1];
  }
  push(value) {
    this.array.push(value);
    return this;
  }
  pop() {
    this.array.pop();
    return this;
  }
  //isEmpty() {}
}

const myStack = new Stack();

console.log(myStack.push("google"));
console.log(myStack.push("Udemy"));
console.log(myStack.push("Discord"));
console.log(myStack.peek());

console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
