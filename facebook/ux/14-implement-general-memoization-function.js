/**
 * @param {Function} func
 * @param {(args:[]) => string }  [resolver] - cache key generator
 */
function memo(func, resolver) {
  const cache = new Map();

  return function (...args) {
    const key = resolver ? resolver(...args) : JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = func.apply(this, args);
    cache.set(key, result);
    return result;
  };
}
