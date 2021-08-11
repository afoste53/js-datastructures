import BSTreeNode from "./BSTreeNode.js";

class BST {
  constructor() {
    this.root = null;
  }
}

BST.prototype.insert = function (data) {
  // Create a new node containing the data
  const newNode = new BSTreeNode(data);

  if (this.root === null) {
    // If the tree has no root, this is the root
    this.root = newNode;
  } else {
    // o/w calls insertNode(root, newNode)
    this.insertNode(this.root, newNode);
  }
};

// Finds where a newNode should be inserted based on the node passed in
// for fun if the nodes are equal, it's going in the right node
BST.prototype.insertNode = function (node, newNode) {
  if (newNode.data >= node.data) {
    // go right if the new node is larger than the current node
    if (node.right === null) {
      // If the location the node should go is empty, insert it here
      node.right = newNode;
    } else {
      // else, recur with node.right as the first param
      this.insertNode(node.right, newNode);
    }
  } else if (newNode.data < node.data) {
    // go left if the new node is smaller than current node
    if (node.left === null) {
      // if there is no node on the left, insert the new node here
      node.left = newNode;
    } else {
      // else, recur with node.left as the first param
      this.insertNode(node.left, newNode);
    }
  } else {
    // log anything else b/c something must have broken
    console.log("something has gone terribly wrong");
  }
};

// calls the real delete function
BST.prototype.delete = function (data) {};

//delete(node, data);
BST.prototype.delete = function (node, data) {};

// Find a particular value in the tree
// return true if tree contains it, false o/w
BST.prototype.search = function (data) {
  if (this.root.data === data) {
    // if first value is the one searching for, return true
    return true;
  } else if (data > this.root.data) {
    // go right
    return searchHelper(this.root.right, data);
  } else if (data < this.root.data) {
    // go left
    return searchHelper(this.root.left, data);
  } else {
    console.log("Something has gone terribly wrong while searching");
    return;
  }
};

// Finds node with smallest value in tree
BST.prototype.findMin = function () {
  if (this.root === null) {
    // if there's no root, there's no tree really - return null
    return null;
  } else if (this.root.left === null) {
    // if there's no left node, the root must be the smallest, return root.data
    return this.root.data;
  } else {
    // o/w call the helper function that will recur down the left side of the tree
    return findMinHelper(this.root.left);
  }
};

BST.prototype.findMax = function () {
  if (this.root === null) {
    // f there's no root, there's no tree really - return null
    return null;
  } else if (this.root.right === null) {
    // if there's no right node, the root must be the largest, return its value
    return this.root.data;
  } else {
    // o/w call the helper function to recur down the right side of the tree until the max
    return findMaxHelper(this.root.right);
  }
};

// Helper functions
function searchHelper(node, data) {
  if (node?.data === data) {
    return true;
  } else if (node?.data < data) {
    if (node.right) {
      return searchHelper(node.right, data);
    } else {
      console.log("node", node);
      return false;
    }
  } else if (node?.data > data) {
    if (node.left) {
      return searchHelper(node.left, data);
    } else {
      return false;
    }
  } else {
    console.log("Something has gone terribly wrong while searching");
    return;
  }
}

function findMinHelper(node) {
  if (node.left === null) {
    // if there's no left, this is the minimum
    return node.data;
  } else {
    // o/w continue down left side of tree
    findMinHelper(node.left);
  }
}

function findMaxHelper(node) {
  if (node.right === null) {
    // if there's no right, this is the max
    return node.data;
  } else {
    // o/w continue down right side of tree
    return findMaxHelper(node.right);
  }
}

export default BST;
