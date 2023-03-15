const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([3, 4, 5, 6, 7]);

// Combine the sets using the spread operator and create a new Set to store only distinct values
const distinctSet = new Set([...set1, ...set2]);

// Use the reduce method to sum up the distinct values in the set
const sum = Array.from(distinctSet).reduce((acc, val) => acc + val, 0);

console.log(sum); // Output: 16 (1 + 2 + 6 + 7 )
