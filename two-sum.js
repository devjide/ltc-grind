/*
****TWO SUM****
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
*/

// [2,7,11,15] // 9
// [3,2,4] // 6

const x = [3, 3];
const y = 6;

const findTwoSumMySolution = (array, target) => {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    const value = target - element;
    if (array.includes(value) && array.indexOf(value) !== index) {
      console.log([index, array.indexOf(value)], "!solution");
      return [index, array.indexOf(value)];
    }
  }
  console.log(null, "!solution");
  return null;
};

const findTwoSumSolution = function (nums, target) {
  for (let p1 = 0; p1 < nums.length; p1++) {
    const numberToFind = target - nums[p1];
    for (let p2 = p1 + 1; p2 < nums.length; p2++) {
      if (numberToFind === nums[p2]) {
        console.log([p1, p2], "!solution");
        return [p1, p2];
      }
    }
  }
  console.log(null, "!solution");
  return null;
};

const findTwoSumOptimalSolution = function (nums, target) {
  const numsMap = {};
  for (let p = 0; p < nums.length; p++) {
    const currentMapVal = numsMap[nums[p]];

    if (currentMapVal >= 0) {
      console.log([currentMapVal, p], "!solution");
      return [currentMapVal, p];
    } else {
      const numberToFind = target - nums[p];
      numsMap[numberToFind] = p;
    }
  }
  console.log(null, "!solution");
  return null;
};

findTwoSumOptimalSolution(x, y);
