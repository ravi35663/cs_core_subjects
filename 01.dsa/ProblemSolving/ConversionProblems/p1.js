/*
    Javascript to Convert Binary to Decimal
    1010 -> 10
    1111 -> 15
    101  -> 5
    (b5)(b4)(b3)(b2)(b1) = pow(2,4) * b5 + pow(2,3) * b4 + pow(2,2) * b3 + pow(2,1) * b2 + pow(2,0) * b1
*/

const bin = Number(process.argv[2]);
function binToDecimal(bin){
    let dec = 0;
    let i=0;
    while(bin){
        const r = bin % 10;
        if(r){
            dec += Math.pow(2,i);
        }
        i++
        bin = Math.floor(bin/10)
    }
    return dec;
}
const dec = binToDecimal(bin);
console.log(`Decimal of binary number is : ${dec}`);
