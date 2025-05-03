const cache = new Map();

function cashing(func, ...args) {
  for (const [key, value] of cache) {
    if (JSON.stringify(key.arguments) === JSON.stringify(args)) {
      console.log("bringing from cache");
      return value;
    }
  }

  if (cache.size === 10) {
    for (const [key, value] of cache) {
      cache.delete(key);
      break;
    }
  }

  console.log("setting data into cache");
  const obj = {arguments: args};
  cache.set(obj, func(...args));
  console.log(cache);

  return cache.get(obj);
}

function sum(a, b) {
  return a + b;
}

console.log(cashing(sum, 1, 2));
console.log(cashing(sum, 1, 2));
console.log(cashing(sum, 10, 2));
console.log(cashing(sum, 6, 6));
console.log(cashing(sum, 6, 6));
console.log(cashing(sum, 1, 2));
console.log(cashing(sum, 4, 4));
console.log(cashing(sum, 4, 4));
console.log(cashing(sum, 5, 5));
console.log(cashing(sum, 7, 7));
console.log(cashing(sum, 8, 8));
console.log(cashing(sum, 9, 9));
console.log(cashing(sum, 10, 10));
console.log(cashing(sum, 11, 11));
console.log(cashing(sum, 12, 12));
console.log(cashing(sum, 13, 13));
console.log(cashing(sum, 14, 14));
