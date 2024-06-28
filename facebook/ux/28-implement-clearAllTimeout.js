/* (https://bigfrontend.dev/problem/implement-clearAllTimeout) */

/**
 * cancel all timer from window.setTimeout
 */
function clearAllTimeout() {
  // Store a reference to the original setTimeout function
  const originalSetTimeout = window.setTimeout;

  // Create an array to keep track of all active timer IDs
  const timerIds = [];

  // Override the setTimeout function
  window.setTimeout = function (callback, delay) {
    // Call the original setTimeout and store the timer ID
    const timerId = originalSetTimeout.call(this, callback, delay);

    // Add the timer ID to the array of active timers
    timerIds.push(timerId);

    // Return the timer ID, similar to the original setTimeout
    return timerId;
  };

  // Implement the clearAllTimeout function
  window.clearAllTimeout = () => {
    // Iterate over each timer ID in the array
    timerIds.forEach((id) => {
      // Clear the timer using clearTimeout
      clearTimeout(id);
    });
  };
}
