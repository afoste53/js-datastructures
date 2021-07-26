import BSTreeNode from "./BSTreeNode.js";

class BST {
  constructor() {
    this.root = null;
  }
}

// insert(data)
// Creates a new node containing the data
// If the tree has no root, this is the root
// o/w calls insertNode(root, newNode)
BST.prototype.insert = function (data) {
  const newNode = new BSTreeNode(data);

  if (this.root === null) {
    this.root = newNode;
  } else {
    this.insertNode(this.root, newNode);
  }
};

// insertNode(node, newNode)
// Finds where a newNode should be inserted based (nodeHome) on the node passed in
// if nodeHome is null, the newNode is inserted here
// else, recur insertNode(nodeHome, newNode)
// for fun if the nodes are equal, it's going in the right node
BST.prototype.insertNode = function (node, newNode) {
  // newNode.data > node.data => insertNode(node.right, newNode);
  if (newNode.data >= node.data) {
    // go right
    if (node.right === null) {
      node.right = newNode;
    } else {
      this.insertNode(node.right, newNode);
    }
  } else if (newNode.data < node.data) {
    // go left
    if (node.left === null) {
      node.left = newNode;
    } else {
      this.insertNode(node.left, newNode);
    }
  } else {
    console.log("something has gone terribly wrong");
  }
  //newNode.data < node.data => insertNode(node.left, newNode);
};

//delete(data)

//delete(node, data);

export default BST;
