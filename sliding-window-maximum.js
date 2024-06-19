/*
*** SLIDING WINDOW MAXIMUM (https://leetcode.com/problems/sliding-window-maximum/)

You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.
Return the max sliding window.

Example:
Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
*/

const nums = [1, 3, -1, -3, 5, 3, 6, 7],
  k = 3;
const maxSlidingWindow = (nums, k) => {
  const q = []; // stores *indices*
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    while (q && nums[q[q.length - 1]] <= nums[i]) {
      q.pop();
    }
    q.push(i);
    // remove first element if it's outside the window
    if (q[0] === i - k) {
      q.shift();
    }
    // if window has k elements add to results (first k-1 windows have < k elements because we start from empty window and add 1 element each iteration)
    if (i >= k - 1) {
      res.push(nums[q[0]]);
    }
  }
  return res;
};

console.log(maxSlidingWindow(nums, k));
