/*
Write a recursive function called reverse which accepts a string and returns a new string in reverse.
// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
*/

const reverse = (str)=>{
    if(str === ''){
        return '';
    }
    return reverse(str.slice(1))+ str[0];
}
console.log(reverse('awesome'));
console.log(reverse('hello'));
console.log(reverse('Hi'));
console.log(reverse('kiwitech'));