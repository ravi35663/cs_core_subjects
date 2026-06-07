//Javascript to Convert Binary to Gray Code using Recursion
//(B3B2B1)(Binary Code) == (B3(B3^B2)(B2^B1))
// 1001 => 1101
const bin = Number(process.argv[2]);
const binaryToGray = (bin,result='')=>{
    if(bin === 0){
        return result;
    }
    let first_value = bin % 10;
    bin = Math.floor(bin/10);
    let second_value = bin % 10;
    result = (first_value ^ second_value) + result;
    return binaryToGray(bin,result);
}

const gray = binaryToGray(bin);
console.log("Converted Gray Code is : ",gray);