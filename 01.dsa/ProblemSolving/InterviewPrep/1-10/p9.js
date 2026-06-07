/*
    Write a function called stringifyNumbers which takes in an object and finds all of 
    the values which are numbers and converts them to strings. 
    Recursion would be a great way to solve this!
/*
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
/*

stringifyNumbers(obj)

/*
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
    let result_object = {};
    const keys = Object.keys(obj);
    for(let key of keys){
        let item = obj[key];
        if(item.constructor === Object){
            result_object = {...result_object,[key]:stringifyNumbers(item)}
        }else{
            if(item.constructor === Number){
                item = String(item);
            }
            result_object = {...result_object,[key]:item}
        }
    }
    return result_object;
}

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66,
            obj3:{
                obj4:{
                    obj5:{
                        n:10,
                        k:11
                    },
                    t:"78",
                    n:true
                },
                pp:10
            }
        }
    }
}

const result = stringifyNumbers(obj)
console.log("Results is: ",result);
