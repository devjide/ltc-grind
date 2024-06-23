/*
1762. Buildings With an Ocean View  (https://leetcode.com/problems/buildings-with-an-ocean-view/description/)

There are n buildings in a line. You are given an integer array heights of size n that represents the heights of the buildings in the line.

The ocean is to the right of the buildings. A building has an ocean view if the building can see the ocean without obstructions. Formally, a building has an ocean view if all the buildings to its right have a smaller height.

Return a list of indices (0-indexed) of buildings that have an ocean view, sorted in increasing order.


Example 1:
Input: heights = [4,2,3,1]
Output: [0,2,3]
Explanation: Building with height 2 (index 1) does not have an ocean view because building at index 2 (height 3) is taller and blocking the ocean view.

Example 2:
Input: heights = [4,3,2,1]
Output: [0,1,2,3]
Explanation: All the buildings have an ocean view.


*/

const findBuildings = function (heights) {
  let res = [];
  let max = 0;
  for (let index = heights.length - 1; index >= 0; index--) {
    const height = heights[index];

    if (height > max) {
      res.push(index);
    }
    max = Math.max(height, max);
  }
  return res.reverse();
};

console.log(findBuildings([4, 3, 2, 1]));
