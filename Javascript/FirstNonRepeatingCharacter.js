/**
 * First Non-Repeating Character
 * Input: swiss
 * Output: w
 */

const str = "swiss";

const map = {};

// Count frequency
for (let char of str)
{
    if (map[char])
    {
        map[char]++;
    }
    else
    {
        map[char] = 1;
    }
}

// Find first non-repeating character
for (let char of str)
{
    if (map[char] === 1)
    {
        console.log(char);
        break;
    }
}