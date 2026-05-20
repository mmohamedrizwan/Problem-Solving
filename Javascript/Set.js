/**
 * A set is a data structure that can hold a **collection of values**. 
 * The values however must be unique.
 * Set can contain a mix of different data types. 
 * It is dynamically sized. You don't have to declare the size of a set before creating it. 
 * Sets do not maintain **insertion order**.
 */

// Set vs Array
// 1.Arrays can contain duplicate values whereas Sets cannot.
// 2.Insertion order is maintained in arrays but it is not the case with sets.
// 3.Searching and deleting an element in the set is faster compared to arrays.

const set = new Set([1, 2, 3]);
set.add(1);
set.delete(1);
console.log("Entries", set.entries()); 
console.log("Size", set.size);
// It is used to get an iterator of the values in a Set as [value, value] pairs.
// Why [value, value] and not [key, value]
// Map has key -> value
// Set has only values

// In Javascript, you cannot directly set the size of a set.
// size is a read-only property.
console.log(set.size);
set.size = 10;
console.log(set.size);

// For arrays, length is not fully read-only like set.size.
// you actually can manually set the array length.
// Example:
const arr = [1, 2, 3, 4];
arr.length = 10;
console.log("arr", arr);
// | Operation              | Result           |
// | ---------------------- | ---------------- |
// | `arr.length = smaller` | Removes elements |
// | `arr.length = bigger`  | Adds empty slots |
// The empty slots are not real undefined values

const a = [undefined];
const b = new Array(1);

console.log(a[0]); // undefined
console.log(b[0]); // undefined

// Looks same, but internally different
console.log(0 in a); // true
console.log(0 in b); // false
// Because:
// a actually contains a value (undefined)
// b has an empty slot only
// This matters in loops like:
a.forEach(x => console.log("for each (undefined)", x));
b.forEach(x => console.log("for each (emptyslot)", x));

for (const item of set) {
    console.log("item", item);
}