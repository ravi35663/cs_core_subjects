/*
==> Javascript to Print Pascal Triangle
    *
   * *
  * * *
 * * * *
* * * * *

    1
   1 1
  1 2 1
 1 2 2 1
1 2 3 2 1
*/
// Method: 1
const rows = Number(process.argv[2])
function pascalTriangle(rows){
    let columns = 2 * rows - 1;
    for(let i=1;i<=rows;i++){
        let r = 0;
        let n = i-1;
        for(let j=1;j<=columns;j++){
            if(j>=rows+1-i && j< rows+i && ((i+j+rows-1) % 2 == 0)){
                NCR = Math.floor(factorial(n)/(factorial(n-r)*factorial(r)))
                process.stdout.write(` ${NCR}`);
                r++;
            }else{
                process.stdout.write(`  `);
            }
        }
        console.log()
    }
}
function factorial(num){
    if(num==0){
        return 1;
    }
    return num * factorial(num-1)
}
pascalTriangle(rows)