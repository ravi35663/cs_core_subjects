//Javascript to Find Nth Armstrong Number
/*
    series of Arms: 1, 2, 3, 4, 5, 6, 7, 8, 9, 153, 370, 371, 407, 1634, 8208, 9474, 54748, .....
*/
let num = Number(process.argv[2]);
let arms;
let result_armstrong;
let temp_num  = num;
let i=1;
while(num){
    arms = isArmstrongNumber(i);
    if(arms){
        result_armstrong = i;
        num--;
    }
    i++;
}
console.log(`${temp_num}th armstrong number is ${result_armstrong}`);
function isArmstrongNumber(number){
    const power = digits(number);
    let temp_sum = 0;
    let temp_number = number
    while(number){
        let r = number % 10;
        temp_sum += r**power;
        number = Math.floor(number/10); 
    }
    if(temp_number == temp_sum ){
        return true;
    }
    return false;
}

function digits(number){
    let count = 0;
    while(number){
        count++;
        number = Math.floor(number/10)
    }
    return count;
}