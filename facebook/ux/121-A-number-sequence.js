/**
 * @param {number} n - integer
 * @returns {string}
 */
function getNthNum(n) {
  if (n === 1) return "1";

  // Start with the first term in the sequence
  let currentTerm = "1";

  for (let i = 2; i <= n; i++) {
    currentTerm = getNextTerm(currentTerm);
  }

  return currentTerm;
}

function getNextTerm(term) {
  let result = "";
  let count = 1;

  for (let i = 0; i < term.length; i++) {
    if (i < term.length - 1 && term[i] === term[i + 1]) {
      count++;
    } else {
      result += count.toString() + term[i];
      count = 1;
    }
  }

  return result;
}
