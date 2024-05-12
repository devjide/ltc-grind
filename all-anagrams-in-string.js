/*
*** FIND ALL ANAGRAMS IN A STRING (https://leetcode.com/problems/find-all-anagrams-in-a-string/)

Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example:
Input: s = "cbaebabacd", p = "abc"
Output: [0,6]
Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
*/

const s = "cbaebabacd";
const p = "abc";
const myFindAnagramsSolution = (s, p) => {
  let left = 0;
  let right = p.length - 1;
  let current = "";
  let position = [];

  while (right < s.length) {
    current = s.slice(left, right + 1);
    if (current.split("").sort().join("") === p.split("").sort().join("")) {
      position.push(left);
      left++;
      right++;
    } else {
      left++;
      right++;
    }
  }
  return position;
};

console.log(myFindAnagramsSolution(s, p));
