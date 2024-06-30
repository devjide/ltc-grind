/* (https://bigfrontend.dev/problem/roman-numerals-to-integer) */

function romanToInteger(str) {
  // Map of Roman numeral symbols to their integer values
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;

  for (let i = 0; i < str.length; i++) {
    const currentVal = romanMap[str[i]];
    const nextVal = romanMap[str[i + 1]];

    // If the next value is greater than the current value, subtract the current value from the total
    if (nextVal > currentVal) {
      total -= currentVal;
    } else {
      // Otherwise, add the current value to the total
      total += currentVal;
    }
  }

  return total;
}
