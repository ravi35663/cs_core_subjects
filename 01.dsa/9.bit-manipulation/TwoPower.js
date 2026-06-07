/*
    Check a number is power of two:
*/

function powerTwo(num){
    let temp_num = num - 1;
    num = num & temp_num;
    return num ==0 ? true:false;
}

const nums = [1,2,3,4,5,6,7,8,9,10,16,32,64,55];
nums.forEach(item=>{
    const result = powerTwo(item);
    console.log(`${item} is power of two:  ${result}`);
})