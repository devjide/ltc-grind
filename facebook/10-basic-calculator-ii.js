/*
Given a string s which represents an expression, evaluate this expression and return its value.

The integer division should truncate toward zero.

You may assume that the given expression is always valid. All intermediate results will be in the range of [-231, 231 - 1].

Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

Example 1:
Input: s = "3+2*2"
Output: 7
*/

var calculate = function (s) {
  let num = "";
  let preOperator = "+"; // previous operator defaults to plus
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    // If its a number
    if (!isNaN(s[i])) num += s[i];

    // If it's an operator or end of the string
    if (isNaN(s[i]) || i === s.length - 1) {
      if (preOperator === "+") stack.push(+num);
      if (preOperator === "-") stack.push(-num);
      if (preOperator === "*") stack.push(stack.pop() * num);
      if (preOperator === "/") stack.push(Math.trunc(stack.pop() / num));

      // sign becomes current sign
      preOperator = s[i];
      // we reset num
      num = "";
    }
  }
  //we reduce the array adding positive and negative numbers
  return stack.reduce((total, cur) => total + cur, 0);
};
