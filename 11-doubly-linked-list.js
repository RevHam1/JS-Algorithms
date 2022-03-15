// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//     this.prev = null;
//   }
// }

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    // const newNode = new Node(value);
    const newNode = {
      value: value,
      next: null,
      prev: null,
    };
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    // console.log(this);
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null,
    };
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    // console.log(this);
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
    return array;
  }
  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = {
      value: value,
      next: null,
      prev: null,
    };
    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++;
    // console.log(this.printList());
    console.log(this);
    return this.printList;
  }
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  remove(index) {
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }

  //Three varibles 1) current node, 2) next & 3) prev;
  //[100, 201, 250, 350, 999] becomes [999, 350, 250, 201,100]
  reverse2() {
    var node = this.head; //1)var the current node; temp var
    this.head = this.tail; //swap head & tail
    this.tail = node;

    var next; //2) var next; whats after current node
    var prev = null; //3) var prev; whats before current node
    for (var i = 0; i < this.length; i++) {
      next = node.next; //node.next@201 *store* before severing it in line below
      node.prev = next; //node.prev points/*reverse* to next
      node.next = prev; //node.next points/*reverse* to prev
      prev = node; //*reassign* to node before; prev@null becomes prev@100;
      node = next; //*reassign* to node before; node@100 becomes node@201; go to next=
    }
    return this;
  }
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.printList();
myLinkedList.insert(1, 99);
// myLinkedList.insert(20, 88);
// myLinkedList.printList();
// myLinkedList.remove(2);
// myLinkedList.remove(2);

// console.log(myLinkedList);

var list = new DoublyLinkedList(100);
list.append(201);
list.append(250);
list.append(350);
list.append(999);

console.log("**********Doubly Linked List**********");
list.printList();

console.log("**********Doubly Linked List Reversed**********");
list.reverse2();
list.printList();
