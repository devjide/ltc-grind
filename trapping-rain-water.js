/*
** TRAPPING RAIN WATER: (https://leetcode.com/problems/trapping-rain-water/description)

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
*/

const height = [4, 2, 0, 3, 2, 5];

const myTrappingWaterSolution = (height) => {
  let totalTrappedWater = 0;
  for (let index = 0; index < height.length; index++) {
    let maxL = 0,
      maxR = 0;
    const rightArray = height.slice(index + 1, height.length + 1);
    const leftArray = height.slice(0, index);
    const currentWaterHeight = height[index];
    maxR = Math.max(...rightArray, maxR);
    maxL = Math.max(...leftArray, maxL);
    const currentWater = Math.min(maxL, maxR) - currentWaterHeight;
    if (currentWater >= 0) {
      totalTrappedWater += currentWater;
    }
  }
  return totalTrappedWater;
};

console.log(myTrappingWaterSolution(height));

const trappingWater = (height) => {
  let left = 0,
    right = height.length - 1,
    maxLeft = 0,
    maxRight = 0,
    totalWater = 0;

  while (left < right) {
    if (height[left] <= height[right]) {
      if (height[left] >= maxLeft) {
        maxLeft = height[left];
      } else {
        totalWater += maxLeft - height[left];
      }
      left++;
    } else {
      if (height[right] >= maxRight) {
        maxRight = height[right];
      } else {
        totalWater += maxRight - height[right];
      }
      right--;
    }
  }
  return totalWater;
};


console.log(trappingWater(height))