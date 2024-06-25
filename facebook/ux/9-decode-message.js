/* (https://bigfrontend.dev/problem/decode-message) */

/**
 * @param {string[][]} message
 * @return {string}
 */
function decode(message) {
  if (message.length === 0 || message[0].length === 0) return "";

  let direction = 1; // 1 for down, -1 for up
  let row = 0; // start from top corner
  let column = 0; // start from left
  let decoded = "";

  while (column < message[0].length) {
    decoded += message[row][column];

    if (row === 0) {
      direction = 1; // switch direction to down
    } else if (row === message.length - 1) {
      direction = -1; // switch direction to up
    }

    row += direction;
    column += 1;
  }

  return decoded;
}
