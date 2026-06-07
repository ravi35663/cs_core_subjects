//Javascript to Print Multiplication Table
const num = process.argv[2];
for(let i=1;i<=10;i++){
    console.log(`${i} x ${num} = ${i * num}`);
}