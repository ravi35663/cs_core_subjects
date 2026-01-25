/*
Duplicate Parentheses
    Given a balanced expression, find if it contains duplicate parenthesis or not. A set of 
    parenthesis are duplicate if the same sub expression is surrounded by multiple parenthesis.

    Input Format
        In the function a balanced string str is passed.

    Output Format
        Return a true if it contains duplicates else return false.

    Sample Input 1:
        ((a+b)+((c+d)))
    Sample Output 1
        true

    Sample Input 2:
        (((a+(b)))+(c+d))
    Sample Output 2
        true


    Sample input: 
        (a+(b*c))
    Sample output:
        false

    Explanation
    sample 1: 
    The subexpression "c+d" is surrounded by two pairs of brackets.

    sample 2: The subexpression "a+(b)" is surrounded by two pairs of brackets.
*/

function duplicateParentheses(str){
    let stack = [];
    for(let i=0; i<str.length; i++){
        if(str[i] == ')'){
            let popped_item = stack.pop();
            if(popped_item == '('){
                return true;
            }
            while(popped_item != '('){
                popped_item = stack.pop();
            }
        }else{
            stack.push(str[i]);
        }
    }
    return false;
}

const test_cases = [
    {input:'((a+b)+((c+d)))',output:true},
    {input:'(((a+(b)))+(c+d))',output:true},
    {input:'(a+(b*c))',output:false},
]

test_cases.forEach(item=>{
    const output = duplicateParentheses(item.input);
    if(output == item.output){
        console.log("Passed for :",item.input)
    }else{
        console.log("Failed for :",item.input)
    }
})