/*
*** NESTED LIST WEIGHT SUM (https://leetcode.com/problems/nested-list-weight-sum/description/)

You are given a nested list of integers nestedList. Each element is either an integer or a list whose elements may also be integers or other lists.

The depth of an integer is the number of lists that it is inside of. For example, the nested list [1,[2,2],[[3],2],1] has each integer's value set to its depth.

Return the sum of each integer in nestedList multiplied by its depth.

Example:
Input: nestedList = [[1,1],2,[1,1]]
Output: 10
Explanation: Four 1's at depth 2, one 2 at depth 1. 1*2 + 1*2 + 2*1 + 1*2 + 1*2 = 10.
*/

const depthSum = function (nestedList) {
  let sum = 0;

  let queue = [{ nest: nestedList, depth: 1 }];

  while (queue.length > 0) {
    let { nest, depth } = queue.shift();

    for (let index = 0; index < nest.length; index++) {
      let element = nest[index];

      if (!Array.isArray(element)) {
        sum += depth * element;
      } else {
        queue.push({ nest: nest[index], depth: depth + 1 });
      }
    }
  }
  return sum;
};

console.log(depthSum([[1, 1], 2, [1, 1]]));
