# JavaScript Type Coercion Bug

This repository demonstrates a subtle bug in a JavaScript addition function caused by type coercion. The function `foo` is intended to add two numbers, but it incorrectly returns 0 if either input is a falsy value, not just null.

## Bug Description
The `foo` function uses a loose equality check (`===`) to check for null values, which is correct for handling nulls. However, if either input is 0, "", false, undefined, or NaN, it's also considered falsy and will return 0. This behavior might not be the intended functionality.  The solution provides a more robust approach.

## Bug Reproduction
1. Clone this repository.
2. Open `bug.js`.
3. Run the script in a JavaScript environment (e.g., Node.js).
4. Observe the incorrect output for falsy inputs.