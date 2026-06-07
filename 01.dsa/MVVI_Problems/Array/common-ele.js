function commonElements(arr1, arr2, arr3) {
    const obj = {};
    const arr = []
    for(let i = 0;i<arr1.length;i++){
        obj[arr1[i]] = "1";
    }
    for(let i = 0;i<arr2.length;i++){
        if(obj[arr2[i]] == "1"){
            obj[arr2[i]] = "12";
        }
    }
  for(let i = 0;i<arr3.length;i++){
        if(obj[arr3[i]] == "12"){
            arr.push(arr3[i]);
            obj[arr3[i]] = "123"
        }
    }
    return arr;
}

const arr1 = "10 20 44 44 58 58 89 91 97 100 14".split(" ")
const arr2 = "8 14 21 24 26 33 43 52 73 96".split(" ")
const arr3 = "2 9 14 32 41 68 79 84 14".split(" ")
const result = commonElements(arr1,arr2,arr3);
console.log("Result is: ",result);