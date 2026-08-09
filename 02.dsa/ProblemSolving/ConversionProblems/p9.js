//Javascript to Convert Decimal to Octal
const decimal = Number(process.argv[2]);
const decimalToOctal = (dec)=>{
    let oct = '';
    while(dec){
        const r = dec % 8;
        oct = r + oct;
        dec = Math.floor(dec / 8);
    }
    return oct;
}

const oct = decimalToOctal(decimal);
console.log("Octal is : ",oct);