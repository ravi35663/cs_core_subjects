//Javascript to Find Prime Numbers in a Given Range
// prime number: 2, 3, 5, 7, ..etc (number divided by 1 and itself)
let [min,max] = process.argv.slice(2);
min = Number(min);
max = Number(max);
min = min<max?min:max;
max = max>min? max:min;

if(min<2){
    min = 2;
}

const isPrime = (num)=>{
    for(let i=2;i*i<=num;i++){
        if(num % i==0){
            return false;
        }
    }
    return true;
}

for(let i=min;i<=max;i++){
    const primeNumber = isPrime(i);
    if(primeNumber){
        process.stdout.write(`${i} `);
    }
}