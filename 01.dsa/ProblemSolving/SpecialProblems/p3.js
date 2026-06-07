/*
 Write a recursive function called reverse which accepts a string and returns a new 
 string in reverse.
// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
*/

const str = process.argv[2]
function reverse(temp_str,rev=''){
    if(temp_str.length==0){
        return rev
    }
    rev = temp_str[0] + rev 
    return reverse(temp_str.slice(1),rev)
}

const rev = reverse(str)
console.log("Reverse number is : ",rev);