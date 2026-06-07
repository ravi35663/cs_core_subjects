/*
    Write a function called stringifyNumbers which takes in an object and finds all of 
    the values which are numbers and converts them to strings. 
    Recursion would be a great way to solve this!
*/
/* Input:
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
*/
/* Output:
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/

function stringifyNumbers(obj){
    let keys = Object.keys(obj)
    for(let i=0;i<keys.length;i++){
        let key = keys[i];
        value = obj[key];
        if(value.constructor === Object){
            obj[key] = stringifyNumbers(value)
            return obj;
        }else{
            if(value.constructor === Number){
                value = String(value)
                obj[key] = value
            }
        }
    }
    return obj;
}
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66,
            obj1:{
                key:90,
                obj2:{
                    key:91
                }
            }
        }
    }
}

const str_obj = stringifyNumbers(obj)
console.log("str_obj: ",str_obj)