//FIFO

class Queue {
  constructor() {
    this.queue = [];
  }
}

// Adds an element to the end of the queue
Queue.prototype.enqueue = function (data) {
  this.queue.push(data);
};

// Removes the first element in the queue
Queue.prototype.dequeue = function () {
  const dequeued = this.queue[0];
  this.queue.shift();
  return dequeued;
};

// Returns the first item in the Queue without removing it
Queue.prototype.peek = function () {
  return this.isEmpty() ? "Peek-a-boo the queue's empty" : this.queue[0];
};

// Checks to see if Queue is empty
Queue.prototype.isEmpty = function () {
  return this.queue.length === 0;
};

// Prints all elements in queue
Queue.prototype.print = function () {
  if (this.isEmpty()) {
    console.log("Empty Queue's are sad queues");
  } else {
    let str = "";
    let iter = 0;
    while (iter < this.queue.length) {
      str += this.queue[iter] + ", ";
      iter++;
    }
    console.log(str);
  }
};

export default Queue;
