/*
Staircase Search:
    You are given a M x N matrix which is row wise and column wise sorted. You have to search the index of a 
    given integer K in the matrix.

    Input Format:
        Function contains integer M, integer N ,2D vector containing integers and an integer k.

    Output Format:
    Return a pair of integers {x,y} where x is the row index and y is column index of k in the matrix.
    
    Expected Complexity: Linear

    Sample Test case:
    Input:
    3 3

    1 4 9
    2 5 10
    6 7 11

    10

    Output:
    {1,2}
    Explanation:
    Index of 10 in matrix is 1,2.
*/
// Method - 1 (Binary Search)
function Staircase(arr,element){
    let start = 0;
    let end = arr.length - 1;
    while(start <= end){
        let mid = Math.floor((start+end)/2);
        const arr_mid = arr[mid];
        const len = arr_mid.length - 1;
        
        if(arr_mid[len] == element){
            return [mid,len];
        }
        else if(arr_mid[len] > element){
            if(arr_mid[0] < element){
                const index = binarySearch(arr_mid,element);
                if(index != -1){
                    return [mid,index];
                } 
            }
            end = mid - 1;
        }else{
            start = mid + 1;
        }
    }
    return -1;
}

function binarySearch(arr,element){
    let start = 0;
    let end = arr.length - 1;
    while(start <= end){
        let mid = Math.floor((start+end)/2);
        if(arr[mid] === element){
            return mid;
        }else if(arr[mid] > element){
            end = mid - 1;
        }else{
            start = mid + 1;
        }
    }
    return -1;
}

// Method 2: with linear search:
function stairCase(m,n,arr,element){
    let row = 0;
    let col = n - 1;
    while(row < m && col >=0){
        if(arr[row][col] == element){
            return [row,col];
        }else if(arr[row][col] < element ){
            // then go down
            row++;
        }else{
            // Go left
            col--;
        }
    }
    return [-1,-1]
}
const arr = [[1,4,9],[2,5,10],[6,7,11]];
const element = 10;
const result = stairCase(arr.length,arr[0].length,arr,element)
console.log("Result is: ",result);