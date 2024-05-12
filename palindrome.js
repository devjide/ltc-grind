/*
*** VALID PALINDROME: (https://leetcode.com/problems/valid-palindrome/description/)

Given a string s, return true if it is a palindrome, or false otherwise.
Example:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
*/

/*
    This question can be solved by either:
    - Reversing a new string then see if the strings are equal
    - Using 2 pointers from a center
    - Using 2 pointers from both ends
*/

const s = "A man, a plan, a canal: Panama";
const validPalindromeSolution1 = (s) => {
  const strippedString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  let left = 0;
  right = strippedString.length - 1;

  while (left < right) {
    if (strippedString[left] !== strippedString[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};

console.log(validPalindromeSolution1(s));

const validPalindromeSolution2 = (s) => {
  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let rev = "";

  // generate a reverse string using a reverse for loop.
  for (let i = s.length - 1; i >= 0; i--) {
    rev += s[i];
  }

  return rev === s;
};

const validPalindromeSolution3 = (s) => {
  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  // initialize left/right pointers to point at the middle index of the string. Remember, indexes start at 0 meaning that we have to floor() the value from dividing length by 2 in order to get the index of the center.
  let left = Math.floor(s.length / 2),
    right = left;

  // if the string is even, move left pointer back by 1 so left/right are pointing at the 2 middle values respectively.
  if (s.length % 2 === 0) {
    left--;
  }

  // loop through the string while expanding pointers outwards comparing the characters.
  while (left >= 0 && right < s.length) {
    if (s[left] !== s[right]) {
      return false;
    }

    left--;
    right++;
  }

  return true;
};
