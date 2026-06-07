//Javascript to Find Sum of First N Natural Numbers
let num = Number(process.argv[2]);
const sum = num*(num+1)/2;
console.log(`Sum of first ${num} natural number is : ${sum}`);