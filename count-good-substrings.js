/*
*** Substrings of Size Three with Distinct Characters (https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/description/)


A string is good if there are no repeated characters. Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.

Note that if there are multiple occurrences of the same substring, every occurrence should be counted.
A substring is a contiguous sequence of characters in a string.

Example:
Input: s = "xyzzaz"
Output: 1
Explanation: There are 4 substrings of size 3: "xyz", "yzz", "zza", and "zaz".
The only good substring of length 3 is "xyz".

*/

const s = "aababcabc";

const myCountGoodSubstringsSolution = (s) => {
  let left = 0;
  let right = 3;
  let count = 0;

  while (right < s.length + 1) {
    let t = s.slice(left, right);
    let store = "";
    let y = t.split("");
    y.map((val) => {
      if (!store.includes(val)) {
        store += val;
      } else {
        store = "";
        return;
      }
    });
    if (store.length === 3) count++;
    store = "";
    left++;
    right++;
  }

  return count;
};

console.log(myCountGoodSubstringsSolution(s));

/**
 * @param {string} s
 * @return {number}
 *
 * Keywords:
 * - substring -> sliding window
 * - of sized three -> fixed size
 * - distinct characters -> set
 */
const countGoodSubstrings = function (s) {
  let good = 0;

  // Sliding window of fixed size 3, starting from beginning of string
  for (let left = 0; left < s.length - 2; left++) {
    // Put characters from window into a Set
    const window = [s[left], s[left + 1], s[left + 2]];
    const chars = new Set(window);

    // If each character is distinct, then the Set should be size 3,
    // which would make it a good substring
    if (chars.size === 3) good++;
  }
  return good;
};


console.log(countGoodSubstrings(s))