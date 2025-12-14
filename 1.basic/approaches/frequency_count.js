/*
==> Frequency Counter : -
	-> This method uses objects or sets to collect values/frequencies of values.
	-> This can often avoid the need of nested loop or O(n^2) operations with arrays 
       and strings.
*/
// Implementation

const arr = [1,2,3,3,1,1,2,4,5];
function frequencyCounter(arr){
    const obj = {};
    arr.forEach(item=>{
        if(obj[item]){
            obj[item] +=1; 
        }else{
            obj[item] = 1;
        }
    });
    const counts = Object.entries(obj);
    counts.forEach(item=>{
        console.log(`${item[0]} count is : ${item[1]}`);
    })
    return counts;
}

frequencyCounter(arr);