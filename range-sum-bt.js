/*
*** Range Sum of Binary Tree (https://leetcode.com/problems/range-sum-of-bst/description/)

Given the root node of a binary search tree and two integers low and high, return the sum of values of all nodes with a value in the inclusive range [low, high].

Example:
Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
Output: 32
Explanation: Nodes 7, 10, and 15 are in the range [7, 15]. 7 + 10 + 15 = 32.

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

var rangeSumBST = function (root, low, high) {
  if (!root) return null;
  let answer = 0;

  const queue = [root];

  while (queue.length > 0) {
    const current = queue.shift();

    if (current.val >= low && current.val <= high) answer += current.val;

    if (current.right) queue.push(current.right);
    if (current.left) queue.push(current.left);
  }

  return answer;
};

console.log(rangeSumBST(three, 7, 15)); // 31
