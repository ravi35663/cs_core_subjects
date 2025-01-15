/*
    Generating Brackets:
        Write a function to generate all possible n pairs of balanced parentheses '(' and ')'.

    Input
        2

    Output
        (())
        ()()
*/

// Brute-Force using recursion:
function addBracket(n, str="",open = 0, close = 0,result=[]){
    if(str.length == n * 2){
        result.push(str);
        console.log("Str is: ", str);
        return str;
    }
    if(open < n){
        addBracket(n,str+"(", open+1, close,result );
    }
    if(close < open){
        addBracket(n, str+")", open, close+1,result );
    }
}

const result = addBracket(3);
console.log("Result is: ",result);