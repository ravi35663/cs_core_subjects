// Max heap
class MaxHeap{
    constructor(){
        this.values = [];
    }

    insert(value){
        this.values.push(value);
        // Heapify up: place the current value at the right place
        this.heapifyUp()
    }
    heapifyUp(){
        const i = this.values.length-1
        while(i>0){
            const p = Math.floor((i-1)/2);
            if(this.values[p] < this.values[i]){
                [this.values[p], this.values[i]] = [this.values[i], this.values[p]]
                i = p;
            }else{
                break;
            }
        }
    }

    extractMax(){
        const top = this.values.pop();
        const max = this.values[0];
        if(this.values.length > 0){
            this.values[0] = top;
            this.heapifyDown()
        }
        return max;
    }

    heapifyDown(){
        const ci = 0;
        const len = this.values.length
        while(ci<len){
            const lc = (2 * ci) + 1;
            const rc = (2 * ci) + 2;
            let swapIndex = null;
            if(lc < len && this.values[lc] > this.values[ci]){
                swapIndex = lc;
            }
            if(
                rc < len &&
                ((swapIndex != null && this.values[swapIndex] < this.values[rc]) 
                || 
                (swapIndex == null && this.values[ci] < this.values[rc]))
            ){
                swapIndex = rc;
            }
            if(swapIndex != null){
                [this.values[swapIndex],this.values[ci]] = [this.values[ci],this.values[swapIndex]];
                ci = swapIndex;
            }else{
                break;
            }

        }
    }


}