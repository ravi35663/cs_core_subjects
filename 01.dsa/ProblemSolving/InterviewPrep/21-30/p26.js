/*
    Remove duplicates from an array.
    Array: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
*/
// Brut force approach
function removeDuplicateItems(arr){
    arr.forEach(item=>{
        let count = countItems(arr,item);
        if(count > 1){
            // Remove count-1 number times of the item 
            arr = removeItems(arr,item,count-1)
        }

    })
    return arr;
}

function countItems(arr,item){
    let count = 0
    arr.forEach(ele=>{
        if(ele == item){
            count++;
        }
    });
    return count;
}
//
function removeItems(arr,item,count){
    for(let i=0;i<arr.length && count;i++){
        if(arr[i] === item && count){
            for(let j=i;j<arr.length-1;j++){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
            }
            // popping out
            arr.length = arr.length-1
            count--;
        }
    }
    return arr;
}
// const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const arr = [-2, 1, 5, 4, -1, -2, 1, 5,5,4,5, 4,10];
// const result = removeDuplicateItems(arr);
// console.log("Result array is: ",result);


//Method - 2
function uniqueItems(arr){
    const obj = {};
    arr.forEach(item=>{
        obj[item] = item;
    });
    return Object.values(obj);
}
const result = uniqueItems(arr);
console.log("Result array is: ",result);