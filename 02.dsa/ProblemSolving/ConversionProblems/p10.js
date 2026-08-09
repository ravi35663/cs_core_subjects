//Javascript to Convert Decimal to Binary using Recursion
const decimal = Number(process.argv[2]);
const decimalToBinary = (dec)=>{
    if(dec == 0){
        return ''
    }
    const r = dec % 2;
    return  decimalToBinary(Math.floor(dec/2)) + r; 
}

const binary = decimalToBinary(decimal);
console.log("Binary Number is : ",binary);