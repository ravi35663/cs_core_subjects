// // Multi pointer
// function isSubsequence(str1,str2) {
//     // good luck. Add any arguments you deem necessary.
//     let obj1 = {}
//     let obj2 = {};
//     for(let i=0;i<str1.length;i++){
//         obj1[str1[i]] =  obj1[str1[i]] ? obj1[str1[i]] + i : i;
//     }
//     for(let i=0;i<str2.length;i++){
//         obj2[str2[i]] =  obj2[str2[i]] ? obj2[str2[i]] + i : i;
//     }
//     let len =0;
//     if(str1.length < str2.length){
//         len = str1.length; 
//     }else{
//         return false;
//     }
//     console.log(obj1)
//     console.log(obj2)
//     for(let i=0;i<len;i++){
//         let index_1 = obj1[str1[i]]===undefined ? -1 : obj1[str1[i]] ;
//         let index_2 = obj2[str1[i]]===undefined ? -1 : obj2[str1[i]] ;
//         if(index_2 === -1 || index_1 === -1){
//             return false;
//         }
//         if(index_2 - index_1 < 0){
//             return false;
//         }
//     }
//     return true;
// }

function isSubsequence(str1,str2) {
    // console.log(str1,"<><><><>",str2)
    // good luck. Add any arguments you deem necessary.
    let obj1 = {}
    let obj2 = {};
    for(let i=0;i<str1.length;i++){
        obj1[str1[i]] =  obj1[str1[i]] ? obj1[str1[i]] + i : i;
    }
    for(let i=0;i<str2.length;i++){
        obj2[str2[i]] =  obj2[str2[i]] ? obj2[str2[i]] + i : i;
    }
    let len = str1.length;
    // if(str1.length < str2.length){
    //     len = str1.length; 
    // }else{
    //     return false;
    // }
    // console.log('Hello World')
    for(let i=0;i<len;i++){
        // let index_1 = obj1[str1[i]]===undefined ? -1 : obj1[str1[i]] ;
        // let index_2 = obj2[str1[i]]===undefined ? -1 : obj2[str1[i]] ;
        // if(index_2 === -1 || index_1 === -1){
        //     return false;
        // }
        if(obj2[str1[i]]- obj1[str1[i]] < 0){
            console.log("Hello");
            return false;
        }
    }
    return true;
}

console.log(isSubsequence('sing', 'sting'))
console.log(isSubsequence('yo', 'yo'))