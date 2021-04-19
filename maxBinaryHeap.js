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