// Copy code

/*
    Minimum Difference
    Implement a function that takes in two non-empty arrays of integers, finds the pair of numbers 
    (one from each array) who absolute difference is closest to zero, and returns a pair containing 
    these two numbers, with the first number from array. Only one such pair will exist for the test.

    Input
    Array1 = [23, 5, 10, 17, 30]
    Array2 = [26, 134, 135, 14, 19]
    Output

    17,19


*/

function maxSubArraySum(arr1, arr2) {
    let diff = Infinity;
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);
    let a = 0, b = 0, i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
        let d = Math.abs(arr1[i] - arr2[j]);
        if (d < diff) {
            diff = d;
            a = arr1[i];
            b = arr2[j];
        }
        if (arr1[i] < arr2[j]) {
            i++;
        } else {
            j++;
        }
    }
    return [a, b];
}