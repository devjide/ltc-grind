class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    // Initialize our Binary Tree node, using the Node Class
    const newNode = new Node(value);

    // We check to see if the root inside of our BinarySearchTree is empty
    // It would be null at the start, as you can see above
    // In that case, we want to set the root to the newNode we just initilaized
    if (this.root === null) {
      this.root = newNode;
    } else {
      // If the Binary Tree root is not empty and it contains a value,
      // That means theres already a root
      // We want to run a while loop, for a Balanced Binary Tree or a Binary search Tree
      // All larger values would be in the right
      // Smaller values woould be in the left as you can see below:
      //     9
      //  4     20
      //1  6  15  170
      let currentNode = this.root;
      while (true) {
        // If the root node is greater than value, then we want to move left
        if (currentNode.value > value) {
          // Left
          if (!currentNode.left) {
            // If theres no current node to the left then we want to make newNode our new currentNode to the left
            currentNode.left = newNode;
            return this;
          }
          // But if theres a currentNode, we want to update left again, till we get an empty slot.
          currentNode = currentNode.left;
        } else {
          // Right
          if (!currentNode.right) {
            // Same concept from above
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  lookup(value) {
    if (this.root === null) return false;

    let currentNode = this.root;

    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      } else if (currentNode.value < value) {
        currentNode = currentNode.right;
      } else if (currentNode.value > value) {
        currentNode = currentNode.left;
      }
      return false;
    }
  }

  remove(value) {}
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(traverse(tree.root));
// console.log(tree.lookup(20));
//     9
//  4     20
//1  6  15  170
function traverse(node) {
  const tree = {
    value: node.value,
  };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}



