/*
=> Object :-
    -> An object is unsorted data structure which store data in key-value pairs
    const person = {
	            name:”ravi”,
                age:25,
                favNum:[1,2,33,45]
    }
    -> use objects when order is not required .
    -> when you need fast access/insertion/removal use an object. 
    -> access, insertion and removal happens in O(1) complexity
    -> searching O(N)
    -> Object.keys(person)     		-> O(n) => [“name”,”age”,”favNum”]
    -> Object.values(person)   		-> O(n) => [“ravi”,25,[1,2,33,45]]
    -> Object.entries(person)  		-> O(n) => [[“name”,”ravi”],[“age”,25],[“favNum”,[1,2,33,45]]]
    -> person.hasOwnProperty(proName) 	-> O(1) => 
    -> person.hasOwnProperty(“name”) 	-> true
    -> person.hasOwnProperty(“hobbies”)- > false  (accessing keys)
*/

/*
=> Array : -
    -> Example arr = [10,20,30,40]
    -> use array if you required items in an order
    -> Accessing Element Time Complexity : O(1)
    -> Removal element : it depends from where to remove
    -> Insertion element : it depends from where to insert
    -> Searching element : O(n)
    -> push : O(1)
    -> pop : O(1)
    -> shift : O(n)
    -> unshift:O(n)
    -> concat: 	O(n)
    -> slice: O(n)
    -> splice: 	O(n)
    -> sort: O (nlogn)
    -> map: O(n)
    -> filter: 	O(n)
    -> forEach:	O(n)
    -> reduce : O(n)
*/
/*
=>  'shift' in javascript:
    ->  shift is used to remove first element in the array and it will return that 
        first element.
    ->  shift modify original array.
    ->  if array is empty then shift will return 'undefined'.
            const arr  = [1,2,3,4,5]
            ele = arr.shift();
            console.log("Element is : ",ele)// 1
            console.log("Arr is ",arr) // [2,3,4,5]
            items = [];
            ele = items.shift() // undefined
*/
/*
=> unshift:
    ->  In JavaScript, the unshift() method adds one or more elements to the beginning 
        of an array and returns the new length of the array.
    ->  unshift modify the array.
        const arr1 = [5,6]
        const len = arr1.unshift(1,2,3,4)
        console.log("Array is : ",arr1); // [ 1, 2, 3, 4, 5, 6 ]
        console.log("Length of the new array is: ",len); // 6
*/
/*
=> splice:
    ->  The splice() method in JavaScript is a versatile array method that allows you 
        to add, remove, or replace elements from an array. 
    ->  It modifies the original array and returns an array of the deleted elements, 
        if any.
*/
/*
=> Syntax :
    arr.splice(start,deleteCount,item1,item2,item3,........)

    start: the index at which arr start changing
    
    deleteCount: the number of elements to remove from the array. if set 0, no elements 
    will be removed.
    
    item1,item2,item3:  the elements to add to the array starting from the 'start'. 
                        if omitted then no element will be added.
*/

// Common Use Cases:

// Remove elements: You can use splice() to remove elements from the array.
const arr = ['a','b','c','d'];
const a = arr.splice(1,2);
console.log("Removed items: ",a);//['b','c'];
console.log("Array is: ",arr); //['a','d']


// Remove elements: You can use splice() to remove elements from the array.
// const arr = ['a','b','c','d'];
// arr.splice(1, 2); // Removes 2 elements starting from index 1
// console.log(arr); // Output: ['a', 'd']

// Add elements: You can add elements by setting deleteCount to 0.
// const arr = ['a','b'];
// arr.splice(2,0,'c','d')
// console.log("Array is: ",arr); //[ 'a', 'b', 'c', 'd' ]
// arr.splice(1,0,'c','d')
// console.log("Array is: ",arr); //[ 'a', 'c', 'd', 'b' ]

// Replace elements: You can also replace elements by specifying both deleteCount and new items.
// const arr = ['a','x','y','d'];
// arr.splice(1,2,'b','c') // Replaces 'x' and 'y' with 'b' and 'c'
// console.log(arr); //[ 'a', 'b', 'c', 'd' ]


// Removing items
// let fruits = ['apple', 'banana', 'cherry', 'date'];
// let removeItems = fruits.splice(1,2)
// console.log("Removed items",removeItems); //[ 'banana', 'cherry' ]
// console.log("fruits: ",fruits) // [ 'apple', 'date' ]


//Adding items:
fruits = ['apple','date'];
fruits.splice(2,0,'cherry','banana');
console.log("Fruits: ",fruits) // [ 'apple', 'date', 'cherry', 'banana' ]