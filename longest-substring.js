/*
*** Longest Substring Without Repeating Characters (https://leetcode.com/problems/longest-substring-without-repeating-characters/description/)

Given a string s, find the length of the longest substring without repeating characters.
Example
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
*/

const s = "abcabcbb";
const myLongestSubstringSolution = (s) => {
  let checkerString = "";
  let counter = 0;
  let maxValue = 0;

  if (s.length === 0) return 0;
  for (let p1 = 0; p1 <= s.length; p1++) {
    const element = s.charAt(p1);
    checkerString += element;
    counter += 1;
    maxValue = Math.max(maxValue, counter);
    for (let p2 = p1 + 1; p2 <= s.length; p2++) {
      const secondElement = s.charAt(p2);
      if (!checkerString.includes(secondElement)) {
        checkerString += secondElement;
        counter += 1;
      } else {
        counter = 0;
        checkerString = "";
        break;
      }
      maxValue = Math.max(maxValue, counter);
    }
  }
  return maxValue;
};

console.log(myLongestSubstringSolution(s));

// Dynamic window length - with auxiliary data structure
const longestSubstring = (s) => {
  let set = new Set();
  let longestStr = 0;
  let left = 0;
  let right = 0;
  while (right < s.length) {
    let letter = s[right];
    if (!set.has(letter)) {
      set.add(letter);
      longestStr = Math.max(longestStr, set.size);
      right++;
    } else {
      set.delete(s[left]);
      left++;
    }
  }
  return longestStr;
};

console.log(longestSubstring(s));
