/*
    Generating Brackets:
        Write a function to generate all possible n pairs of balanced parentheses '(' and ')'.

    Input
        2

    Output
        (())
        ()()
*/

// Brute-Force without using recursion:
function generateBracket(n){
    const d = n * 2;
    let result = [""];
    for(let i=0;i<d;i++){
        let temp  = [];
        result.forEach(item=>{
            if(item.length < d){
                let o = canAddOpen(item,n);
                if(o){
                    temp.push(item+"(")
                }
                let c = canAddClose(item,n);
                if(c){
                    temp.push(item+')');
                }
            }
        });
        result = [...temp];
    }
    console.log("Length of result is: ",result.length)
    return result;
}

function canAddOpen(str,n){
    let countOpen = 0;
    for(let i=0;i<str.length;i++){
        if(str[i] == '('){
            countOpen++;
        }
    }
    if(countOpen < n){
        return true
    }
    return false;
}

function canAddClose(str,n){
    let countOpen = 0;
    let countClose = 0;
    for(let i=0;i<str.length;i++){
        if(str[i] == '('){
            countOpen++;
        }else{
            countClose++;
        }
    }
    if(countOpen > countClose){
        return true;
    }
    return false;
}


const result = generateBracket(8);
console.log("Result is: ",result);


/*
    // Little Bit Better
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

*/