
/*
    Why do we use bit-manipulation?
    -> It is perform action on bit level that is why it is very fast.
    
    ==> Bitwise Operators:
        1) Bitwise AND (&):
            0 & 0   => 0
            0 & 1   => 0
            1 & 0   => 0
            1 & 1   => 1
        2) Bitwise OR (|):
            0 | 0   => 0
            0 | 1   => 1
            1 | 0   => 1
            1 | 1   => 1
        3) Bitwise XOR (^) (Exclusive OR):
            0 ^ 0   => 0
            0 ^ 1   => 1
            1 ^ 0   => 1
            1 ^ 1   => 0
        4) Bitwise NOT (~) (1's complement):
            ~0  => -1
            ~1  => -2
            ~(integer) => - (integer + 1)
        => Explanation :
            let a = 0 ==> binary of 0 => 00000000 (upto 8)
                ~a = ~0 ==> take 1's complement of 0
                k =  1 1 1 1 1 1 1 1 (upto 32) -> here first bit is sign bit
                let 2's complements of magnitude of k (without sign bit which is 1)
                sign of 1 is (-)
                sign of 0 is (+)
                1(sign-bit) 0 0 0 0 0 0 0
                                      + 1
                        -----------------
                        -   0 0 0 0 0 0 1
                        -----------------
                                        -1

    5) Bitwise RightShift (>>):
        a>>b ==> (a/(2^b)) -> shift b bits in a toward right. that is discart bit from right and add in left
        5 >> 2 ==> 00000101 => 00000001 => which is 1
    6) Bitwise LeftShift (<<)
        a<<b ==> (a*(2^b)) -> shift b bits in a toward left. that is discart bit from left and add in right
                5 >> 2 ==> 00000101 => 00010100 => which is 20
*/

/*
    ==> Bit-Operations:
    1) Get ith Bit
    2) Set ith Bit
    3) Clear ith Bit
*/

function getIthBit(num,i){
    let mask = (1<<i); // this will place 1 at ith position  
    let temp_num = mask & num;
    return temp_num > 0? 1 : 0 
}

const setIthBit = (num,i)=>{
    const mask = (1<<i)
    return mask | num;
}

const clearIthBit = (num,i)=>{
    let mask = (1<<i) // 
    mask = ~mask;
    num = mask & num;
    return num;
}


function updateIthBit(num,i,v){ // v either 1 or 0
    // Clear the bit
    num = clearIthBit(num,i)
    // Create mask
    const mask = (v<<i);
    // Perform OR Operator
    num = mask | num;
}

function clearLastIthBit(num,i){
    // 1101011
    // let i=5 then we have to clear from 0 to 4th bits which is 1100000 of given number 1101011 
    const mask = (~1) <<i
    num = num & mask;
    return num;
}

const num = 10;
const i = 3;
// const result = getIthBit(num,i);
const result = clearIthBit(num,i)
console.log("Result is: ",result);