/*
**** MINIMUM SIZE SUBARRAY SUM (https://leetcode.com/problems/minimum-size-subarray-sum/solutions/2657137/sliding-window-dynamic-approach-o-n-o-n-k-javascript)

Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

Example:
Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.
*/

const target = 7,
  nums = [2, 3, 1, 2, 4, 3];

const minSubArrayLen = (target, nums) => {

  // nums = [2, 3, 1, 2, 4, 3];

  let minLength = Number.POSITIVE_INFINITY;
  let sum = (start = end = 0);
  while (end < nums.length) {
    elem = nums[end];
    if (elem >= target) return 1;

    sum += elem;

    if (sum >= target) {
      while (sum >= target) {
        sum -= nums[start];
        start++;
      }
      minLength = Math.min(minLength, end + 2 - start);
    }
    end++;
  }

  return minLength === Number.POSITIVE_INFINITY ? 0 : minLength;
};

console.log(minSubArrayLen(target, nums));
