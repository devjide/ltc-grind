/*
215. Kth Largest Element in an Array (https://leetcode.com/problems/kth-largest-element-in-an-array/description/)

Given an integer array nums and an integer k, return the kth largest element in the array.

Note that it is the kth largest element in the sorted order, not the kth distinct element.

Can you solve it without sorting?

Example 1:
Input: nums = [3,2,1,5,6,4], k = 2
Output: 5
*/

var findKthLargest = function (nums, k) {
  const partition = (left, right, pivotIndex) => {
    const pivot = nums[pivotIndex];
    [nums[pivotIndex], nums[right]] = [nums[right], nums[pivotIndex]];
    let storedIndex = left;
    for (let i = left; i < right; i++) {
      if (nums[i] < pivot) {
        [nums[storedIndex], nums[i]] = [nums[i], nums[storedIndex]];
        storedIndex++;
      }
    }
    [nums[right], nums[storedIndex]] = [nums[storedIndex], nums[right]];
    return storedIndex;
  };

  let left = 0,
    right = nums.length - 1;
  while (true) {
    const pivotIndex = left + Math.floor(Math.random() * (right - left + 1));
    const newPivotIndex = partition(left, right, pivotIndex);
    if (newPivotIndex === nums.length - k) {
      return nums[newPivotIndex];
    } else if (newPivotIndex > nums.length - k) {
      right = newPivotIndex - 1;
    } else {
      left = newPivotIndex + 1;
    }
  }
};
