class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function insertBst(bst, val) {
  // If the tree is empty, create a new node and return it
  if (bst === null) {
    return new Node(val);
  }

  // Start from the root and traverse the tree
  let current = bst;
  while (true) {
    // If the value to insert is less than the current node's value, go to the left subtree
    if (val < current.val) {
      // If there is no left child, insert the new node here
      if (current.left === null) {
        current.left = new Node(val);
        break;
      } else {
        // Move to the left child and continue
        current = current.left;
      }
    } else {
      // If the value to insert is greater than or equal to the current node's value, go to the right subtree
      if (current.right === null) {
        current.right = new Node(val);
        break;
      } else {
        // Move to the right child and continue
        current = current.right;
      }
    }
  }

  // Return the unchanged tree
  return bst;
}







