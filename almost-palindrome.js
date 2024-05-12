/*
*** ALMOST PALINDROME: (https://leetcode.com/problems/valid-palindrome-ii/description/)

Given a string s, return true if the s can be palindrome after deleting at most one character from it.

Example 1:

Input: s = "raceacar"
Output: true
*/

// "reacacar" - true
// "abc" - false
const str = "cbbcc";

const validSubPalindrome = (s, left, right) => {
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

const almostPalindromeSolution = (s) => {
  const strippedString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  let left = 0,
    right = strippedString.length - 1;

  while (left < right) {
    if (strippedString.charAt(left) !== strippedString.charAt(right)) {
      return (
        validSubPalindrome(strippedString, left + 1, right) ||
        validSubPalindrome(strippedString, left, right-1)
      );
    }
    left++;
    right--;
  }
  return true;
};

console.log(almostPalindromeSolution(str));
