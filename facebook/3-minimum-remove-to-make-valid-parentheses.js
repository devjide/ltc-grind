/*
1249. Minimum Remove to Make Valid Parentheses (https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/description/)

Given a string s of '(' , ')' and lowercase English characters.
Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.
Formally, a parentheses string is valid if and only if:
It is the empty string, contains only lowercase characters, or
It can be written as AB (A concatenated with B), where A and B are valid strings, or
It can be written as (A), where A is a valid string.



Example 1:
Input: s = "lee(t(c)o)de)"
Output: "lee(t(c)o)de"
Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.

Example 2:
Input: s = "a)b(c)d"
Output: "ab(c)d"
*/

let s = "lee(t(c)o)de)";
const minRemoveToMakeValid = function (s) {
  let count = 0;
  let ref = [];

  for (let index = 0; index < s.length; index++) {
    const element = s[index];

    if (element === "(") {
      count++;
      ref.push(element);
    } else if (element === ")" && count > 0) {
      count--;
      ref.push(element);
    } else if (element !== ")") {
      ref.push(element);
    }
  }

  const result = [];
  const rev = ref.reverse();

  rev.map((character) => {
    if (character === "(" && count > 0) {
      count--;
    } else {
      result.push(character);
    }
  });

  return result.reverse().join("");
};

// console.log(minRemoveToMakeValid(s));

const minRemoveToMakeValid2 = (str) => {
  const stack = [];
  const splitted = str.split("");

  for (let i = 0; i < splitted.length; i++) {
    const char = splitted[i];
    if (char === "(") {
      stack.push(i);
    } else if (char === ")") {
      if (stack.length === 0) {
        splitted[i] = "";
      } else {
        stack.pop();
      }
    }
  }

  for (let i = 0; i < stack.length; i++) {
    const index = stack[i];
    splitted[index] = "";
  }

  return splitted.join("");
};

console.log(minRemoveToMakeValid2("))(("));
