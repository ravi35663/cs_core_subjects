/*
    Given an array containing N integers, find length of the longest band.
    A band is defined as subsequence which can be re-ordered in such a manner that all elements appears
    consequently (i.e. the absolute difference of 1 between neighboring elements)
    Here,
    A longest band is a band which contains maximum subsequence .
    const arr = [1,9,3,0,18,5,2,4,10,7,12,6];
    max_band = [0,1,2,3,4,5,6,7]    which is 8

    Sol: you can solve it be sorting the arr but time complexity will be NLogN.
    Sol: you must solve in O(logN) complexity:
*/

/* Below program has time complexity is O(n)*/ 
function findMaximumBand(arr){
    // first we need to make existence of the range elements
    let items = {};
    // To keep maximum band value
    let max_band = 0;
    arr.forEach(item=> items[item]=true);
    for(let i=0; i<arr.length; i++){
        let item = arr[i];
        let band = 0;
        if(items[item-1] === undefined){
            while(items[item]){
                item++;
                band++;
            }
            if(band > max_band){
                max_band = band;
            }
        }
    }
    return max_band;
}

const arr = [1,9,3,0,18,5,2,4,10,7,12,6];
console.log("Maximum band: ",findMaximumBand(arr)); 