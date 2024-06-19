/*
You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}

Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.

Example:
Input: root = [1,2,3,4,5,6,7]
Output: [1,#,2,3,#,4,5,6,7,#]
Explanation: Given the above perfect binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.next = null;
  }
}

const three = new Node(3);
const nine = new Node(9);
const twenty = new Node(20);
const fifteen = new Node(15);
const seven = new Node(7);
const four = new Node(4);
const five = new Node(5);

three.left = nine;
three.right = twenty;
twenty.left = fifteen;
twenty.right = seven;
nine.left = four;
nine.right = five;

//     3
//   9     20
// 4  5   15  7

const connect = (root) => {
  if (!root) return [];

  const queue = [root];

  while (queue.length > 0) {
    const current = queue.shift();

    // calc here

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
};
