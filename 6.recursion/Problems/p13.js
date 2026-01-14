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
    // let keys = Object.keys(obj);
    for(let item in obj){
        console.log('item is ',item);
        if(typeof(obj[item]) === 'number'){
            obj[item] = String(obj[item]);
        }else if (typeof(obj[item]) === 'object' && !Array.isArray(obj[item])){
            obj[item] = stringifyNumbers(obj[item]);
        }
    }
    return obj;
}

// Seond more optimsed;
function stringifyNumbers(obj) {
    var newObj = {};
    for (var key in obj) {
      if (typeof obj[key] === 'number') {
        newObj[key] = obj[key].toString();
      } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        newObj[key] = stringifyNumbers(obj[key]);
      } else {
        newObj[key] = obj[key];
      }
    }
    return newObj;
  }



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
console.log(stringifyNumbers(obj))
