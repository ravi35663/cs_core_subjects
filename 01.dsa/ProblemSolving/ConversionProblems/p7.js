//Javascript to Convert Octal to Decimal
const octal = Number(process.argv[2]);
const octalToDecimal = (octal)=>{
    let oct = octal;
    let decimal = 0;
    let i=0;
    while(oct){
        let r = oct % 10;
        decimal += r * Math.pow(8,i);
        i++;
        oct = Math.floor(oct/10)
    }
    return decimal;
}

const decimal = octalToDecimal(octal);
console.log("Decimal is : ",decimal);