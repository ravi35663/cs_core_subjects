/*
===> HashMap
    ->  Hash-Map is also known as hash-table.
    ->  Hash-Table are used to store key-value pairs
    ->  Hash tables are arrays, but the keys are not ordered.
    ->  Unlike arrays, hash table are fast for all of the following operations
        ->  Finding values
        ->  Adding new-values
        ->  Moving Values
    ->  Because of thier speed, hash tables are very commonly used.
    ->  Javascript has "Objects" and "Maps" as a hash-table
*/
/*
===> What makes as good hash table:
    ->  Fast (i.e. constant time)
    ->  Doesn't cluster outputs at specific indices, but distributes uniformly
    ->  Deterministic (same input yield same output)
*/

/* Here is simple hash function*/
// function hash(key,arrayLength){
//     let total = 0;
//     for(let char of key){
//         // map 'a' to 1, 'b' to 2 'z' to 26 .etc
//         let i = char.charCodeAt(0) - 96;
//         total = (total + i) % arrayLength;
//     }
//     return total;
// }
// const item = "ivar"
// console.log(hash(item,11));
/*
===> Problems with above hash-function
    ->  Only hashes strings
    ->  Not constant time (linear in key length)
    ->  Could be little more random
*/

// Little bit updated hash function:
// function hash(key,arrayLength){
//     let total = 0;
//     let PRIME = 31
//     for(let i=0; i<Math.min(key.length,100);i++){
//         // map 'a' to 1, 'b' to 2 'z' to 26 .etc
//         let char = key[i];
//         let j = char.charCodeAt(0) - 96;
//         total = (PRIME * total + j) % arrayLength;
//     }
//     return total;
// }
// const item = "ivar"
// console.log(hash(item,3));


/*
===> Notes:
1)  Hash tables are collections of key-value pairs.
2)  Hash tables can find values quickly given a key.
3)  Hash tables can add new key-values quickly.
4)  Hash tables store data in a large array, and work by hashing the keys.
5)  A good hash should be fast, distribute keys uniformly, and be deterministic.
6)  Separate chaining and linear probing are two strategies used to deal with two keys that hash to the same 
    index.
*/

/*
    ==> BigO of hash-function: (Average)
    1) Insert:  O(1)
    2) Delete:  O(1)
    3) Access:  O(1)    

*/

// Implementation of hash-table
class Hash{
    constructor(size=53){
        this.keyMap = new Array(size);
    }
    hash(key){
        let total = 0;
        const WIERD_PRIME = 31;
        for(let i=0;i<Math.min(key.length,100);i++){
            let value = key[i].charCodeAt(0) - 96;
            total = (total * WIERD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }
    set(key,value){
        let index = this.hash(key);
        if(!this.keyMap[index]){
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key,value]);
    }
    get(key){
        const index = this.hash(key);
        const item = this.keyMap[index];
        if(item){
            for(let i=0;i<item.length;i++){
                if(item[i][0] === key){
                    return item[i][1];
                }
            }
        }
        return undefined;
    }

    keys(){
        const arr = [];
        for(let i=0;i<this.keyMap.length;i++){
            const items = this.keyMap[i];
            if(items){
                // console.log("Items: ",items)
                for(let j=0;j<items.length;j++){
                    if(!arr.includes(items[j][0])){
                        arr.push(items[j][0])
                    }
                }
            }
        }
        return arr;
    }
    values(){
        const arr = [];
        for(let i=0;i<this.keyMap.length;i++){
            const items = this.keyMap[i];
            if(items){
                for(let j=0;j<items.length;j++){
                    if(!arr.includes(items[j][1])){
                        arr.push(items[j][1]);
                    }
                }
            }
        }
        return arr;
    }
    entries(){
        const arr = [];
        for(let i=0;i<this.keyMap.length;i++){
            const items = this.keyMap[i];
            if(items){
                for(let j=0;j<items.length;j++){
                    arr.push(items[j]);
                }
            }
        }
        return arr;
    }
}
const ht = new Hash();
ht.set("name","Ravi")
ht.set("age",25)
ht.set("email","ravikr845430@gmail.com")
ht.set('password','1234567890')
console.log("Ht is : ",ht.get("age"));
console.log("Ht is : ",ht.keys());
console.log("Ht is : ",ht.values());
console.log("Ht is : ",ht.entries());


/*
===> Note:
    -> We're creating our own hash-map
*/