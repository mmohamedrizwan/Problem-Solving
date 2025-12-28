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

for (const item of set) {
    console.log("item", item);
}