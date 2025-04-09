/*
    Sub-array
    arr = [1,2,3,4]
    -> (1),(1,2),(1,2,3),(1,2,3,4)
    -> (2),(2,3),(2,3,4)
    -> (3),(3,4)
    -> (4)
*/

const arr = [1,2,-3,4,5,-1];
function subArray(arr){
    for(let i=0; i<arr.length; i++){
        for(let j=i; j<arr.length; j++){
            // You can replace this loop by using slice operator and then complexity goes from O(n^3) to O(n^2)
            for(let k=i;k<=j;k++){
                process.stdout.write(`${arr[k]},`);
            }
            console.log(' ')
        }
        console.log('');
    }
}
// Time complexity of the above algorithm is O(n^3)

// subArray(arr);

/*
    WAP to find maximum sub-array sum
*/

function maximumSubArraySum(arr){
    let max_sum = arr[0];
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            let sum = 0;
            for(let k = i;k<=j;k++){
                sum +=arr[k];
            }
            if(sum > max_sum){
                max_sum = sum
            }
        }
    }
    return max_sum;
}

const result = maximumSubArraySum(arr);
console.log("Maximum Sub Array is : ",result);