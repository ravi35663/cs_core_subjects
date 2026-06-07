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
    collectStrings(obj) // ["foo", "bar", "baz"])
*/

const collectStrings = (obj)=>{
    const keys = Object.keys(obj)
    let result_array = [];
    for(let i=0;i<keys.length;i++){
        let item = keys[i];
        if(typeof(obj[item]) === 'object'){
            result_array = result_array.concat(collectStrings(obj[item]));
        }else{
            result_array.push(obj[item]);
        }
    }
    return result_array;
}

// Second way (more optimised)
function collectStrings(obj) {
    var stringsArr = [];
 
    function gatherStrings(o) {
        for(var key in o) {
            if(typeof o[key] === 'string') {
                stringsArr.push(o[key]);
            }
            else if(typeof o[key] === 'object') {
                return gatherStrings(o[key]);
            }
        }
    }
 
    gatherStrings(obj);
 
    return stringsArr;
}

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
console.log(collectStrings(obj));