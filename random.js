class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}


function inOrderTraversal(root) {
  if (root !== null) {
      inOrderTraversal(root.left);
      console.log(root.val);
      inOrderTraversal(root.right);
  }
}


// DFS
function preOrderTraversal(root) {
  if (root !== null) {
      console.log(root.val);
      preOrderTraversal(root.left);
      preOrderTraversal(root.right);
  }
}

function postOrderTraversal(root) {
  if (root !== null) {
      postOrderTraversal(root.left);
      postOrderTraversal(root.right);
      console.log(root.val);
  }
}