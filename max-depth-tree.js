class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const five = new Node(5);
const four = new Node(4);
const six = new Node(6);
const three = new Node(3);
const eight = new Node(8);

five.left = four;
five.right = six;
four.left = three;
four.right = eight;

//     5
//  4     6
//3  8

const treeMaxDepth = (root) => {
  if (root === null) return 0;
  let answer = 0;

  const stack = [{ node: root, count: 1 }];

  if (root.left === null && root.right === null) return 0;

  while (stack.length > 0) {
    const { node, count } = stack.pop();

    answer = Math.max(count, answer);

    if (node.right) stack.push({ node: node.right, count: count + 1 });
    if (node.left) stack.push({ node: node.left, count: count + 1 });
  }
  return answer - 1;
};

// console.log(treeMaxDepth(five));

const treeMaxDepthRecursion = (root) => {
  if (root === null) return 0;

  if(!root.right && !root.left) return 0

  const left = treeMaxDepthRecursion(root.left); //[4,3, 8]
  const right = treeMaxDepthRecursion(root.right); // [6]

  const val = Math.max(left, right) + 1;

  return val;
};

console.log(treeMaxDepthRecursion(five));
