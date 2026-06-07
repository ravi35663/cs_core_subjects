/*
    11 ==> Write a recursive function called nestedEvenSum. Return the sum of all even 
    numbers in an object which may contain nested objects.
    function nestedEvenSum () {
        // add whatever parameters you deem necessary - good luck!
    }
    var obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
        }}
    }
    var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
    };
    nestedEvenSum(obj1); // 6
    nestedEvenSum(obj2); // 10
*/

const nestedEvenSum = (oldObj)=>{
    let sum = 0;
    let objKeys = Object.keys(oldObj);
    for(let i=0;i<objKeys.length;i++){
        item = objKeys[i]
        let temp = oldObj[item];
        if(typeof(temp) === 'object'){
            sum = sum + nestedEvenSum(temp);
        }else{
            if(typeof(temp) === 'number' && temp%2 == 0){
                sum += temp;
            }
        }
    }
    return sum;
}

// This one is more optimsed
function nestedEvenSum1(obj, sum=0) {
    for (var key in obj) {
        if (typeof obj[key] === 'object'){
            sum += nestedEvenSum1(obj[key]);
        } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0){
            sum += obj[key];
        }
    }
    return sum;
}

var obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
        }}
}
var obj2 = {
a: 2,
b: {b: 2, bb: {b: 3, bb: {b: 2}}},
c: {c: {c: 2}, cc: 'ball', ccc: 5},
d: 1,
e: {e: {e: 2}, ee: 'car'}
};
var obj3 = {key1:4,key2:{key3:7,key4:"name",key5:8}};

console.log(nestedEvenSum(obj1))
console.log(nestedEvenSum(obj2))
console.log(nestedEvenSum(obj3))