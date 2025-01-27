/*
All Occurrence!
    You are given an integer array of size N. Your aim is to find all the occurrences (indices) of a 
    given element.

    Input format:
    Vector V and integer k (to find) are passed as parameters.

    Output parameter:
        Return a vector of integers containing all the indices in sorted manner.

    Sample Input:
    3
    1 2 5 3 1 2 3 8 6 3 6 7 9

    Sample Output:
    3 6 9
    // Write it into javascript
*/

function allOccurrence(k,v, output=[],i=0){
    if(i == v.length){
        return output;
    }
    if(v[i] == k){
        output.push(i);
    }
    return allOccurrence(k,v,output,i+1);
}