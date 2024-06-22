/*
680. Valid Palindrome II (https://leetcode.com/problems/valid-palindrome-ii/description/)

Given a string s, return true if the s can be palindrome after deleting at most one character from it.

Example 1:
Input: s = "aba"
Output: true
*/

const validPalindrome = function (s) {
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    if (s[start] !== s[end]) {
      return isPalindrome(s, start + 1, end) || isPalindrome(s, start, end - 1);
    }
    start++;
    end--;
  }

  function isPalindrome(str, start, end) {
    while (start < end) {
      if (str[start] !== str[end]) {
        return false;
      }
      start++;
      end--;
    }
    return true;
  }

  return true;
};

console.log(validPalindrome("abca"));
