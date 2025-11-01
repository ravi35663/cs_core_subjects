/*
    String Window

    Given two strings, one big string and one small string, find the 'smallest window' in the big string 
    that contains all characters of the small string.

    Window can have additional characters than required.
    If small string has duplicates, then those duplicates must be present with the same or higher count 
    in the window.
    
    ==> Examples:
        Input: s1 = hello_world
        s2 = lol

        Output:
        llo
    
    ==> Examples:
        Input: s1 = fizzbuzz
        s2 = fuzz

        Output:
            fizzbu
*/
function stringToMap(s){
    const m ={};
    for(let i=0;i<s.length;i++){
        const item = s[i];
        if(m[item]){
            m[item] +=1 
        }else{
            m[item] =1
        }
    }
    return m;
}

function stringWindow(s1,s2){
    const m2 = stringToMap(s2),m1 = {};
    let m2_values = Object.entries(m2);
    let min_window = Infinity;
    let start = 0; // left side of the window:
    let j=0;
    let start_idx = 0;
    let count = 0
    while(j< s1.length){
        // Expand the window
        let item = s1[j];
        m1[item] = m1[item] ? m1[item]+1 : 1;

        // How many charaters has been matched
        if(m1[item] === m2[item]){
            count = count + m2[item]
        }

        // If all the pattern is matched then start contracting your window:
        if(count === m2_values.length){
            // Start contracting from left side: to remove unwanted characters
            //1) values that are not present in pattern (s2) or present in more than needed
            while(m2[s1[start]] === 0 || m1[s1[start]] > m2[s2[start]]){
                m1[s1[start]]--;
                start++
            }
            let windw_size = j-start+1;
            if(windw_size < min_window){
                min_window = windw_size;
                start_idx = start;
            }
        }
        j++;
    }
    console.log("Count is: ",count);
    if(start_idx == -1){
        return "No window found"
    }else{
        console.log("Start and min: ",start,min_window)
        return s1.slice(start_idx,min_window)
    }
}

function patternMatched(m2_values,m1){
    for(let k=0;k<m2_values.length;k++){
        let [key,value] = m2_values[k];
        if(m1[key] != value){
            return false;
        }
    }
    return true;
}


const s1 = 'hello_world';
const s2 = 'lol';

const result = stringWindow(s1,s2);
console.log("Result is: ",result);

/* DRY run and implements it by your own -> it is not correct solution*/ 