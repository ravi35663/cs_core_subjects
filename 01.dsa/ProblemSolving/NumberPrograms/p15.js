//Javascript to Add Two Binary Numbers
// Method 1: convert binary to integer and add them then convert them into binary
let bin1 = Number(process.argv[2]);
let bin2 = Number(process.argv[3]);
/*
    Method-1
    const result = addTwoBinaryNumbers(bin1,bin2);
    function addTwoBinaryNumbers(bin1,bin2){
        let int1 = binToInt(bin1);
        let int2 = binToInt(bin2);
        const result = intToBin(int1 + int2);
        return result;
    }

    function binToInt(bin){
        let result = 0;
        let i=0;
        while(bin){
        let r = bin % 10;
        if(r){
            result +=2**i;
        }
        i++;
        bin = Math.floor(bin/10);
        }
        return result;
    }

    function intToBin(int){
        let i=0;
        let bin=0;
        while(int){
            let r = int % 2;
            if(r){
                bin = bin + 10**i
            }
            i++;
            int = Math.floor(int/2);
        }
        return bin;
    }    
*/

// Method - 2
function addTwoBinary(bin1,bin2){
    let result = '';
    let carry=0;
    while(bin1 || bin2){
        let [r1,r2] = [bin1 % 10, bin2 % 10];
        let sum = r1 + r2 + carry;
        if(sum === 3){
            result = '1' + result;
            carry = 1;
        }else if (sum == 2 ){
            result = '0' + result;
            carry = 1;
        }else {
            result = String(sum) + result;
            carry = 0;
        }
        [bin1,bin2 ] = [Math.floor(bin1/10),Math.floor(bin2/10)];
    }
    if(carry){
        result  = carry + result;
    }
    return Number(result);
}

const result = addTwoBinary(bin1,bin2);
console.log("Sum of two binary numbers is: ",result);
