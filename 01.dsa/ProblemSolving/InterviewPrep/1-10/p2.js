/*
Write a recursive function called reverse which accepts a string and returns a new string in reverse.
    reverse('awesome') // 'emosewa'
    reverse('rithmschool') // 'loohcsmhtir'
*/

function reverse(str){
    if(str.length === 1){
        return str[0];
    }
    return reverse(str.slice(1)) + str[0];
}

const str = "aaalaaa";
console.log("Reversed Number is : ",reverse(str));