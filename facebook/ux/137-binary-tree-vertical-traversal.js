/*
(https://bigfrontend.dev/problem/binary-tree-vertical-traversal) OR (https://leetcode.com/problems/binary-tree-vertical-order-traversal/description/)

*/

// This is the class for the node
// you can use this directly as it is bundled with your code

// class Node {
//   value: number
//   left: null | Node
//   right: null | Node
//   constructor(val) {
//     this.value = val
//     this.left = null
//     this.right = null
//   }
// }

/**
 * @param {Node} root
 * @returns {number[]}
 */
function traverse(root) {
  if (!root) return null;

  const queue = [{ node: root, depth: 0 }];
  let res = {};

  while (queue.length > 0) {
    const { node, depth } = queue.shift();

    // DO SOME PROCESSING HERE
    if (res[depth]) {
      res[depth].push(node.value);
    } else {
      res[depth] = [node.value];
    }

    if (node.left) queue.push({ node: node.left, depth: depth - 1 });
    if (node.right) queue.push({ node: node.right, depth: depth + 1 });
  }

  return Object.keys(res)
    .sort((a, b) => a - b)
    .map((k) => res[k])
    .flat();
}


const el = <div>
 <h1> this is </h1>
 <p className="paragraph"> a <button> button </button> from <a href="https://bfe.dev"><b>BFE</b>.dev</a>
 </p>
</div>;

console.log(el)


{
  type: 'div',
  props: {
    children: [
      {
        type: 'h1',
        props: {
          children: ' this is '
        }
      },
      {
        type: 'p',
        props: {
          className: 'paragraph',
          children: [
            ' a ',
            {
              type: 'button',
              props: {
                children: ' button '
              }
            },
            ' from',
            {
              type: 'a',
              props: {
                href: 'https://bfe.dev',
                children: [
                  {
                    type: 'b',
                    props: {
                      children: 'BFE'
                    }
                  },
                  '.dev'
                ]
              }
            }
          ]
        }
      }
    ]
  }
}




const t = { 0: id, 1: class, 2: data-value, id: id, class: class, data-value: data-value, length: 3 }
