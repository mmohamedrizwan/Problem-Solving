// Solution 1

const str1 = "listen";
const str2 = "silent";

const sorted1 = str1.split("").sort().join("");
const sorted2 = str1.split("").sort().join("");

console.log(sorted1 === sorted2);

// Solution 2

function IsAnagram(input1, input2)
{
    if (input1.length !== input2.length) { return false; }

    const map = {};

    for (const ch of input1)
    {
        if (map[ch] != null)
        {
            map[ch]++;
        }
        else
        {
            map[ch] = 1;
        }
    }

    for (const ch of input2)
    {
        if (map[ch] == null)
        {
            return false;
        }

        map[ch]--;

        if (map[ch] < 0)
        {
            return false;
        }
    }

    return true;
}

console.log(IsAnagram(str1, str2));

/**
 * Dictionary Approach
 * 
 * Instead of sorting:
 * 
 * 1. Count characters in first string
 * 2. Reduce counts using second string
 * 
 * Example:
 * listen
 * silent
 * 
 * Dictionary after first string:
 * l → 1
 * i → 1
 * s → 1
 * t → 1
 * e → 1
 * n → 1 
 * 
 * After second string:
 * l → 0
 * i → 0
 * s → 0
 * t → 0
 * e → 0
 * n → 0
 * 
 * All become 0 → anagram.
 * 
 * Why Faster?
 * 
 * Because dictionary operations are almost constant time:
 * O(1)
 * 
 * So traversing all characters once gives:
 * O(n)
 * 
 * Total complexity:
 * 
 * Separate loops are added: O(n) + O(n)
 * which simplies to: O(n)
 */