/*
**** Count Unique Characters of All Substrings of a Given String (https://leetcode.com/problems/count-unique-characters-of-all-substrings-of-a-given-string/description/)


Let's define a function countUniqueChars(s) that returns the number of unique characters in s.

For example, calling countUniqueChars(s) if s = "LEETCODE" then "L", "T", "C", "O", "D" are the unique characters since they appear only once in s, therefore countUniqueChars(s) = 5.
Given a string s, return the sum of countUniqueChars(t) where t is a substring of s. The test cases are generated such that the answer fits in a 32-bit integer.

Notice that some substrings can be repeated so in this case you have to count the repeated ones too.


Example:
Input: s = "ABC"
Output: 10
Explanation: All possible substrings are: "A","B","C","AB","BC" and "ABC".
Every substring is composed with only unique letters.
Sum of lengths of all substring is 1 + 1 + 1 + 2 + 2 + 3 = 10


Example:

Input: s = "ABBB"
Output: 10
Explanation: A (1) AB (2) ABB (1) ABBB(1) B (1) BB(0) BBB(0) B(1) BB(0) B(1) = 8
*/

const s = "ABCABDA";

const myUniqueLetterStringSolution = (s) => {
  let counter = 0;
  const substrings = [];
  const countUniqueChars = (str) => {
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j <= str.length; j++) {
        substrings.push(str.substring(i, j));
      }
    }
    return substrings;
  };

  countUniqueChars(s);

  const generateDict = (window = countUniqueChars(s)[1]) => {
    const w = new Object();
    for (let char in window) {
      if (w[window[char]]) {
        w[window[char]]++;
      } else {
        w[window[char]] = 1;
      }
    }
    return w;
  };

  substrings.map((val, index) => {
    const map = generateDict(val);

    const keys = Object.keys(map);
    keys.forEach((key) => {
      if (map[key] === 1) counter++;
    });
  });
  return counter;
};

console.log(myUniqueLetterStringSolution(s));

var uniqueLetterString = function (s) {
  let result = 0;
  const n = s.length;
  const hash = {};
  for (let i = 0; i < n; i++) {
    // create the hash table contains every letter's index arr.
    const letter = s[i];
    if (hash[letter] === undefined) {
      hash[letter] = [i];
    } else {
      hash[letter].push(i);
    }
  }

  for (let letter in hash) {
    // iterate every letter
    const arr = hash[letter]; // the arr contains all indexes the letter present in the string
    let lastIdx = arr[0];
    let lastRange = arr[0] + 1; // left part length
    for (let i = 1; i < arr.length; i++) {
      const currIdx = arr[i];
      const currRange = currIdx - lastIdx; // right part length
      result += lastRange * currRange; // multiply both side length to get the ways of valid substrings
      lastIdx = currIdx;
      lastRange = currRange; // set next left part to be current right part
    }
    result += lastRange * (n - lastIdx); // don't forget the last calcution
  }
  return result;
};
