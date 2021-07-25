import Queue from "./Queue.js";

const q = new Queue();

q.enqueue("Qs r 4 punks");
q.enqueue("IKR");
q.enqueue(7);

q.print();

console.log("peeking", q.peek());

console.log(q.dequeue());
q.print();

q.dequeue();
q.dequeue();
q.dequeue();

console.log(q.peek());

q.print();
