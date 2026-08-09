//Javascript to Print Armstrong Number between 1 to 1000
const isArmstrong = require('./p6');
[min,max] = process.argv.slice(2);
min = Number(min);
max = Number(max);
if(min > max){
    [min,max]=[max,min]
}
for(let i=min;i<=max;i++){
    if(isArmstrong(i)){
        process.stdout.write(`${i} `);
    }
}
