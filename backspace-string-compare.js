/*
Backspace String Compare
Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

Example
Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".
*/

const s = "a#c",
  t = "b";

const myBackSpaceStringCompareSolution = (s, t) => {
  const modifiedS = [];
  const modifiedT = [];
  let hyphen = false;
  const together = s + "-" + t;
  for (let index = 0; index < together.length; index++) {
    const element = together[index];
    if (element === "-") hyphen = true;
    if (!hyphen) {
      if (element !== "#") {
        modifiedS.push(element);
      } else {
        const lastChar = modifiedS[modifiedS.length - 1];
        if (
          modifiedS.length > 0 &&
          lastChar.toUpperCase() != lastChar.toLowerCase() &&
          element !== "-"
        ) {
          modifiedS.pop();
        }
      }
    } else {
      if (element !== "#" && element !== "-") {
        modifiedT.push(element);
      } else {
        const lastChar = modifiedT[modifiedT.length - 1];
        if (
          modifiedT.length > 0 &&
          lastChar.toUpperCase() != lastChar.toLowerCase() &&
          element !== "-"
        ) {
          modifiedT.pop();
        }
      }
    }
  }

  // for (let index = 0; index < s.length; index++) {
  //   const element = s[index];
  //   if (element !== "#") {
  //     modifiedS.push(element);
  //   } else {
  //     const lastChar = modifiedS[modifiedS.length - 1];
  //     if (
  //       modifiedS.length > 0 &&
  //       lastChar.toUpperCase() != lastChar.toLowerCase()
  //     ) {
  //       modifiedS.pop();
  //     }
  //   }
  // }

  // for (let index = 0; index < t.length; index++) {
  //   const element = t[index];
  //   if (element !== "#") {
  //     modifiedT.push(element);
  //   } else {
  //     const lastChar = modifiedT[modifiedT.length - 1];
  //     if (
  //       modifiedT.length > 0 &&
  //       lastChar.toUpperCase() != lastChar.toLowerCase()
  //     ) {
  //       modifiedT.pop();
  //     }
  //   }
  // }

  return modifiedS.toString("") === modifiedT.toString("");
};

console.log(myBackSpaceStringCompareSolution(s, t));
