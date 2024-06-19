/*
*** SORT COLORS (https://leetcode.com/problems/sort-colors/description)

Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue. We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

Example:
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]

*/

const nums = [2, 0, 2, 1, 1, 0];
const sortColors = (nums) => {
  for (var i = 0; i < nums.length; i++) {
    let current = i;
    // gets the smallest element and inserts at current index
    while (current > 0 && nums[current] < nums[current - 1]) {
      const temp = nums[current];
      // swaps current smaller element with the element before it
      nums[current] = nums[current - 1];
      nums[current - 1] = temp;
      current--;
    }
  }
  return nums;
};

console.log(sortColors(nums));

const insertSort = (nums) => {
  for (let index = 0; index < nums.length; index++) {
    let currentIndex = index;
    let element = nums[index];
    while (currentIndex > 0 && element < nums[currentIndex - 1]) {
      let temp = nums[currentIndex];
      nums[currentIndex] = nums[currentIndex - 1];
      nums[currentIndex - 1] = temp;
      currentIndex--;
    }
  }
  return nums;
};

console.log(insertSort([5, 3, 9, 1, 2, 4]));

const selectionSort = (nums) => {
  for (let index = 0; index < nums.length; index++) {
    let minIndex = index;

    for (let j = index; j < nums.length; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j;
      }
    }

    [nums[index], nums[minIndex]] = [nums[minIndex], nums[index]];
  }
  return nums;
};

console.log(selectionSort([5, 9, 0, 2, 1, 4]));
