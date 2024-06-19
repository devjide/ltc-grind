class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
const g = new Node("g");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// console.log(b, "b");
// console.log(c, "c");
// console.log(d, "d");
// console.log(e, "e");

//     a
//  b     c
//d  e      f

const depthFirstSearchIterativeSolution = (root) => {
  // Time is O(n) & Space is O(n)
  let result = [];
  if (root === null) return result;
  let stack = [root];

  while (stack.length > 0) {
    let current = stack.pop();
    result.push(current.val);
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
  return result;
};

// console.log(depthFirstSearchIterativeSolution(a));

const depthFirstSearchRecursiveSolution = (root) => {
  // Time is O(n) & Space is O(n)
  if (root === null) return [];

  const leftValues = depthFirstSearchRecursiveSolution(root.left); // [b, d, e]
  const rightValues = depthFirstSearchRecursiveSolution(root.right); // [c, f]

  return [root.val, ...leftValues, ...rightValues];
};

// console.log(depthFirstSearchRecursiveSolution(a));

const breadthFirstSearchIterativeSolution = (root) => {
  // Time is O(n) & Space is O(n)
  let result = [];
  if (root === null) return result;

  let queue = [root];

  while (queue.length > 0) {
    const current = queue.shift();
    result.push(current.val);
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return result;
};

// console.log(breadthFirstSearchIterativeSolution(a));

const treeIncludes = (root, target) => {
  if (root === null) return false;
  if (root.val === target) return true;
  return treeIncludes(root.left, target) || treeIncludes(root.right, target);
};

// console.log(treeIncludes(a, "e"));

const three = new Node(3);
const eleven = new Node(11);
const four = new Node(4);
const four_down = new Node(4);
const two = new Node(2);
const one = new Node(1);

three.left = eleven;
three.right = four;
eleven.left = four_down;
eleven.right = two;
four.right = one;

//     3
//  11     4
//4  2      1

const sumOfNodesIterative = (root) => {
  let sum = 0;
  if (root === null) return sum;

  let stack = [root];
  while (stack.length > 0) {
    let current = stack.pop();
    sum += current.val;

    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }
  return sum;
};

// console.log(sumOfNodesIterative(three));

const sumOfNodesRecursive = (root) => {
  if (root === null) return 0;

  const left = sumOfNodesRecursive(root.left);
  const right = sumOfNodesRecursive(root.right);

  return root.val + left + right;
};

// console.log(sumOfNodesRecursive(three));

const minimumNodeRecusive = (root) => {
  if (root === null) return Infinity;

  const left = minimumNodeRecusive(root.left);
  const right = minimumNodeRecusive(root.right);

  return Math.min(root.val, left, right);
};

// console.log(minimumNodeRecusive(three));

const maxRootToLeaf = (root) => {
  if (root === null) return 0;

  if (root.left === null && root.right === null) return root.val;

  const left = maxRootToLeaf(root.left);
  const right = maxRootToLeaf(root.right);

  const maxChild = Math.max(left, right);
  return root.val + maxChild;
};

// console.log(maxRootToLeaf(three));
//     3
//  11     4
//4  2      1
const maxRootToLeafIterative = (root) => {
  if (root === null) return -Infinity;

  let maxSum = -Infinity;

  const stack = [{ node: root, sum: root.val }];

  while (stack.length > 0) {
    const { node, sum } = stack.pop();

    // If the node is a leaf, update the maxSum
    if (node.left === null && node.right === null) {
      maxSum = Math.max(maxSum, sum);
    }

    // If the node has a right child, push it to the stack with the updated sum
    if (node.right) stack.push({ node: node.right, sum: sum + node.right.val });

    // If the node has a left child, push it to the stack with the updated sum
    if (node.left) stack.push({ node: node.left, sum: sum + node.left.val });
  }

  return maxSum;
};

console.log(maxRootToLeafIterative(three));


// console.log(mrl(three));

//     3
//  11     4
//4  2      1

const treeMaxDepth = (root) => {
  if (root === null) return 0;

  if (root.left === null && root.right === null) return -1;

  const left = treeMaxDepth(root.left);
  const right = treeMaxDepth(root.right);

  return Math.max(left, right) + 1;
};

// console.log(treeMaxDepth(three));
