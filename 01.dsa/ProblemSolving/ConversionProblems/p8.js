//Javascript to Convert Decimal to Hexadecimal
const decimal = Number(process.argv[2]);
const decimalToHex = (dec)=>{
    let hex = '';
    while(dec){
        let r = dec % 16;
        if(r >=10){
            r = String.fromCharCode(55+r);
        }
        hex = r + hex;
        dec = Math.floor(dec/16);
    }
    return hex;
}

const hex = decimalToHex(decimal);
console.log("Hex code is : ",hex);