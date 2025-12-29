/*
    Given array of integers containing N integers and a number S denoting target sum.
    Find all distinct integers that can add up to form a target sum.
    The numbers in each triplets should be in ascending order, and triplets should be ordered too.
    If there is no such triplets you can return an empty array.

    Input:
        arr = [7,8,9,15,1,2,3,4,5,6]
        S = 18;

    Output:[
    [ 1, 2, 15 ],
    [ 1, 8, 9 ],
    [ 2, 7, 9 ],
    [ 3, 6, 9 ],
    [ 3, 7, 8 ],
    [ 4, 5, 9 ],
    [ 4, 6, 8 ],
    [ 5, 6, 7 ]
    ]
*/

/*
    1) Brute-force will O(N^3) complexity
    2) So we use two pointer sum approach to solve this problem (it will take O(N^2) time complexity)
*/

function triplets(arr,S){
    // We are sorting the array because we want  to get result in ascending order
    const sorted_array = mergeSort(arr);
    const result_arr = []
    for(let i=0;i<=sorted_array.length-3;i++){
        let target_sum = S - sorted_array[i];
        let j = i+1;
        let k = sorted_array.length-1;
        while(j < k){
            const sum = sorted_array[j] + sorted_array[k];
            if( sum == target_sum){
                result_arr.push([sorted_array[i],sorted_array[j],sorted_array[k]]);
                j++;
                k--;
            }else if(sum > target_sum){
                k--;
            }else{
                j++;
            }
        }
        // Below part is also correct but it will take O(N) extra space for the hashtabl
        // let obj = {}
        // for(let j = i+1; j<sorted_array.length;j++){
        //     let value = sorted_array[j];
        //     let need_value = target_sum - value;
        //     // console.log("Value: ",[sorted_array[i],sorted_array[j],need_value])
        //     if(obj[need_value]){
        //         result_arr.push([sorted_array[i],need_value,sorted_array[j]]);
        //         break;
        //     }else{
        //         obj[value] = true;
        //     }
        // }
    }
    return result_arr;
}

const arr = [7,8,9,15,1,2,3,4,5,6]
const S = 18;

const result = triplets(arr,S);
console.log("Result is: ",result);

//Sort the array using merge sort (Will take N(LogN))
function mergeSort(arr){
    if(arr.length > 1 ){
        const mid = Math.floor(arr.length/2);
        let left = arr.slice(0,mid);
        let right = arr.slice(mid);
        // Break the array in further small chunks
        left = mergeSort(left);
        right = mergeSort(right);
        // Merge the sorted arrays;
        return mergerSortedArrays(left,right);
    }else{
        return arr;
    }
}

function mergerSortedArrays(arr1,arr2){
    let i=0,j=0,m=arr1.length,n=arr2.length,result_arr=[];
    while(i< m && j < n){
        if(arr1[i] < arr2[j]){
            result_arr.push(arr1[i]);
            i++;
        }else{
            result_arr.push(arr2[j]);  
            j++;
        }
    }
    while(i < m){
        result_arr.push(arr1[i]);
        i++;
    }
    while(j < n){
        result_arr.push(arr2[j]);
        j++;
    }
    return result_arr;
}

