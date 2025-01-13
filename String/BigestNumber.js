/*
===> Biggest Number String:
 You are given a vector of numbers. You want to concatenate these numbers together to form the 
 lexicographically largest number. Print that largest number number. You can't rearrange the digits of any 
 number, however you can place the numbers next to each other in any order.

Input

10,11,20,30,3
Output

330201110 
You can verify that this is the largest number that we can form.

Hint
Use Sorting.
(This is a bit tricky problem, we have discussed a similar problem in sorting & searching section - 
Smallest String. In case you are not able to solve it right now, you can come back and solve it later)conc

*/
function biggestNumberString(arr){
    arr = arr.map(item=> String(item));
    arr.sort();
    const result = arr.reduce((total,item)=>{
        total = item + total;
        return total;
    },'')
    return result
}

const arr = [10,11,20,30,3];
const result = biggestNumberString(arr);
console.log("Biggest strinng is :",result);

/*
    Note: this is not correct program to solve it
    Accoring to above program the resut is:    303201110 but we want 330201110
*/