/*
****BINARY TREE VERTICAL ORDER (https://leetcode.com/problems/binary-tree-vertical-order-traversal/description/)


Given the root of a binary tree, return the vertical order traversal of its nodes' values. (i.e., from top to bottom, column by column).

If two nodes are in the same row and column, the order should be from left to right.

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

three.left = nine;
three.right = twenty;
twenty.left = fifteen;
twenty.right = seven;

//     3
//  9     20
//      15  7

const verticalOrder = (root) => {
  if (!root) return [];

  const map = {};

  const queue = [{ node: root, slot: 0 }];

  while (queue.length > 0) {
    const { node, slot } = queue.shift();

    map[slot] = map[slot] ? [...map[slot], node.val] : [node.val];

    if (node.left) queue.push({ node: node.left, slot: slot - 1 });
    if (node.right) queue.push({ node: node.right, slot: slot + 1 });
  }

  return Object.keys(map)
    .sort((a, b) => a - b)
    .map((k) => map[k]);
};

console.log(verticalOrder(three));
