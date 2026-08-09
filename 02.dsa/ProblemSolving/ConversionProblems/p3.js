//Javascript to Convert Binary to Octal
/*
    ==> Binary to octal

    1000	10
    1001	11
    1010	12
    1011	13
    1100	14
    1101	15
    1110	16
    1111	17
    10000	20
    10001	21
    10010	22
    10011	23
    10100	24
    10101	25
    10110	26
    10111	27
    11000	30
    11001	31

*/
const bin = Number(process.argv[2]);
const binToDecimal = (bin)=>{
    let decimal = 0;
    let i=0;
    while(bin){
        const r = bin % 10;
        if(r){
            decimal +=Math.pow(2,i);
        }
        i++;
        bin = Math.floor(bin/10)
    }
    return decimal;
}

const decimalToOctal = (decimal)=>{
    let octal = '';
    while(decimal){
        const r = decimal % 8;
        octal = r + octal;
        decimal = Math.floor(decimal/8);
    }
    return octal;
}

const binaryToOctal = (bin)=>{
    const decimal = binToDecimal(bin);
    const octal = decimalToOctal(decimal);
    return octal;
}

const octal = binaryToOctal(bin);
console.log("Octal number is : ",octal);