// //Two things for a node 1) value & 2) next
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

//Three things for LinkedList 1) head, 2) tail & 3) length
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  //Methods for LinkList [10, 5] becomes [10, 5, 16]
  append(value) {
    // const newNode = new Node(value);
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode; //the tail.next/5 points/*append* newNode/16
    this.tail = newNode; //the newNode/16 becomes the new tail
    this.length++;
    // console.log(this);
    return this;
  }

  //[10, 5, 16] becomes [1, 10, 5, 16]
  prepend(value) {
    const newNode = {
      value: value,
      next: null,
    };
    newNode.next = this.head; //newNode.next/1 pt/*prepend* before curr this.head/10
    this.head = newNode; //newNode/1 becomes the new head
    this.length++;
    // console.log(this);
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head; //starts with frist node, the head
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next; //moves to next node
    }
    console.log(array);
    return array;
  }

  //[1, 10, 5]; becomes [1, 10, 99, 5] index 2 value 99
  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = {
      value: value,
      next: null,
    };
    const leader = this.traverseToIndex(index - 1); //is 10; becomes [1, 10, 99, 5]
    const holdingPointer = leader.next; //is 5
    leader.next = newNode; //leader.next/10 points/*inserts* newNode/99 index 2
    newNode.next = holdingPointer; //newNode/99 points  to holdingPointer/5
    this.length++;
    console.log(this.printList());
    return this.printList;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head; //starts with frist node, the head
    while (counter !== index) {
      currentNode = currentNode.next; //moves to next node
      counter++;
    }
    return currentNode; //returns the node at index looked for
  }

  //[1, 10, 99, 5]; index/2; becomes [1, 10, 5] remove 99 & point to 5
  remove(index) {
    const leader = this.traverseToIndex(index - 1); //is 10
    const unwantedNode = leader.next; //is 99
    leader.next = unwantedNode.next; //leader.next/99 *removed*/point unwanted.next/5
    this.length--;
    return this.printList();
  }

  //[1, 10, 16, 88] becomes [88, 16, 10, 1]
  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head; //first is 1
    this.tail = this.head; //tail becomes 1

    let second = first.next; //second is 10
    while (second) {
      const temp = second.next; //*store* second.next@16 before servering line below
      second.next = first; //second.next points/*reverse* to first
      first = second; //*reassign* to node before; first@1 becomes first@10
      second = temp; //*reassign* to node before; second@10 becomes second@16; (temp)
    }
    this.head.next = null; //1 point to null
    this.head = first; //88 = first; by the time we loop frist = 88, second =null
    // return this.printList();

    console.log(this);
    return this;
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
      node.next = prev; //node.next points/*reverse* to prev
      prev = node; //*reassign* to node before; prev@null becomes prev@100;
      node = next; //*reassign* to node before; node@100 becomes node@201; go to next=
    }
    return this;
  }
  //[100, 201, 250, 350, 999]
  // NODE NEXT
  // 100->null
  // PREV NODE NEXT
  // 201->100->null
  //      PREV NODE NEXT
  // 250->201->100->null
  //           PREV NODE NEXT
  // 350->250->201->100->null
  //                PREV NODE NEXT
  // 999->350->250->201->100->null
  //                     PREV NODE

  reverse3() {
    if (!this.head.next) {
      return this.head;
    }
    //[prev, 1, 2, 3, 4] becomes [4, 3, 2, 1]
    let prev = null; //point to node before; will be new tail
    let current = this.head; //point to current head
    let next = current.next; //point to next; save next; not to loose in iteration

    this.head = this.tail; // swap the head to now be the tail
    this.tail = current; //swap the tail to be head using the current variable

    for (let i = 0; i < this.length; i++) {
      next = current.next; //*store* current.next@2 before severing below; re-assign next after each iteration)
      current.next = prev; //current.next *reverse* to prev<--current.next
      prev = current; //*reassign* to mode before; prev@null becomes prev@1;
      current = next; //*reassign* to node before; current@1 becomes current@2; next
    }
    return prev; //has become last node or the new head; can also return printList();
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
// myLinkedList.prepend(1);
// myLinkedList.printList();
// myLinkedList.insert(2, 99);
// myLinkedList.insert(20, 88);
myLinkedList.printList();
// myLinkedList.remove(2);
// myLinkedList.remove(2);
// myLinkedList.reverse();

// console.log(myLinkedList);

var list = new LinkedList(100);
list.append(201);
list.append(250);
list.append(350);
list.append(999);

console.log("**********Singly Linked List**********");
list.printList();

list.reverse2();
console.log("**********Singly Linked List Reversed**********");
list.printList();
// console.log(list);
