/* (https://bigfrontend.dev/problem/improve-a-function) */

function excludeItems(items, excludes) {
  // Create a Set to store the excluded items
  const excludeSet = new Set();

  // Populate the exclude set with items to be excluded
  excludes.forEach((pair) => {
    items.forEach((item) => {
      if (item[pair.k] === pair.v) {
        excludeSet.add(item);
      }
    });
  });

  // Filter the items that are not in the exclude set
  return items.filter((item) => !excludeSet.has(item));
}
