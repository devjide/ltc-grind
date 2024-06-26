/*
528. Random Pick with Weight (https://leetcode.com/problems/random-pick-with-weight/description/)

You are given a 0-indexed array of positive integers w where w[i] describes the weight of the ith index.

You need to implement the function pickIndex(), which randomly picks an index in the range [0, w.length - 1] (inclusive) and returns it. The probability of picking an index i is w[i] / sum(w).

For example, if w = [1, 3], the probability of picking index 0 is 1 / (1 + 3) = 0.25 (i.e., 25%), and the probability of picking index 1 is 3 / (1 + 3) = 0.75 (i.e., 75%).



Example 1:

Input
["Solution","pickIndex"]
[[[1]],[]]
Output
[null,0]

Explanation
Solution solution = new Solution([1]);
solution.pickIndex(); // return 0. The only option is to return 0 since there is only one element in w.

*/

var Solution = function (w) {
  this.weights = new Map();
  this.sum = 0;
  for (let i = 0; i < w.length; i++) {
    this.sum += w[i];
    this.weights.set(this.sum, i);
  }
};

Solution.prototype.pickIndex = function () {
  let index = Math.floor(Math.random() * this.sum);
  for (let key of this.weights.keys())
    if (index < key) return this.weights.get(key);
};
