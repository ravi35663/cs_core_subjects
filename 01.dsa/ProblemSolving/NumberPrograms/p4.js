//Strong Number Program in Javascript
/*
    Strong number: sum of factorial of the digits of a number is equal to that number is known as 
    strong number.
    examples: 1 , 2, 145 ..etc
*/

const num = process.argv[2];
const isStrongNumber = (num)=>{
    let sum = 0;
    let temp_num = num;
    while(temp_num){
        const r = temp_num %10;
        sum += factorial(r);
        temp_num = Math.floor(temp_num/10);
    }
    return num==sum;

}
const factorial = (digit)=>{
    if(digit===0){
        return 1;
    }
    return digit *  factorial(digit-1);
}

const strong = isStrongNumber(num);
if(strong){
    console.log(`${num} is a strong number`);
}else{
    console.log(`${num} is not a strong number`);
}