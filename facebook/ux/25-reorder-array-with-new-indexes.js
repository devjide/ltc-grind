/* (https://bigfrontend.dev/problem/reorder-array-with-new-indexes) */

function reorderArray(items, newOrder) {
  let result = new Array(items.length);

  for (let i = 0; i < newOrder.length; i++) {
    result[newOrder[i]] = items[i];
  }

  // Modify the original array inline
  for (let i = 0; i < items.length; i++) {
    items[i] = result[i];
  }
}



function sort(items, newOrder) {
  for (let i = 0; i < items.length; i++) {
     // While the element at index i is not in its correct position
     while (newOrder[i] !== i) {
       // Swap items[i] with the element at its correct position
       let targetIndex = newOrder[i];

       // Swap items
       [items[i], items[targetIndex]] = [items[targetIndex], items[i]];

       // Swap newOrder
       [newOrder[i], newOrder[targetIndex]] = [newOrder[targetIndex], newOrder[i]];
     }
   }
 }