/*
    ===> Big O Notation : -
        -> BigO Notation used to analyze the  performance of the algorithm. 
        -> BigO Notation is a way to formalize fuzzy (not clear) counting.
        -> BigO Notation analyzes how the runtime of the algorithm grows as input grows.
        -> Example: -
            function sum(n){
                let s=0;
                for(let i=1;i<=n;i++){
                    s = s+i;
                }
                return s;
            }
        -> Here time complexity of sum function is : O(N)
        -> because the loop is running for n number of times.
        -> Better Solution of sum: -
            function sum(n){
                return n*(n+1)/2;	
            }
        -> Time Complexity is : O(1)
        -> Here time complexity is constant
        -> Solutions are considered as best which take less time to execute and consume less memory.
*/

/*
===> BigO Expression: -
	-> Arithmetic operations are constant
	-> Variable assignment are also constants
	-> Accessing elements in an array (by index) or object(by key) is also constant .
		E.g. arr= [10,20,30,50] - > arr[3] -> accessed in constant time
		E.g. obj = {name:”ravi”,city:”Noida”} -> obj.city -> accessed in constant time
	-> O(2n) = O(n)
	-> O(500) = O(1)
	-> O(13n^2) = O(n^2)
	-> O(n+1009) = O(n)
	-> O(n^3 + 10n^2 + 100) = O(n^3)
    Note: -
    -> performance.now():- It is a js function which gives you time in millisecond 
    -> T.C = O(n^2) (n square time complexity) //quadratic 
        for(let i=0;i<n;i++){// this will run n times
            for(let j=0;j<n;j++){ // this will run n times
            }
        }
    -> O(n*n) -> T.C
    -> T.C = O(n) (n time complexity) // linear
    -> T.C = O(1) (constant) 
*/

/*
 ===> Space Complexity : -
    -> We can also use big-O notation to analyze space complexity, that is, how much 
       additional memory we need to allocate in order to run the code in our algorithm
    -> whenever we’re talking about space complexity, we’re talking about auxiliary 
       space complexity (Extra Space)
    -> Mostly primitive data types 'boolean', 'number', 'null', 'undefined' are takes 
       constant space (one block of memory for each DT). 
       i.e. a = 1 or a = 1000 or a = undefined or a = null or a = true (Take constant space)
    -> String takes O(N) space complexity (n is length of string). 
       i.e. a = “learn js”  
    -> reference types are generally O(N).where N is length(for arrays) or the number 
       of keys (for objects)
    -> Example : -
		function sum(arr){
			let total = 0;
			for(let i=0;i<arr.length;i++){
    	        total +=arr[i];
            }
            return total;
        } // here only two variable is used inside the function which only taking two 
             blocks of memory which is total and i.
    -> Space Complexity : O(2) = O(1) // Constant .
    -> here, we’re not considering arr because the above variable would always be the
       same for every length of the arr ele. 
    -> Example 2: 
        function double(arr){
			let newArr = [];
			for(let i=0;i<arr.length;i++){
            	newArr.push(2*arr[i])
            }
            return newArr;
        } // here, as arr grows the size of newArr grows. 
  -> Space Complexity : O(n+1) = O(n) // Constant .
  -> O(1) < O(logN),O(N), O(NlogN),O(N^2) < O(2^N)
  -> N^2 -> Quadratic
*/

/*
===> Logarithmic : -
    -> Note: here all log is of base 2.
    -> Log8 -> 3
    -> logarithmic time complexity is better than O(n).
    -> For best understanding follow the image
*/