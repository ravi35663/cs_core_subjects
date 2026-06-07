/*
    Check if a string has balanced parentheses.
    Example:
        Balanced: "()"
        Balanced: "(a + b) * (c + d)" ==> ()()
        Balanced: "{[()()]}" 
        Not Balanced: "(()"
        Not Balanced: "(a + b) * (c + d" ==> ()(
        Not Balanced: "{[(()]}"
*/
const input = process.argv[2];
function isBalancedParentheses(str){
    let actual_str = '';
    for(let i=0;i<str.length;i++){
        const item = str[i];
        if(item == '[' || item == ']' || item == '{' || item == '}' || item == '(' || item == ')' ){
            actual_str +=item
        }
    }
    if("}])".includes(actual_str[0])){
        return false;
    }
    let temp_arr = [];
    for(let i=0;i<actual_str.length;i++){
        const item = actual_str[i];
        if("([{".includes(item)){
            temp_arr.push(item);
        }else{
            let len = temp_arr.length;
            if((item == ')' && temp_arr[len-1] == '(') || (item == '}' && temp_arr[len-1] == '{') || (item == ']' && temp_arr[len-1] == '[')){
                temp_arr.pop();
            }else{
                temp_arr.push(item);
            }
            // if(item == '}' && temp_arr[len-1] == '{'){
            //     temp_arr.pop();
            // }
            // if(item == ']' && temp_arr[len-1] == '['){
            //     temp_arr.pop();
            // }
        }
    }
    return !Boolean(temp_arr.length);
}


console.log("Balanced Parentheses : ",isBalancedParentheses(input));