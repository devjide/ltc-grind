/* https://bigfrontend.dev/problem/Traverse-DOM-level-by-level */

function flatten(root) {
  let res = [];
  if (!root) return res;

  let queue = [root];

  while (queue.length > 0) {
    let node = queue.shift();

    res.push(node);

    for (let index = 0; index < node.children.length; index++) {
      const element = node.children[index];
      queue.push(element);
    }
  }

  return res;
}
