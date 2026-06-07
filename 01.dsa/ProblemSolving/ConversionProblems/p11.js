//Javascript to Convert Decimal to Binary and Count the Number of 1s
const decimal = Number(process.argv[2])
const decimalToBinary = (dec)=>{
    if(dec == 0){
        return '';
    }
    return decimalToBinary(Math.floor(dec/2)) + dec % 2; 
}
const bin= decimalToBinary(decimal);
console.log("Binary is :" ,bin);
const countOne = (bin)=>{   
    let len = bin.length - 1;
    let ones = 0;
    while(len!=-1){
        if(bin[len] == 1){
            ones++;
        }
        len--;
    }
    return ones;
}

const ones = countOne(bin);
console.log("Ones are: ",ones);
