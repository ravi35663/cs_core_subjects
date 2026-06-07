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

function nestedEvenSum(obj){
    let sum=0;// it will hold each level object sum from start
    let obj_values = Object.values(obj);
    for(let i=0;i<obj_values.length;i++){
        let item = obj_values[i];
        if(item.constructor===Object){
            sum = sum + nestedEvenSum(item,sum)
        }else{
            if(item.constructor === Number && item%2==0){
                sum = sum + item
            }
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
        new_key:{
            even:10,
            odd:1,
            even_1:10,
            even_12:{
                ev1:10
            }
        },
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
const s = nestedEvenSum(obj1); // 6
console.log("Sum is :",s)
// nestedEvenSum(obj2); // 10