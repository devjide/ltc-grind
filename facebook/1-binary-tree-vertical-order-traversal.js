/*
*** 314. Binary Tree Vertical Order Traversal (https://leetcode.com/problems/binary-tree-vertical-order-traversal/description/)

Given the root of a binary tree, return the vertical order traversal of its nodes' values. (i.e., from top to bottom, column by column).

If two nodes are in the same row and column, the order should be from left to right.


Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: [[9],[3,15],[20],[7]]
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const three = new Node(3);
const nine = new Node(9);
const twenty = new Node(20);
const fifteen = new Node(15);
const seven = new Node(7);
const four = new Node(4);
const zero = new Node(0);

three.left = nine;
three.right = twenty;
nine.left = four;
nine.right = zero;
twenty.left = fifteen;
twenty.right = seven;

//     3
//  9    20
// 4 0 15  7

const verticalOrder = function (root) {
  if (!root) return null;

  let ref = {};

  const queue = [{ node: root, slot: 0 }];
  while (queue.length > 0) {
    const { node, slot } = queue.shift();

    if (ref[slot]) {
      ref[slot].push(node.val);
    } else {
      ref[slot] = [node.val];
    }

    if (node.left) queue.push({ node: node.left, slot: slot - 1 });
    if (node.right) queue.push({ node: node.right, slot: slot + 1 });
  }

  /* @TODO: Learn how to sort objects */
  return Object.keys(ref)
    .sort((a, b) => a - b)
    .map((k) => ref[k]);
};

console.log(verticalOrder(three));
