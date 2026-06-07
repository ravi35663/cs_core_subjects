/*
Next Greater Element:
    Given an array, return the Next Greater Element for every element. The Next greater Element for 
    an element x is the first greater element on the right side of x in the array. Elements for which 
    no greater element exist, consider the next greater element as -1.


    Input Format
        In the function an integer vector is passed
    Output Format
        Return an integer vector containing the next greater element for each element


    Sample Input
        v = [ 4, 5, 2, 25 ]
    Sample Output
        [5, 25, 25, -1] 
*/

function nextGreaterNumber(arr){
    const stack = [];
    const result  = new Array(arr.length).fill(-1);
    for(let i=arr.length-1;i>=0;i--){
        if(stack.length == 0){
            result[i] = -1;
            stack.push(arr[i]);
        }else{
            let popped_item = stack.pop();
            if(popped_item > arr[i]){
                result[i] = popped_item
                stack.push(popped_item,arr[i]);
            }else{
                while(popped_item < arr[i]){
                    popped_item = stack.pop();
                }
                if(popped_item == undefined){
                    result[i] = arr[i];
                    stack.push(arr[i]);
                }else{
                    result[i] = popped_item;
                    stack.push(popped_item);
                    stack.push(arr[i]);
                }
            }
        }
    }
    return result;
}

const arr = [ 4, 5, 2,3, 25 ];
console.log("Next item is: ",nextGreaterNumber(arr));