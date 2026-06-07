/*
    Angry Birds

    There is a long wire along a straight line, which contains N bird nests at positions x1, x2 ....xN.

    There are B (B<=N) birds, which become angry towards each other once put into a nest. 
    To put the birds from hurting each other you want to assign birds to nests such that minimum 
    distance between any two birds is as large as possible. 
    What is the largest minimum distance?
*/


function maximumDistribution(birds,n,nest_ordinates){
    nest_ordinates.sort((a,b)=> a-b);
    let start = 0;
    let end = nest_ordinates[n-1] - nest_ordinates[0];
    let distribution = -1;
    while(start<=end){
        const mid = Math.floor((start+end)/2);
        // minimum distance should be 'mid' between the birds
        // start at position 0 and go further
        let start_bird_position = nest_ordinates[0];
        let count = 1;
        let i=1;
        while(i<n){
            if(nest_ordinates[i] - start_bird_position >=mid){
                start_bird_position = nest_ordinates[i];
                count++;
                if(count === birds){
                    break;
                }
            }
            i++
        }
        if(count === birds){
            distribution = mid;
            start = mid + 1;
        }else{
            end = mid -1;
        }
    }
    return distribution;

}

const nest_ordinates = [1,2,4,8,9];
const birds = 3;
const n = 5 // Number of nests

const d = maximumDistribution(birds,n,nest_ordinates);
console.log("Maximum distribution is: ",d);
