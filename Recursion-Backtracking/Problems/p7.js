/*
    Write a recursive function called isPalindrome which returns true if the string passed 
    to it is a palindrome (reads the same forward and backward). 
    Otherwise it returns false.
    // isPalindrome('awesome') // false
    // isPalindrome('foobar') // false
    // isPalindrome('tacocat') // true
    // isPalindrome('amanaplanacanalpanama') // true
    // isPalindrome('amanaplanacanalpandemonium') // false
*/

const isPalindrome = (str)=>{
    if(str.length <= 1){
        return true;
    }
    if(str[0] !== str[str.length-1]){
        return false;
    }
    return isPalindrome(str.slice(1,str.length-1));
}

console.log('awesome ',isPalindrome('awesome'))
console.log('foobar ',isPalindrome('foobar'))
console.log('tacocat ',isPalindrome('tacocat'))
console.log('amanaplanacanalpanama ',isPalindrome('amanaplanacanalpanama'))
console.log('amanaplanacanalpandemonium ',isPalindrome('amanaplanacanalpandemonium'))
console.log('naan ',isPalindrome('naan'))
