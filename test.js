// Implementation of max binaryHeap:

class MaxBinaryHeap{
    constructor(){
        this.values = [];
    }

    addItem(value){
        this.values.push(value);
        // Place added value at the right index:
        this.bubbleUp()
        console.log("array is: ",this.values,value)
    }

    bubbleUp(){
        let index = this.values.length - 1;
        while(index > 0){
            const parent = Math.floor((index - 1)/2);
            if(this.values[parent] < this.values[index]){
                [this.values[parent],this.values[index]] = [this.values[index], this.values[parent]]
                index = parent;
            }else{
                break;
            }
        }
    }

    extractMax(){
        const end = this.values.pop();
        const max = this.values[0];
        if(this.values.length > 0){
            this.values[0] = end;
            this.bubbleDown();
        }
        return max
    }
    bubbleDown(){
        let i = 0;
        const len = this.values.length;
        while(1){
            const left = (2 * i) + 1;
            const right = (2 * i) + 2;
            let swap = -1;
            if(left < len){
                if(this.values[i] < this.values[left]){
                    swap = left;
                }
            }
            if(right < len){
                if(
                    (swap == -1 && this.values[i] < this.values[right])
                    || 
                    (swap != -1 && this.values[left] < this.values[right])
                ){
                    swap = right;
                }
            }
            if(swap == -1){
                break;
            }else{
                [this.values[i], this.values[swap]] =  [this.values[swap], this.values[i]];
                i = swap;
            }
        }
    }
}


const maxBinaryHeap = new MaxBinaryHeap();
const items = [10, 20, 30, 42, 39, 35, 50];
for(let item of items){
    maxBinaryHeap.addItem(item);
}

console.log("Max is: ",maxBinaryHeap.extractMax())
console.log("Max is: ",maxBinaryHeap.values)