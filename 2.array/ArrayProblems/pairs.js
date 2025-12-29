/*
    Given an array containing N integers, and an number S denoting a target sum.
    Find two distinct integers that can pair up to form a target sum.
    Let's assume there would be only one such pair

    Input: 
        arr  = [10,2,3,-6,8,7,5]
        S = 4;
    Output:
        [10,-6]
*/

/*
    Solutions:
    1)  You can use Brute-force method to find such pair and that will take O(N^2) time complexity
    2)  You can sort the array and you can use binary search to find that pair that will take O(N(logN)) 
        complexity
    3) Or you can thinks of any data strcuture that take less time to solve this problem
*/

// Solving using data structure ((this will take O(N) time complexity))
function pair(arr,target_sum){
    let obj = {};
    for(let i=0;i<arr.length;i++){
        const value = arr[i];
        const req_value = target_sum - value;
        if(obj[req_value] !== undefined){
            return [value,req_value]
        }
        obj[value] = true;
    }
    return null;
}

const arr  = [10,2,3,-6,8,7,5]
const target_sum = 4;
const result = pair(arr,target_sum);
console.log("Result is : ",result);