/*
**** MAXIMUM AVERAGE SUBARRAY (https://leetcode.com/problems/maximum-average-subarray-i/)

You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

Example 1:

Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
*/

const nums = [1, 12, -5, -6, 50, 3],
  k = 4;

// Fixed length sliding window
const myFindMaxAverageSolution = (nums, k) => {
  let sum = 0;
  let maxAverage = -Infinity;

  // First, calculate the sum of the first 'k' elements
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  maxAverage = sum / k;

  // Now slide the window across the array and update the sum and maxAverage
  for (let i = k; i < nums.length; i++) {
    // Subtract the element going out of the window and add the new element
    sum = sum - nums[i - k] + nums[i];
    maxAverage = Math.max(maxAverage, sum / k);
  }
  return maxAverage;
};

console.log(myFindMaxAverageSolution(nums, k));