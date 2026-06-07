/*
    Check if a string is a palindrome ignoring spaces and punctuation.
*/

const input = process.argv[2];
const isPalindrome =(input)=>{
  let actual_str = '';
  for(let i=0;i<input.length;i++){
    if(input[i] == ' ' || input[i] == ','  || input[i] == '.'){

    }else{
        actual_str += input[i];
    }
  }
  for(let i=0;i<actual_str.length;i++){
    if(actual_str[i] != actual_str[actual_str.length-1-i]){
        return false;
    }
  }  
  return true;
}

const result = isPalindrome(input);
result?console.log(`${input}: is a palindrome`):console.log(`${input}: is not a palindrome`)