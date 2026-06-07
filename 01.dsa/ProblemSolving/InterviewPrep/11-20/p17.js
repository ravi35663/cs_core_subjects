/*
    Check if two strings are rotations of each other.
    String 1: "hello"
    String 2: "lohel"
*/

const [str1,str2] = process.argv.slice(2);
function isRotation(str1,str2){
    let count = str1.length;
    if(str1.length != str2.length){
        return false;
    }
    let temp_str = str1.split('')
    while(count){
        // Rotate string 2;
        let len = temp_str.length
        const last_ch = temp_str[len-1];
        for(let i=temp_str.length-1; i>0; i--){
            [temp_str[i],temp_str[i-1]] = [temp_str[i-1],temp_str[i]];
        }
        temp_str[0] = last_ch;
        if(str2 === temp_str.join('')){
            return true
        }
        count--;
    }
    return  false;
}

console.log("Is two string rotatable ?",isRotation(str1,str2));

