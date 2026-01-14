/*
==> Sorting:
    -> Sorting is a process in which we re-arrange the elements in such a manner that items may be in either increasing order or 
       decreasing order.
    -> e.g. sorting numbers or names alphabetically or objects based on any particular key..etc
    -> There are many sorting algorithms out there and all the sorting algorithms has their  own pros and cons.
    -> Monotonic: Monotonic means elements either in increasing or decreasing order:

===> Built-In Array sorting methods in Js: -
    ->  Default sorting is based on string unicodes not based on items we provide in an array.
    ->  We can tell “sort” how to sort items of an array by using the optional comparator function. 
        This function sorts arrays according to our need.
    -> This comparator function takes a pair of elements (a and b) and sorts based on return
    ->  arr.sort((a,b)=>{
		    return a-b;
        }) 
        value.
 	    -> If return -ve then a comes first than b
	    -> If return +ve then b comes first than a
	    -> If return 0 then any value comes
*/

/*
==> TIME and SPACE Complexity of different algorithm:
Sorting Algorithm       T.C (Best)      T.C (Average)       T.C (Worst)         Space Comp.
    Bubble Sort             O(n)            O(n^2)              O(n^2)              O(1)
    Insertion Sort          O(n)            O(n^2)              O(n^2)              O(1)
    Selection Sort          O(n^2)          O(n^2)              O(n^2)              O(1)
    Merge Sort              O(NlogN)        O(NlogN)            O(NlogN)            O(n)
    Quick Sort              O(NlogN)        O(NlogN)            O(n^2)              O(logN)
*/