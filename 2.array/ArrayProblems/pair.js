/*
    Print Pair of the elements:
    arr = [1,2,3,4]
    pairs=> (1,2),(1,3),(1,4),(2,3),(2,4),(3,4)
*/

const arr = [1,2,3,4];
function printAllPair(arr){
    const pairs=[]
    arr.forEach((item,index)=>{
        for(let i = index+1 ; i<arr.length;i++){
            pairs.push([arr[index],arr[i]])
        }
    })
    return pairs;
}
const result = printAllPairs(arr);
console.log('Pairs: are: ',result);