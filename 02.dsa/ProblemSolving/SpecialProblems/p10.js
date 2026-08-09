/*
==> Javascript to Print Diamond Pattern
     *
    ***
   *****
  *******
   *****
    ***
     *
*/

num = Number(process.argv[2]);
function diamondPattern(num){
    let rows = 2 * num - 1  
    for(let i=1;i<=rows;i++){
        for(let j=1;j<=rows;j++){
            if(i<=num){
                if(j>=num + 1 - i && j<num+i){
                    process.stdout.write("*")
                }else{
                    process.stdout.write(" ")
                }
            }else{
                if(j>i-num && j<= num+ rows - i){
                    process.stdout.write("*")
                }else {
                    process.stdout.write(" ")
                }
            }
        }
        console.log("");
    }
}

diamondPattern(num);