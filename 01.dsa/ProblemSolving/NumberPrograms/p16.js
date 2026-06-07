/*
    Javascript to Multiply Two Binary Numbers
    1010 * 101

    1010
  * 101
--------------
   1010
  0000
--------------
 01010 --> First Intermediate sum
1010
--------------
110010 ==> 50
*/
let [num1,num2] = process.argv.slice(2);
function multiplicationOfTwoBinary(num1,num2){
  let multi_sum = 0;
  let i = 0;
  while(num2){
    let r = num2 % 10;
    let current_value = r * num1 * Math.pow(10,i);
    const binary_sum = binarySum(current_value,multi_sum);
    multi_sum = binary_sum;
    i++;
    num2 = Math.floor(num2/10);
  }
  return multi_sum;
}

function binarySum(bin1,bin2){
  let greater_bin = bin1>bin2 ? bin1: bin2;
  let small_bin = bin1<bin2 ? bin1: bin2;
  let bin_sum = '';
  let carry = 0;
  while(greater_bin){
    let r1 = greater_bin % 10;
    let r2 = small_bin % 10;
    let sum = r1 + r2 + carry;
    if(sum ===3){
      bin_sum = '1' + bin_sum;
      carry = 1;
    }else if(sum==2){
      bin_sum = '0' + bin_sum;
      carry = 1;
    }else{
      bin_sum = sum + bin_sum;
      carry = 0;
    }
    greater_bin = Math.floor(greater_bin / 10);
    small_bin = Math.floor(small_bin / 10);
  }
  if(carry === 1){
    bin_sum = '1' + bin_sum;
  }
  return Number(bin_sum);
}


const multiplication = multiplicationOfTwoBinary(num1,num2);
console.log("Multiplication of two numbers: ",multiplication);