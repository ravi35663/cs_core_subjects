/*
=> Bubble Sort: -
    -> A sorting algorithm where the largest values bubble up into the top.
    -> Swapping in javascript: 
	    ES-5
	    swap(a,b){
		   let temp = a;
            a = b;
            b = temp;
        }

        ES-6
            swap(a,b){
                [a,b] = [b,a];
            }
        My Way:
            swap(a,b){
                a = a+b;
                b = a-b;
                a = a-b
            }
-> Bubble sort algo:
	function bubbleSort(arr){
		for(let i=0; i<arr.length; i++){
			for(let j=0; j<arr.length-1-i; j++){
				if(arr[j] > arr[j+1]){
                	[arr[j+1],arr[j]] = [arr[j],arr[j+1]]
                }
            }
        }
    }
*/

/*
=> Optimized Bubble sort:
    ->  if we have not swapped last time then we don’t need to swap further. 
    ->  We can break the swapping there.
*/

const arr = [1,9,12,2,3,43,56,90,4,5,6];
function optimizedBubbleSort(arr){
    for(let i=0; i<arr.length; i++){
        let is_swapped = false;
        for(let j= 0; j<arr.length-1-i; j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                is_swapped = true;
            }
        }
        if(!is_swapped){
            // Array is already sorted
            return arr;
        }
    }
    return arr;
}

console.log("Sorted Array is ",optimizedBubbleSort(arr));

const result = optimizedBubbleSort(arr)

