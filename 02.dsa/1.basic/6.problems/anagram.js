/*
 * Anagram , ramanag 
*/

const str  = process.argv;
const isAnagram = (str1,str2)=>{
    if(str1.length !== str2.length){
        return false;
    }
    const obj1 = {};
    const obj2 = {};
    for(let i=0 ; i<str1.length ; i++){
        let ch1 = str1[i]
        let ch2 = str2[i]
        obj1[ch1] = (obj1[ch1] || 0) + 1
        obj2[ch2] = (obj2[ch2] || 0) + 1
    }
    for(let char of str1){
        if(obj1[char] !=obj2[char]){
            return false;
        }
    }
    return true;
}

const ana = isAnagram(str[2],str[3])
console.log("is Anagram",ana);