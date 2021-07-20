import ListNode from "./ListNode";

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
}

// Fn to add a new node to end of the list
LinkedList.prototype.add = function (data) {
  // Create a new node with provided data
  const newNode = new ListNode(data);
  let currentNode = this.head;

  // If list is empty, the new element becomes the head
  if (!this.head) {
    this.head = newNode;
  } else {
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }
  this.size++;
};

// Fn to insert a new  node at a given location
LinkedList.prototype.insertAt = function (data, index) {
  // Check that provided index is valid, and log to console if not
  if (index < 0 || index > this.size) {
    console.log(`Index with value ${index} is out of bounds.`);
  } else {
    // Create a new node to insert
    const newNode = new ListNode(data);

    // if index = 0, make the new element the head
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let currentNode = this.head;
      let prevNode = null;
      let counter = 0;
      while (counter < index) {
        prevNode = currentNode;
        currentNode = currentNode.next;
        counter++;
      }
      prevNode.next = newNode;
      newNode.next = currentNode;
    }
    this.size++;
  }
};

// Fn to remove a node at a given index
LinkedList.prototype.removeByIndex = function (index) {};

// Fn to remove a node with a particular value
// Removes only the first instance
LinkedList.prototype.removeByValue = function (data) {};

// Fn to remove all nodes with a particular value
LinkedList.prototype.removeAllByValue = function (data) {};

// Fn that checks if list is empty
LinkedList.prototype.isEmpty = function () {
  if (this.size === 0) return true;

  return false;
};

// Fn to print size of list to console
LinkedList.prototype.printSize = function () {
  console.log(this.size);
};

// Fn that prints the data from all nodes to console
LinkedList.prototype.printList = function () {
  let currentNode = this.head;
  let returnString = "";

  while (currentNode) {
    returnString += currentNode.data + " -> ";
    currentNode = currentNode.next;
  }

  console.log(returnString);
};
