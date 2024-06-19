class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function isValidBST(root, min = -Infinity, max = Infinity) {
  // Base case: an empty tree is a valid BST
  if (root === null) {
    return true;
  }

  // The current node's value must be within the min and max range
  if (root.value <= min || root.value >= max) {
    return false;
  }

  // Recursively check the left and right subtree with updated min and max values
  return (
    isValidBST(root.left, min, root.value) &&
    isValidBST(root.right, root.value, max)
  );
}

// Example usage:
let root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(7);
root.right.left = new TreeNode(12);
root.right.right = new TreeNode(20);

console.log(isValidBST(root)); // Outputs: true

// Example of an invalid BST
let invalidRoot = new TreeNode(10);
invalidRoot.left = new TreeNode(5);
invalidRoot.right = new TreeNode(15);
invalidRoot.left.left = new TreeNode(2);
invalidRoot.left.right = new TreeNode(12); // Invalid value: should be <= 10

console.log(isValidBST(invalidRoot)); // Outputs: false
