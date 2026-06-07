//Javascript to Convert Lowercase Characters by Uppercase and Vice-Versa (Generic Program)
const lowerToUpperCase = (lower)=>{
    let uppr = '';
    for(let i=0;i<lower.length;i++){
        let char = String.fromCharCode(lower.charCodeAt(i)-32);
        uppr +=char;
    }
    return uppr;
}

const upperToLowerCase = (upper)=>{
    let lower = '';
    for(let i=0;i<upper.length;i++){
        let char = String.fromCharCode(upper.charCodeAt(i)+32);
        lower +=char;
    }
    return lower;
}

const [lower,upper] = process.argv.slice(2);
console.log("Lower to Upper: ",lowerToUpperCase(lower));
console.log("Upper to Lower: : ",upperToLowerCase(upper));