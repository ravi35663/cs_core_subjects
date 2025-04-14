/*
==> Space20
->  Given a string, write a function to replace all spaces in a string with '%20'. 
    It is given that the string has sufficient space at the end to hold the additional characters.

    input: hello world,  how are you?
    output: hello%20world,%20%20how%20are%20you?
*/

// Method - 1
// function replaceSpace(str){
//     let result = "";
//     for(let i=0;i<str.length;i++){
//         result += str[i] === ' ' ? "%20" :str[i]
//         if(str[i] === ' '){
//             result
//         }
//     }
//     return result;
// }
// const str = 'hello world,  how are you?'
// console.log("Result is : ",replaceSpace(str));

// Method - 2
function replaceSpace(str){
    // lets assume you have array of string is given and now you have to replace all spaces with %20.
    let arr = [...str];
    let spaces = 0;
    console.log("Input is : ",str);
    arr.forEach(item=>{
        if(item === ' '){
            spaces++
        }
    });
    spaces = 2* spaces;
    while(spaces){
        arr.push(undefined);
        spaces--
    }
    let i = arr.length-1; 
    while(i>=0){
        if(arr[i] === ' '){
            let k = 2
            while(k){
                for(let j=arr.length-1;j>i;j--){
                    arr[j] = arr[j-1]
                };
                k--;
            }
            arr[i] = '%'
            arr[i+1] = '2'
            arr[i+2] = '0'
        }
        i--;
    }
    // console.log("Output: ",arr)
    return arr.join('');

}

// Method -3 (Optimised)
function replaceSpace(str){
    // lets assume you have array of string is given and now you have to replace all spaces with %20.
    let arr = [...str];
    let spaces = 0;
    console.log("Input is : ",str);
    arr.forEach(item=>{
        if(item === ' '){
            spaces++
        }
    });
    spaces = 2* spaces;
    let end = str.length + spaces;
    // to add extra spaces at the end
    arr.length = end;
    for(let i=str.length-1;i>=0;i--){
        if(arr[i] === ' '){
            arr[end-1] = '0';
            arr[end-2] = '2'
            arr[end-3] = '%'
            end = end - 3;
        }else{
            arr[end-1] = arr[i];
            end--
        }
    } 
    return arr.join('');
}

const str = 'hello world,  how are you?'
// const str = 'hello ?'
console.log("Result is : ",replaceSpace(str));

// ['h', 'e', 'l', 'l', 'o', ' ','w', 'o', 'r', 'l', 'd', ',',' ', ' ', 'h', 'o', 'w', ' ','a', 'r', 'e', ' ', 'y', 'o','u', '?']