/*
    Write a recursive function called isPalindrome which returns true if the string passed 
    to it is a palindrome. 
    Otherwise it returns false.
    // isPalindrome('awesome') // false
    // isPalindrome('foobar') // false
    // isPalindrome('tacocat') // true
    // isPalindrome('amanaplanacanalpanama') // true
    // isPalindrome('amanaplanacanalpandemonium') // false
*/

function isPalindrome(str){
    if(str.length === 0 || str.length === 1){
        return true;
    }
    const [first,last] = [str[0],str[str.length-1]];
    if(first !== last){
        return false;
    }
    return isPalindrome(str.slice(1,str.length-1));
}

console.log(isPalindrome('awesome')) // false
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')) // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false
console.log(isPalindrome('aaaabbaaaa')) // true