/*
    Write a function called collectStrings which accepts an object and returns an array of 
    all the values in the object that have a typeof string
    const obj = {
        stuff: "foo",
        data: {
            val: {
                thing: {
                    info: "bar",
                    moreInfo: {
                        evenMoreInfo: {
                            weMadeIt: "baz"
                        }
                    }
                }
            }
        }
    }
    collectStrings(obj) // ["foo", "bar", "baz"]
*/
function collectStrings(obj){
    let keys = Object.keys(obj);
    let arr = [];
    for(let key of keys){
        let item  = obj[key];
        if(item.constructor === Object){
            arr = arr.concat(collectStrings(item));
        }else{
            if(item.constructor === String){
                arr.push(item);
            }
        }
    }
    return arr;
}

const obj = {
    stuff: "foo",
    data: {
        t:"omega2",
        val: {
            t:"omega",
            thing: {
                info: "bar",
                info2:[1,2,3,4],
                info3:"alpha",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz",
                        omega:"OMEGA"
                    }
                }
            }
        }
    }
}

const result = collectStrings(obj);
console.log("Result is : ",result);