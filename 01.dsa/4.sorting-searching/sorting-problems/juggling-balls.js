/*
    Juggling Balls:
        Given an array containing balls of Red, Blue and Green Color in a random order. Your goal is to 
        arrange these balls in sorted order - Red Balls, followed by Blue and then Green Balls. 
        Red balls are denoted using number 0, Blue using 1 and Green using 2.

        Note: Try to solve the problem in a single scan of the array without using extra space.

        Hint - read about DNF Algorithm.
        Input
            {0, 0, 1, 2, 0, 1, 2, 0}
        Output:
            {0, 0, 0, 0, 1, 1, 2, 2}

*/

function DNFAlgorithm(arr){
    let low = 0,mid = 0, high = arr.length - 1;
    const first = 0, second = 1;
    while(mid<=high){
        if(arr[mid] === first){
            [arr[mid],arr[low]] = [arr[low],arr[mid]];
            low++;
            mid++
        } else if(arr[mid] === second){
            mid++;
        }else{
            [arr[mid],arr[high]] = [arr[high],arr[mid]];
            high--;
        }
    }
    return arr;
}

const arr = [0, 0, 1, 2, 0, 1, 2, 0];
console.log("DNFAlgorithm: ",DNFAlgorithm(arr));