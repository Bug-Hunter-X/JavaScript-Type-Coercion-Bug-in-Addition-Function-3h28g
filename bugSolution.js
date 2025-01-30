function foo(a, b) {
  if (a === null || b === null || typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Handle null, undefined, or non-number values
  }
  return a + b;
}

console.log(foo(null, 5)); // Output: NaN
console.log(foo(5, null)); // Output: NaN
console.log(foo(5, 5));    // Output: 10
console.log(foo(0,5)); //Output: 5
console.log(foo('',5)); //Output: NaN