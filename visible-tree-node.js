class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function isMaxInArray(array, value) {
  if (array.length === 0) return false;

  for (let i = 0; i < array.length; i++) {
    if (value < array[i]) {
      return false;
    }
  }

  return true;
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

const visibleTreeNodeIterative = (root) => {
  if (!root) return 0;

  let stack = [{ node: root, seen: [root.val] }];
  let answer = 0;

  while (stack.length > 0) {
    const { node, seen } = stack.pop();

    if (isMaxInArray(seen, seen[seen.length - 1])) answer++;

    if (node.right) {
      stack.push({ node: node.right, seen: [...seen, node.right.val] });
    }

    if (node.left)
      stack.push({ node: node.left, seen: [...seen, node.left.val] });
  }
  return answer;
};

console.log(visibleTreeNodeIterative(five));

const countGoodNodes = (root) => {
  if (!root) return 0;

  let stack = [{ node: root, maxSoFar: root.val }];
  let goodNodeCount = 0;

  while (stack.length > 0) {
    const { node, maxSoFar } = stack.pop();

    // A node is "good" if its value is greater than or equal to the max value seen so far in the path.
    if (node.val >= maxSoFar) {
      goodNodeCount++;
    }

    // Update the max value seen so far for the children nodes
    const newMax = Math.max(maxSoFar, node.val);

    // Add the right child to the stack if it exists
    if (node.right) {
      stack.push({ node: node.right, maxSoFar: newMax });
    }

    // Add the left child to the stack if it exists
    if (node.left) {
      stack.push({ node: node.left, maxSoFar: newMax });
    }
  }

  return goodNodeCount;
};

const visibleTreeNodeRecursion = (root) => {
  // Helper function to perform the DFS
  const dfs = (node, maxSoFar) => {
    if (node === null) return 0; // Base case: no node to process

    let goodNodeCount = 0;

    // Check if the current node is a "good" node
    if (node.val >= maxSoFar) {
      goodNodeCount = 1; // Current node is good
    }

    // Update the max value seen so far
    const newMax = Math.max(maxSoFar, node.val);

    // Recur for left and right children
    goodNodeCount += dfs(node.left, newMax);
    goodNodeCount += dfs(node.right, newMax);

    return goodNodeCount;
  };

  // Start the DFS with the root node and its value as the initial max value
  return dfs(root, root.val);
};
