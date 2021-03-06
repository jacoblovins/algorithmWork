class MaxBH {
    constructor() {
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

    // extractMax()

    // Cant just remove the root and leave the heap like it is
    // You need to change the root and move things accoringly 

    // Take the root and remove it from the array
    // Put the current last element (last in the array) as the root and adjust (sink down)

    // Swap the first value in the values property with the last one
    // Pop from the values property, so you can return the value at the end
    // Have th enew root "sink down" to the correct spot
        // Your parent index starts at 0 (the root)
        // Find the index of the left child: 2 * index + 1 (make sure its not out of bounds)
        // Find the index of the right child: 2 * index + 2 (make sure its not out of bounds)
        // If the left or right child is greater than the element, swap. If both left and right children are larger, swap with the largest child.
        // The child index you swapped to now becomes the new parent index.
        // Keep looping and swapping until neither child is larger than the element
        // Return the old root

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

const heap = new MaxBH();

heap.insert(90);
heap.insert(100);
heap.insert(53);
heap.insert(40);
heap.insert(65);
heap.insert(44);
heap.insert(15);
heap.insert(58);
heap.insert(31);
heap.insert(45);
console.log(heap.insert(1));
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap)