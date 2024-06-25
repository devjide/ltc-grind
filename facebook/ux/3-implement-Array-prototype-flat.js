/* (https://bigfrontend.dev/problem/implement-Array-prototype.flat) */

/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */

// Recursion
function flats(arr, depth = 1) {
  let result = [];

  (function flatten(array, depth) {
    for (let i = 0; i < array.length; i++) {
      let item = array[i];
      if (Array.isArray(item) && depth > 0) {
        flatten(item, depth - 1);
      } else {
        result.push(item);
      }
    }
  })(arr, depth);

  return result;
}

// Iterative
function flat(arr, depth = 1) {
  // [[1,1] [[2],1], [[3, [4]],1]]
  // [[[2],1], [[3, [4]],1]]
  // [[2,0], [[3, [4]],1]]
  // [[[3, [4]],1]]
  // [[3, 0], [[4], 0]]

  const result = [];
  let stack = arr.map((item) => ({ item, depth }));

  while (stack.length > 0) {
    let { item, depth } = stack.pop();

    if (Array.isArray(item) && depth > 0) {
      stack.push(
        ...item.map((subItem) => ({ item: subItem, depth: depth - 1 }))
      );
    } else {
      result.push(item);
    }
  }

  return result.reverse();
}