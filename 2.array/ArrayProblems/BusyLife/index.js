/*
    Busy Life
    You are actually very busy person. You have a long list of activities. Your aim is to finish much as 
    activities as possible. In the given figure, if you go to date with crush, you cannot participate in 
    the coding contest and you can’t watch the movie. Also if you play DotA, you can’t study for the exam. 
    If you study for the exam you can’t sleep peacefully. The maximum number of activities that you can do 
    for this schedule is 3.
    
    Either you can : (in max 1 slot)
        1) watch movie, play DotA and sleep peacefully (or)
        2) date with crush, play DotA and sleep peacefully

    Given the start and finish times of activities, print the maximum number of activities. Input is already store in a vector of pairs. Each pair contains the start and end of the activity.

    Sample Input
    (7,9) (0,10) (4,5) (8,9) (4,10) (5,7)

    Output
    3

    Hints
    Think Sorting!

    Expected Complexity
    O(NLogN)
*/

// Sorted Array: [ [ 4, 5 ], [ 5, 7 ], [ 7, 9 ], [ 8, 9 ], [ 0, 10 ], [ 4, 10 ] ]
function busyLife(arr){
    let count = 1;
    arr.sort((a,b)=> (a[1]-b[1]));
    let finish = arr[0][1];
    for(let i=1;i<arr.length;i++){
        if(arr[i][0] >=finish){
            count++;
            finish = arr[i][1]
        }
    }
    return count;
}

const arr = [[7,9], [0,10], [4,5], [8,9], [4,10], [5,7]]

const activities = busyLife(arr);