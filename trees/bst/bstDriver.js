import BST from "./BST.js";

const bst = new BST();
//console.log(bst);

bst.insert(9);
//console.log(bst);

bst.insert(10);
bst.insert(8);
bst.insert(6);
bst.insert(100);
bst.insert(90);

// Post insertion
// console.log("BST: ", bst);
// console.log("BST.root.left: ", bst.root.left);
// console.log("bst.root.right: ", bst.root.right);
//
// console.log("BST.root.left.left: ", bst.root.left.left);
// console.log("BST.root.left.right: ", bst.root.left.right);
//
// console.log("bst.root.right.left: ", bst.root.right.left);
// console.log("bst.root.right.right: ", bst.root.right.right);

// search
// console.log("BST: ", bst);
console.log("Search 10; ", bst.search(10));
console.log("Search 90: ", bst.search(90));
console.log("Search 8: ", bst.search(8));
console.log("Search 100: ", bst.search(100));
console.log("Search 6: ", bst.search(6));
console.log("Search -6: ", bst.search(-6));
console.log("Search 11: ", bst.search(11));
