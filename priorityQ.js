// Going to use a Min Binary Heap
class PriorityQueue {
    constructor(){
        this.values = [];
    }
    insert(val) {
        this.values.push(val);
        let currentIndex = this.values.length -1;
        let parentIndex;
        let parentVal;
        while(val > this.values[Math.floor((currentIndex - 1) / 2)]){
            parentIndex = Math.floor((currentIndex - 1) / 2);
            parentVal = this.values[parentIndex];
            this.values[parentIndex] = val;
            this.values[currentIndex] = parentVal;
            currentIndex = parentIndex;
        }
        return this.values;
    }
    extractMax(){
        const max = this.values.shift();
        let current = this.values.pop();
        if(this.values.length > 0){
            this.values.unshift(current);
            this.sinkDown();
        }
        return max;
    }
    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];

        while(true){
            let leftChildIdx = (2 * idx) + 1;
            let rightChildIdx = (2 * idx) + 2;
            let leftChild, rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild > element){
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)){
                    swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority
    }
}