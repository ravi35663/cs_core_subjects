/*
    Number Spell:
        Given a number like 2021, convert into string like
        "two zero two one" recursively.
*/




const arr = ['zero','one','two','three','four','five','six','seven','eight','nine']
const numberSpell = (n,obj)=>{
    if(n == 0){
        return '';
    }
    const r = n % 10;
    const word = obj[r];
    return numberSpell(Math.floor(n/10),obj) + ` ${word} `;
}


console.log("Number spell: ",numberSpell(2021,arr));