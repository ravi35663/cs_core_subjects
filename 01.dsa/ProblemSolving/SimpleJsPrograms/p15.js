//Javascript to Count the Number of Vowels and Consonants in a Sentence
const sentence = (process.argv[2]).toLowerCase();
let [vowels,consonants] = [0,0];
for(let i=0;i<sentence.length;i++){
    if("aeiou".includes(sentence[i])){
        vowels++;
    }else if("qwrtypsdfghjklzxcvbnm"){
        consonants++;
    }
}

console.log(`Vowels count: ${vowels} and Consonants count:${consonants}`);