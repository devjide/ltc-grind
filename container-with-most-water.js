/*
CONTAINER WITH MOST WATER

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
Find two lines that together with the x-axis form a container, such that the container contains the most water.
Return the maximum amount of water a container can store.
Notice that you may not slant the container.

Example:
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
*/

const myGetMaxWaterSolution = (height) => {
  let maxArea = 0;
  for (let a = 0; a < height.length; a++) {
    for (let b = a + 1; b < height.length; b++) {
      const length = Math.min(height[a], height[b]);
      const breadth = b - a;
      const area = length * breadth;
      maxArea = Math.max(maxArea, area);
    }
  }
  console.log(maxArea, "!solution");
  return maxArea;
};

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// myGetMaxWaterSolution(height);

// Failed solution
const attemptingOptimalSolution = (height) => {
  let maxArea = 0;
  const lastPointer = height[height.length - 1];
  for (a = 0; a < height.length; a++) {
    const length = Math.min(height[a], lastPointer);
    const breadth = height.length - 1 - a;
    maxArea = Math.max(maxArea, length * breadth);
  }
  console.log(maxArea, "!solution");
  return maxArea;
};

attemptingOptimalSolution(height);

const getMaxWaterContainerSolution = (heights) => {
  let p1 = 0,
    p2 = heights.length - 1,
    maxArea = 0;

  while (p1 < p2) {
    const height = Math.min(heights[p1], heights[p2]);
    const width = p2 - p1;
    const area = height * width;
    maxArea = Math.max(maxArea, area);

    if (heights[p1] <= heights[p2]) {
      p1++;
    } else {
      p2--;
    }
  }
  console.log(maxArea, "!solution");
  return maxArea;
};

getMaxWaterContainerSolution(height);
