/*
    Find the majority element in an array.
    Input: [3, 3, 4, 2, 4, 4, 2, 4, 4]
    Output: 4
*/

const arr = [3, 3, 4, 2, 4, 4, 2, 4, 4,2,2,2,];
function majorityElement(){
    const obj = {};
    arr.forEach(item=>{
        if(obj[item]){
            obj[item] += 1;
        }else{
            obj[item] = 1
        }
    });
    const entities = Object.entries(obj);
    let item = entities[0];
    entities.forEach(ele=>{
        if(item[1] < ele[1]){
            item = ele;
        }
    })
    return Number(item[0])
}

const result = majorityElement(arr);
console.log("Major element in the array is: ",result);