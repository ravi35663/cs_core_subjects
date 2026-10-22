//Implements MaxBinaryHeap:
class MaxBinaryHeap{
    constructor(){
        this.values = [];
    }

    insert(value){
        this.values.push(value);
        
    }
    bubbleUp(){
        let ci = this.values.length - 1;
        while(ci>0){
            const pi = Math.floor((ci-1)/2);
            if(this.values[ci] > this.values[pi]){
                // Swap it
                [this.values[ci],this.values[pi]] = [this.values[pi], this.values[ci]];
                ci = pi;
            }else{
                // child is at already at correct place
                break;
            }
        }
    }

    // Extract max is getting maxium value from the 
    extractMax(){
        if(this.values.length == 0){
            return null;
        }
        const top = this.values.pop();
        const max = this.values[0];
        if(this.values.length > 0){
            this.values[0] = top;
            this.bubbleDown()
        }
        return max;
    }

    // Bubble Down means: Placing root element at his correct place:
    bubbleDown(){
        let i = 0;
        let len = this.values.length;
        while(true){
            const lc = (2 * i) + 1
            const rc = (2 * i) + 2;
            let swapIndex = null;
            if(lc < len && this.values[i] < this.values[lc]){
                swapIndex = lc;
            }
            if(rc < len && 
                (swapIndex == null && this.values[rc] > this.values[i])
                ||
                (swapIndex !=null && this.values[rc] > this.values[swapIndex])
            ){
                swapIndex = rc;
            }
            if(swapIndex == null){
                return;
            }
            [this.values[i],this.values[swapIndex]] = [this.values[swapIndex], this.values[i]];
            i = swapIndex;
        }
    }
}