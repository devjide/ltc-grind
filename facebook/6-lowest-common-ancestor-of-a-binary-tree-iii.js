/*
1650. Lowest Common Ancestor of a Binary Tree III (https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/description/)


Given two nodes of a binary tree p and q, return their lowest common ancestor (LCA).

Each node will have a reference to its parent node. The definition for Node is below:

class Node {
    public int val;
    public Node left;
    public Node right;
    public Node parent;
}
According to the definition of LCA on Wikipedia: "The lowest common ancestor of two nodes p and q in a tree T is the lowest node that has both p and q as descendants (where we allow a node to be a descendant of itself)."


Example 1:
https://assets.leetcode.com/uploads/2018/12/14/binarytree.png
Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3
Explanation: The LCA of nodes 5 and 1 is 3.
*/

const lowestCommonAncestor = (p, q) => {
  let seen = new Set();

  while (p) {
    seen.add(p);
    p = p.parent;
  }

  while (q) {
    if (seen.has(q)) {
      return q;
    } else {
      q = q.parent;
    }
  }
};

const lowestCommonAncestorOptimal = (p, q) => {
  let pCopy = p;
  let qCopy = q;

  while (pCopy !== qCopy) {
    pCopy = pCopy ? pCopy.parent : q;
    qCopy = qCopy ? qCopy.parent : p;
  }

  return pCopy;
};

// console.log(lowestCommonAncestor())
