/*
=> Why do we use bit-manipulation?
    -> It is perform action on bit level that is why it is very fast.

=> Bitwise Operators:
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
        ~(integer) => - (integer + 1), this will work for positive and negative number
        e.g:    
            s = ~x
            Steps to get value:
                0)  if x is negative then make 2's complement of that number other wise move 
                    to next step:
                1)  flip the bits 
                2)  check if negative (the flipped bits) 
                    yes:
                        take the 2s complement flipped bits
                    No:
                        Stop:
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
        a>>b ==> (a/(2^b)) -> shift b bits in a toward right. that is discard bit from right and add in left
        5 >> 2 ==> 00000101 => 00000001 => which is 1

    6) Bitwise LeftShift (<<)
        a<<b ==> (a*(2^b)) -> shift b bits in a toward left. that is discard bit from left and add in right
                5 >> 2 ==> 00000101 => 00010100 => which is 20

Note:   
    1)  Whenever you encounter negative number, get the 2s complement of that number 
        (positive part only) and further perform the action.
    2)  if number is 32 bit => 31st for sign and rest for values
    3)  Largest possible value you can store is (2^31) - 1 if system is 32 bit and 
        (2^31) is int_max and int_min is -2^31 (get 2s complement of 2^31 and add minus)
    4)  If system if n bit then largest value you can store is (2^n-1) - 1;
    5)  You'll get the unwanted values if bits are overflow in left shift. So always do 
        calculation in boundaries of the bits

*/
/*
=> 1's complement:
    let s = 1001101
    s_1s =  0110010

=> 2's complement: 1's complement + 1
    let s = 1001101

        2s  = 0110010 + 1 
            = 0110011

*/
/*
=> Bit-Operations:
    1) Get ith Bit
    2) Set ith Bit
    3) Clear ith Bit
*/

function swapTwo(a,b){
/*
    Explanation: a^a = 0, b^b = 0 because same bits resultant is 0:
        a = a^b;
        b = a^b     => (a^b)^b      => a
        a = a^b     => (a^b)^b      => a^b^a => b 
*/
   a = a^b;
   b = a^b;
   a = a^b;
}
/*
Check if ith bit is set or not:
    Example: 1
        n = 13, i=2;
        Explanation: 
            n = 13 => (1101)
            here 2nd bit is 1 from right to left so it is true
    Example: 2
        n = 13, i=1;
        Explanation: 
            n = 13 => (1101)
            here 1st bit is  from right to left so it is false
    Brute-force:
        convert number into binary and check  
*/
// Way 1
function getIthBit(num,i){
    // Way 1:
    let mask = (1<<i); // this will place 1 at ith position  
    let temp_num = mask & num;
    return temp_num > 0? 1 : 0 
}

// Way-2
function getIthBit(num,i){
    if((num>>i) & 1){
        return 1;
    }
    return 0;
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
    num = clearIthBit(num, i)
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

// Toggle the ith bit
function toggle(num,i){
    return (num ^ (1<<i))
}

// Remove last set bit:
/*
==> a = 13 => 1110
    output: 1100
*/
function removeLastSetBit(n){
    return n & (n-1)
}

// Check if number is power of 2:
function power2(num){
    return (num & num-1) == 0 
}

// count the number of set bit
function countSetBit(n){
    let count =0;
    while(n){
        if(n & 1){
            count++
        }
        n = n>>1
    }
    // way 2
    while(n !=0){
        count++;
        n = n & n-1;
    }
    return count
}

const num = 10;
const i = 3;
// const result = getIthBit(num,i);
const result = clearIthBit(num,i)
console.log("Result is: ",result);