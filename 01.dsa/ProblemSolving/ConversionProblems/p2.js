//Javascript to Convert Binary to Hexadecimal
const bin = Number(process.argv[2]);
//convert them into decimal first
function binToDecimal(bin){
    let decimal = 0;
    let i=0;
    while(bin){
        let r = bin % 10;
        if(r){
            decimal += 2**i;
        }
        i++;
        bin = Math.floor(bin/10);
    }
    return decimal;
}
// 10
// 1010
// 0
// 1
// 0
// 1

function decimalToHex(decimal){
    let hex = '';
    while(decimal){
        let r = decimal % 16;
        if(r>=10 && r<=15){
            r  = String.fromCharCode(r+55);
        }
        hex = r + hex;
        decimal = Math.floor(decimal / 16);
    }
    return hex;
}

function binToHex(bin){
    const decimal = binToDecimal(bin);
    const hex = decimalToHex(decimal);
    return hex;
}

const hex = binToHex(bin);
console.log("Hexadecimal of binary is: ",hex);

