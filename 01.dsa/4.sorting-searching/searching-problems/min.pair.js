/*
==> Given two non-empty arrays, find the pair of numbers (one from each array) whose absolute 
    difference is minimum. Print any one pair with the smallest difference.

    Sample Input
    a1 = [-1, 5, 10, 20, 3]
    a2 = [26, 134, 135, 15, 17]

    Sample Output
    [20, 17]
*/

function minPair(arr,arr2){
    arr2.sort((a,b) => a-b);
    let pair = [arr2[0],arr[0]];
    let diff = arr2[0] - arr[0]
    diff = makePositive(diff);
    for(let i=0; i<arr.length; i++){
        let item = arr[i];
        const lb_index = lowerBound(arr2,item);
        let temp;
        if(lb_index > 0 ){
            temp = makePositive(arr2[lb_index-1] - item);
            if(temp < diff){
                diff = temp;
                pair = [item,arr2[lb_index-1]];
            }
        }
        temp = makePositive(arr2[lb_index] - item);
        if(temp < diff){
            diff = temp;
            pair = [item,arr2[lb_index]];
        }
    }
    return pair;
}
const lowerBound = (arr,key)=>{
    // let index = 0;
    let start = 0;
    let end = arr.length - 1;
    while(start < end){
        const mid = Math.floor((start+end)/2);
        if(arr[mid] >= key){
            end = mid;
        }else{
            start = mid + 1
        }
    }
    return start
}

const makePositive = (value)=>{
    return value > 0 ? value : value * -1;
}

const a1 = [-1, 5, 10, 20,19, 3]
const a2 = [26, 134, 135, 15, 17]

const result = minPair(a1,a2);
console.log("Minimum pair is :",result);