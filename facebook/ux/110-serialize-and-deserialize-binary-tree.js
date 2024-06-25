/*
(https://bigfrontend.dev/problem/serialize-and-deserialize-binary-tree) OR (https://leetcode.com/problems/serialize-and-deserialize-binary-tree/description/)
*/

var serializeBFS = function (root) {
  let serialized = [];
  if (root === null) return serialized;
  let queue = [root];
  while (queue.length > 0) {
    let node = queue.shift();
    serialized.push(node ? node.val : null);
    if (node != null) {
      queue.push(node.right);
      queue.push(node.left);
    }
  }
  return serialized.join("");
};

var deserializeBFS = function (data) {
  if (data[0] == null) return null;
  let node = new TreeNode(data.shift());
  let queue = [node];
  while (queue.length > 0) {
    let current = queue.shift();
    left = data.shift();
    right = data.shift();
    current.left = left == null ? null : new TreeNode(left);
    current.right = right == null ? null : new TreeNode(right);
    if (current.left != null) queue.push(current.left);
    if (current.right != null) queue.push(current.right);
  }
  return node;
};
