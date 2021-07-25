// LIFO
class Stack {
  constructor() {
    this.stack = [];
    this.top = 0;
  }
}

// Adds new element to stack
Stack.prototype.push = function (data) {
  this.stack[this.top] = data;
  this.top++;
};

// Return the element on top of the stack and remove from stack
Stack.prototype.pop = function () {
  const popped = this.stack.pop();
  this.top--;
  return popped;
};

// Peek
Stack.prototype.peek = function () {
  return this.isEmpty() ? "The stack is empty" : this.stack[this.top - 1];
};

// Length
Stack.prototype.length = function () {
  return this.top;
};

// Search
Stack.prototype.search = function (searchTerm) {
  let iter = 0;
  while (iter < this.top) {
    if (this.stack[iter] === searchTerm) return true;
    iter++;
  }
  return false;
};

// IsEmpty
Stack.prototype.isEmpty = function () {
  return this.top === 0;
};

// Print
Stack.prototype.print = function () {
  let iter = 0;
  let str = "";
  while (iter < this.top) {
    str += this.stack[iter] + ", ";
    iter++;
  }
  console.log(str);
};

export default Stack;
