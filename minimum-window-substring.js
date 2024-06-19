/*
***MINIMUM WINDOW SUBSTRING (https://leetcode.com/problems/minimum-window-substring/description/)
Given two strings s and t of lengths m and n respectively, return the minimum window
substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.


Example:
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

*/

function deepEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }

  if (
    obj1 === null ||
    typeof obj1 !== "object" ||
    obj2 === null ||
    typeof obj2 !== "object"
  ) {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}

const s = "ADOBECODEBANC",
  t = "ABC";
const minWindow = (s, t) => {
  /*
    - Use a sliding window with 2 pointers,
    - Move your pointers towards the end
    - Within your window, check if all the characters of t are present
    - If they are, check if the current length is lesser than the current length of the output variable
    - If it is, then store the output variable
    - Move the left and right pointer through the entire loop
    - Edge, if the length of the output substring is already equals to t then end loop early
  */

  let output = "";
  let left,
    right = 0;

  const p = {
    a: "1",
    b: "2",
  };

  const r = {
    a: "1",
    b: "2",
  };

  return deepEqual(p, r)
};

console.log(minWindow(s, t));
