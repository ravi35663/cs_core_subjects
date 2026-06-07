/*
=> Priority queue using array:
    -> You can build either min heap or max heap:
*/
// Min heap:
class PriorityQueue{
    constructor(){
        this.values = [];
    }

    // Adding element at the correct position
    enqueue(val){ // it can be push
        this.values.push(val)
        this.heapifyUp(this.values.length - 1);
    }
    // Removing 0th element:
    dequeue(){ // it can be pop:
        if(this.values.length == 0) return null;
        if(this.values.length == 1) return this.values.pop();
        const min = this.values[0];
        this.values[0] = this.values.pop(); // the the last value at 0th index
        this.heapifyDown(0);
        return min;
    }

    heapifyUp(index){
        const parent = Math.floor((index - 1)/2);
        if(parent >=0 && this.values[parent] > this.values[index]){
            [this.values[parent], this.values[index]] = [this.values[index], this.values[parent]]
            this.heapifyUp(parent);
        }
        return;
    }

    heapifyDown(index){
        const l = (2 * index) + 1;
        const r = (2 * index) + 2;
        let s = index;
        if(l < this.values.length && this.values[l] <= this.values[s]){
            s = l;
        }
        if(r < this.values.length && this.values[r] < this.values[s]){
            s = r;
        }
        if(s != index){
            [this.values[s], this.values[index]] = [this.values[index], this.values[s]];
            this.heapifyDown(s);
        }
    }

    peek(){
        return this.values[0] || null;
    }
}

const arr = [11,9,8,7,3,1];
const pq = new PriorityQueue();
for(let item of arr){
    pq.enqueue(item);
}

console.log('pr: ',pq.values);