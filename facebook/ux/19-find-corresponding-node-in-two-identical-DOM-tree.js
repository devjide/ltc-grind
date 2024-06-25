/* (https://bigfrontend.dev/problem/find-corresponding-node-in-two-identical-DOM-tree) */

/**
 * @param {HTMLElement} rootA
 * @param {HTMLElement} rootB - rootA and rootB are clone of each other
 * @param {HTMLElement} nodeA
 */
// Iteratively
const findCorrespondingNode = (rootA, rootB, target) => {
  if (rootA === null || rootB === null) return null;

  // Initialize queues for BFS
  let queue1 = [rootA];
  let queue2 = [rootB];

  while (queue1.length > 0) {
    let node1 = queue1.shift();
    let node2 = queue2.shift();

    // Check if the current node in the first tree is the target node
    if (node1 === target) {
      return node2;
    }

    // Enqueue children
    let children1 = node1.children;
    let children2 = node2.children;

    for (let i = 0; i < children1.length; i++) {
      queue1.push(children1[i]);
      queue2.push(children2[i]);
    }
  }

  return null; // In case the target node is not found
};

// Recursively
function findCorrespondingNode(root1, root2, target) {
  // Base case
  if (root1 === null || root2 === null) return null;

  // If the current nodes are the same as the target node
  if (root1 === target) return root2;

  // Recurse on children
  let children1 = root1.children;
  let children2 = root2.children;

  for (let i = 0; i < children1.length; i++) {
    let result = findCorrespondingNode(children1[i], children2[i], target);
    if (result) return result;
  }

  return null;
}

// Example usage:
const tree1 = document.getElementById("root1"); // Root of the first tree
const tree2 = document.getElementById("root2"); // Root of the second tree
const targetNode = tree1.querySelector(".target-node-class"); // Target node in the first tree

const correspondingNode = findCorrespondingNodeIteratively(
  tree1,
  tree2,
  targetNode
);
console.log(correspondingNode); // Corresponding node in the second tree
