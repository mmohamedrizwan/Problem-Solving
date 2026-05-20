/**
 * Reverse string without using reverse() or Extra Array
 * 
 * In JavaScript:
 * Arrays are mutable ✅
 * Strings are immutable ❌
 * 
 * so we can't able to do swapping in string
 */

let str = "hello";

let chars = str.split("");

let left = 0;
let right = chars.length - 1;

while (left < right)
{
    // swap
    const temp = chars[left];
    chars[left] = chars[right];
    chars[right] = temp;

    left++;
    right--;
}

const reversed = chars.join("");
console.log(reversed);