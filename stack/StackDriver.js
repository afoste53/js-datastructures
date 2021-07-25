import Stack from "./Stack.js";

const stack = new Stack();
console.log("After initializing", stack);
console.log("Is it empty", stack.isEmpty());

stack.push("peen");
console.log("Push the peen", stack);

console.log(stack.pop());
console.log("Pop the peen", stack);

stack.push("another peen");
stack.push("second peen?");
console.log("Peek the peen", stack.peek());

console.log("Length of:", stack.length());

console.log("Print that peen-stack");
stack.print();

console.log("Is it empty?", stack.isEmpty());

console.log("Search for peen", stack.search("peen"));
stack.push("peen");
console.log("Search for peen", stack.search("peen"));
