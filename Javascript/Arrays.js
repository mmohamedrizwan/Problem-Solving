/**
 * An array is a data structure that can hold a **collection of values**.
 * Arrays can contain a **mix of different data types**. You can store strings, booleans, numbers 
 * or even objects all in the same array.
 * Arrays are **resizable**. you don't have to declare the size of an array before creating it.
 * Javascript arrays are zero-indexed and the insertion order is maintained.
 */

const array = [1, 2, 3, "Vishwas"];
array.push(4); // O(1)
array.unshift(0); // O(n)
array.pop(); // O(1)
array.shift(); // O(n)

for (const item of array) {
    console.log(item);
}

// Insert / Remove from the end - O(1)
// Insert / Remove from beginning - O(n)
// Access - O(1)
// Search - O(n)
// Push / Pop - O(1)
// Shift / Unshift / concat / slice / splice - O(n)