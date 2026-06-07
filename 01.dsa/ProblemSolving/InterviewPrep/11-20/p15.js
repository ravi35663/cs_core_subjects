/*
    Remove duplicate characters from a string.
*/

const input = process.argv[2];
function uniqueStr(input){
    /*
        Method-1
        let unique_str = new Set(input);
        console.log("Unique str",Array.from(unique_str).join(''));
    */


    /*
        Method-2
        let unique_str = '';
        for(let i=0;i<input.length;i++){
            if(!unique_str.includes(input[i])){
                unique_str+=input[i];
            }
        }
        console.log('unique str: ',unique_str);
    */
   /*
       Method-3
   */
    let temp_obj = {};
    for(let i=0;i<input.length;i++){
        temp_obj= {...temp_obj,[input[i]]:[input[i]]}
    }
    const unique_str = Object.keys(temp_obj).join('');
    console.log("Unique string: ",unique_str);

}

uniqueStr(input);