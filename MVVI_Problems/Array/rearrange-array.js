/*
    Rearrange Array Elements by Sign:
    Given an array arr[] of size n, the task is to rearrange it in alternate positive and negative manner 
    without changing the relative order of positive and negative numbers. 
    In case of extra positive/negative numbers, they appear at the end of the array.

    Note: The rearranged array should start with a positive number and 0 (zero) should be considered as a 
    positive number.
    
    Examples: 
    Input:  arr[] = {1, 2, 3, -4, -1, 4}
    Output: arr[] = {1, -4, 2, -1, 3, 4}


    Input:  arr[] = {-5, -2, 5, 2, 4, 7, 1, 8, 0, -8}
    Output: arr[] = {-5, 5, -2, 2, -8, 4, 7, 1, 8, 0}

*/
//  Without using any extra space:
function rearrangeArray(arr){
    for(let i=0;i<arr.length;i=i+2){
        let index = -1;
        // To check next positive/negative number
        for(let j=i+1;j<arr.length;j++){
            if(arr[i] > 0 && arr[j]<0){
                index = j;
                break;
            }else if(arr[i] < 0 && arr[j] > 0){
                index = j;
                break;
            }
        }
        // To free space for the next positive/negative value
        if(index == -1){
            return arr;
        }else{
            const val = arr[index];
            for(let j=index;j>i+1;j--){
                [arr[j],arr[j-1]] = [arr[j-1],arr[j]]
            }
            arr[i+1] = val;
        }
    }
    return arr;
}

// By using extra space: T.C: O(N) & S.C: O(N)
function rearrangeArrayElements(arr){
    const pos = [];
    const neg = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i] >= 0){
            pos.push(arr[i]);
        }else{
            neg.push(arr[i]);
        }
    }
    if(arr[0] > 0){
        return mergePosNegArray(pos,neg);
    }else{
        return mergePosNegArray(neg,pos);
    }
}

function mergePosNegArray(arr1,arr2){
    let i=0,j=0;
    const result = [];
    while(i<arr1.length && j<arr2.length){
        result.push(arr1[i++]);
        result.push(arr2[j++]);
    }
    while(i<arr1.length){
        result.push(arr1[i++]);
    }
    while(j<arr2.length){
        result.push(arr2[j++]);
    }
    return result;
}

// const arr = [1, 2, 3, -4, -1, 4];
const arr = [-5, -2, 5, 2, 4, 7, 1, 8, 0, -8];
console.log("Result is: ",rearrangeArrayElements(arr));
