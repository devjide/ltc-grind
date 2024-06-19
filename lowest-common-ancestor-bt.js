/*
*** Lowest Common Ancestor of a Binary Tree III (https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/description/)

Given two nodes of a binary tree p and q, return their lowest common ancestor (LCA). Each node will have a reference to its parent node. The definition for Node is below:

class Node {
    public int val;
    public Node left;
    public Node right;
    public Node parent;
}

According to the definition of LCA on Wikipedia: "The lowest common ancestor of two nodes p and q in a tree T is the lowest node that has both p and q as descendants (where we allow a node to be a descendant of itself)."

Example:
Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3
Explanation: The LCA of nodes 5 and 1 is 3.

*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const three = new Node(3);
const five = new Node(5);
const one = new Node(1);
const six = new Node(6);
const two = new Node(2);
const zero = new Node(0);
const eight = new Node(8);
const seven = new Node(7);
const four = new Node(4);

three.left = five;
three.right = one;
five.left = six;
five.right = two;
one.left = zero;
one.right = eight;
two.left = seven;
two.right = four;

const findFirstSimilarNumber = (obj) => {
  const reversedP = [...obj.p].reverse();
  const reversedQ = [...obj.q].reverse();
  const seen = new Set();
  for (let num of reversedP) {
    seen.add(num);
  }
  for (let num of reversedQ) {
    if (seen.has(num)) {
      return num;
    }
  }

  return false;
};

const lowestCommonAncestor = (root, p, q) => {
  if (!root) return null;

  const reference = {
    p: [],
    q: [],
  };
  const stack = [{ node: root, seen: [root.val] }];

  while (stack.length > 0) {
    const { node, seen } = stack.pop();

    if (node.val === p) {
      reference.p = seen;
    } else if (node.val === q) {
      reference.q = seen;
    }

    if (node.right) {
      stack.push({ node: node.right, seen: [...seen, node.right.val] });
    }

    if (node.left) {
      stack.push({ node: node.left, seen: [...seen, node.left.val] });
    }
  }

  return findFirstSimilarNumber(reference);
};

console.log(lowestCommonAncestor(three, 5, 4));

const you = () => {
  const ref = {
    p: [1,2,3,4,5],
    q: [4,5]
  }

  console.log(p, q)
};


you()