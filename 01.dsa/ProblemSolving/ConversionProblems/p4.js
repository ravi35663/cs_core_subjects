// Javascript to Convert Binary to Gray Code without Recursion
//(B3B2B1)(Binary Code) == (B3(B3^B2)(B2^B1))
// 1001 => 1101
const bin = Number(process.argv[2]);
const binToGray = (bin)=>{
    let gray = ''
    let prev_digit = bin % 10;
    bin = Math.floor(bin/10)
    while(bin){
        const r = bin % 10;
        if(r == prev_digit){
            gray = '0' + gray ;
        }else{
            gray = '1' + gray;
        }
        prev_digit = r;
        bin = Math.floor(bin/10);
    }
    gray = '1' + gray;
    return gray;
}
const gray = binToGray(bin);
console.log("Converted Gray code : ",gray);