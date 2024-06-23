/*
(https://bigfrontend.dev/problem/serialize-and-deserialize-binary-tree) OR (https://leetcode.com/problems/serialize-and-deserialize-binary-tree/description/)
*/

var serializeBFS = function (root) {
  let stack = [],
    serialize = [];
  if (root == null) return [];
  stack.push(root);
  while (stack.length > 0) {
    let node = stack.shift();
    serialize.push(node ? node.val : null);
    if (node != null) {
      stack.push(node.left);
      stack.push(node.right);
    }
  }
  return serialize;
};

var deserializeBFS = function (data) {
  if (data[0] == null) return null;
  let node = new TreeNode(data.shift());
  let stack = [node];
  while (stack.length > 0) {
    let node = stack.shift();
    left = data.shift();
    right = data.shift();
    node.left = left == null ? null : new TreeNode(left);
    node.right = right == null ? null : new TreeNode(right);
    if (node.left != null) stack.push(node.left);
    if (node.right != null) stack.push(node.right);
  }
  return node;
};
