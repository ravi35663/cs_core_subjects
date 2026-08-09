//Javascript to Check Armstrong Number
/*
    Armstrong Number: A number which is sum of its digits raised with the power (power should be equal to the number of digits).
    example:
        here number of digits is 3 hence power is 3
        1) 153  = 1^3 + 5^3 + 3^3 

        2) 1634 = 1^4 + 6^4 + 3^4 + 4^4;
*/

const num = Number(process.argv[2]);
const power = (num,base)=>{
    if(num==0){
        return 1;
    }
    return base * power(num-1,base);
}
const digits = (num)=>{
    let no_of_digits = 0;
    while(num){
        num = Math.floor(num/10);
        no_of_digits++;
    }
    return no_of_digits;
}

const isArmstrong = (num)=>{
    let sum = 0;
    let temp_num = num
    const power_no = digits(num);
    while(num){
        const r = num % 10;
        // sum += power(power_no,r);
        sum += r** power_no
        num = Math.floor(num/10);
    }
    return temp_num == sum;
}

// const arms = isArmstrong(num);
// if(arms){
//     console.log(`${num} is a armstrong number`);
// }else{
//     console.log(`${num} is not a armstrong number`);
// }

module.exports = isArmstrong;