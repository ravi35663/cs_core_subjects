//Javascript Program to Increment by 1 to all the Digits of a Given Integer
let int = process.argv[2];
while(int){
    const r = int % 10;
    console.log(`${r+1}`);
    int = Math.floor(int/10); 
}