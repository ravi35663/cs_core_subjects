//Javascript to Find the Number of Integers Divisible by 5 in a range
let [start,end] = process.argv.slice(2);
start = start > end? end: start;
end = end > start ? end: start;
if( start < 0 || end<0){
    console.log("Please positive range.");
    return;
}
let count = 0
for(let i=start;i<= end;i++){
    if(i % 5==0){
        count++;
    }
}
console.log(`${count} integers are divisible by 5 between the range ${start} and ${end}`);