/*
    Print number from 1...N recursively in :
        increasing order
        decreasing order
*/
function increasing(n){
    if(n==0){
        return ;
    }
    increasing(n-1);
    process.stdout.write(`${n} `);
}
function decreasing(n){
    if(n==0){
        return 1;
    }
    process.stdout.write(`${n} `);
    decreasing(n-1);
}

const n = 10;
increasing(n);
decreasing(n);
