/* https://bigfrontend.dev/problem/get-DOM-tags */

/**
 * @param {HTMLElement} tree
 * @return {string[]}
 */
function getTags(tree) {
  if (!tree) return null;

  let res = new Set();

  let queue = [tree];

  while (queue.length > 0) {
    const node = queue.shift();

    if (node.nodeType === 1) {
      res.add(node.tagName.toLowerCase());
    }
    for (let i = 0; i < node.children.length; i++) {
      const element = node.children[i];
      queue.push(element);
    }
  }
  return Array.from(res);
}
