/*
    Phone Keypad
    Given a number N and a modern phone keypad, find out all possible strings generated using that 
    number.

    Phone-Keypad:
        1 ->
        2 -> ABC
        3 -> DEF 
        4 -> GHI
        5 -> JKL
        6 -> MNO
        7 -> PQRS
        8 -> TUV
        9 -> WXYZ

    Sample Input
    23

    Sample Output
    AD, AE, AF, BD, BE, BF, CD, CE, CF
*/

function phoneKeypad(str){
    const obj = { 2:"ABC", 3: "DEF", 4:"GHI", 5:"JKL", 6:"MNO", 7:"PQRS", 8:"TUV", 9:"WXYZ"}
    const result = generatedKeys(str,obj,"",[],str.length);
    // console.log
    console.log("Result is: ",result);

}

function generatedKeys(str,obj,output,result,n){
    if(output.length == n){
        result.push(output);
    }
    if(str.length == 0){
        return result;
    }
    const s = str[0];
    str = str.slice(1);
    // We can also add loop in here with obj[s] length
    for(let i=0;i<obj[s].length;i++){
        generatedKeys(str,obj,output+obj[s][i],result,n);        
    }
    return result;
}

const result = phoneKeypad("97");