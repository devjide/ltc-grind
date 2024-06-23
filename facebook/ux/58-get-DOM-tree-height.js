/*
https://bigfrontend.dev/problem/get-DOM-tree-heightget-DOM-tree-height
*/

function getDomTreeHeight(root) {
  if (!root) return 0;

  let queue = [{ node: root, depth: 1 }];
  let maxDepth = 0;

  while (queue.length > 0) {
    // Extract the first element in the queue
    let { node, depth } = queue.shift();

    // Update max depth
    maxDepth = Math.max(maxDepth, depth);

    // Iterate through all child nodes
    for (let i = 0; i < node.children.length; i++) {
      queue.push({ node: node.children[i], depth: depth + 1 });
    }
  }

  return maxDepth;
}

// Example usage:
const body = document.body;
console.log(getDomTreeHeight(body));
