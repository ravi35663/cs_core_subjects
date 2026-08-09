/*
    Javascript to Print Floyd’s Triangle
    1
    2 3 
    4 5 6
    7 8 9 10
    11 12 13 14 15
                    and so on.
*/

const num = Number(process.argv[2])
function floydTriangle(num){
    let count=0;
    for(let i=1;i<=num;i++){
        for(let j=1;j<=num;j++){
            if(j<=i){
                process.stdout.write(`   ${++count}`)
            }else{
                process.stdout.write("    ")
            }
        }
        console.log()
    }
}

floydTriangle(num)