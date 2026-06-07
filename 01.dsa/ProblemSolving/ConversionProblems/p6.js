//Javascript to Convert Octal to Binary
const octal = Number(process.argv[2]);
// 123
// 001 010 011
const octalToBinary = (octal)=>{
    let bin = '';
    const binaries = ['000','001','010','011','100','101','110','111']
    while(octal){
        const r = octal % 10;
        bin = binaries[r] + bin;
        octal = Math.floor(octal/10);
    }
    return bin;
}

const binary = octalToBinary(octal);
console.log("Converted Binary of octal is : ",binary);