// //QUEUE IMPLEMENTING
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Queue {
//   constructor() {
//     this.first = null;
//     this.last = null;
//     this.length = 0;
//   }
//   peek() {
//     return this.first;
//   }
//   enqueue(value) {
//     const newNode = new Node(value);
//     if (this.length === 0) {
//       this.first = newNode;
//       this.last = newNode;
//     } else {
//       this.last.next = newNode;
//       this.last = newNode;
//     }
//     this.length++;
//     return this;
//   }
//   dequeue() {
//     if (!this.first) {
//       return null;
//     }
//     if (this.first === this.last) {
//       this.last = null;
//     }
//     // const holdingPointer = this.first;
//     this.first = this.first.next;
//     this.length--;
//     return this;
//     // return holdingPointer
//   }
//   //isEmpty() {}
// }

// const myQueue = new Queue();

// console.log(myQueue.enqueue("Joy"));
// console.log(myQueue.enqueue("Matt"));
// console.log(myQueue.enqueue("Pavel"));
// console.log(myQueue.enqueue("Samir"));
// console.log(myQueue.peek());

// console.log(myQueue.dequeue());
// console.log(myQueue.dequeue());
// console.log(myQueue.dequeue());
// console.log(myQueue.dequeue());

//1) IMPLEMENTING A QUEUE USING STACK
// class CrazyQueue {
//   constructor() {
//     this.first = [];
//     this.last = [];
//   }

//   enqueue(value) {
//     const length = this.first.length;
//     for (let i = 0; i < length; i++) {
//       this.last.push(this.first.pop());
//     }
//     this.last.push(value);
//     return this;
//   }

//   dequeue() {
//     const length = this.last.length;
//     for (let i = 0; i < length; i++) {
//       this.first.push(this.last.pop());
//     }
//     this.first.pop();
//     return this;
//   }
//   peek() {
//     if (this.last.length > 0) {
//       return this.last[0];
//     }
//     return this.first[this.first.length - 1];
//   }
// }

// const myQueue = new CrazyQueue();
// myQueue.peek();
// myQueue.enqueue("Joy");
// myQueue.enqueue("Matt");
// myQueue.enqueue("Pavel");
// myQueue.peek();
// myQueue.dequeue();
// myQueue.dequeue();
// myQueue.dequeue();
// myQueue.peek();

//2) IMPLEMENTING A QUEUE USING STACK
class MyQueue {
  constructor() {
    this.pushStack = [];
    this.popStack = [];
  }
  push(val) {
    this.pushStack.push(val);
  }
  //time O(1); space O(n)
  pop() {
    if (!this.popStack.length) {
      while (this.pushStack.length) {
        this.popStack.push(this.pushStack.pop());
      }
    }
    return this.popStack.pop();
  }
  peek() {
    if (!this.popStack.length) {
      while (this.pushStack.length) {
        this.popStack.push(this.pushStack.pop());
      }
    }
    return this.popStack[this.popStack.length - 1];
  }
  empty() {
    return !this.pushStack.length && !this.popStack.length;
  }
}
