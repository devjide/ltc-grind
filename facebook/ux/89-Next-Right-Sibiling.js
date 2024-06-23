/* https://bigfrontend.dev/problem/Next-Right-Sibiling */

function getNextRightSiblingBFS(root, targetElement) {
  if (!root || !targetElement) return null;

  let queue = [root];

  while (queue.length > 0) {
    let levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift();

      // If we found the target element, the next node in the queue (if any) is its right sibling
      if (node === targetElement) {
        return i < levelSize - 1 ? queue[0] : null;
      }

      // Add children to the queue for the next level
      for (let child of node.children) {
        queue.push(child);
      }
    }
  }

  return null;
}

// Example usage:
const rootElement = document.documentElement; // Starting from the root of the document
const targetElement = document.querySelector("#targetElementId"); // Replace with your target element selector
const nextSibling = getNextRightSiblingBFS(rootElement, targetElement);
console.log(nextSibling);
