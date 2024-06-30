/* https://bigfrontend.dev/problem/implement-Math-sqrt */
/**
 * @param {any} x
 * @return {number}
 */
function mySqrt(x) {
  if (isNaN(x)) return NaN;
if (x < 0) return NaN; // sqrt of negative number is not a real number
if (x === 0 || x === 1) return x;

let left = 0, right = x, result = 0;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  const square = mid * mid;

  if (square === x) {
    return mid;
  } else if (square < x) {
    left = mid + 1;
    result = mid; // keep track of the last mid value where mid*mid < x
  } else {
    right = mid - 1;
  }
}

return result;
}