// Solution 1

const str1 = "listen";
const str2 = "silent";

const sorted1 = str1.split("").sort().join("");
const sorted2 = str1.split("").sort().join("");

console.log(sorted1 === sorted2);