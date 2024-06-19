/*
 Diameter of Binary Tree (https://leetcode.com/problems/diameter-of-binary-tree/description/)

 Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them.

Example 1:
Input: root = [1,2,3,4,5]
Output: 3
Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].

Example 2:
Input: root = [1,2]
Output: 1
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

const diameterOfBinaryTree = (root) => {

  
};
