// Queue

// // Array implementation- not good on time complexity

// const q = [];

// q.push(1);
// q.push(2);
// q.push(3);

// q.shift();
// q.shift();
// q.shift();

// // or

// q.unshift(1);
// q.unshift(2);
// q.unshift(3);

// q.pop();
// q.pop();
// q.pop();


// Linked list

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val){
        const newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this.length;
    }

    dequeue(){

        if(this.length === 0) return null;
        const oldHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
        }
        oldHead.next = null;
        this.length--;
        return oldHead.val;

    }
}

const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);

q.dequeue();
q.dequeue();
q.dequeue();
q.dequeue();
q.enqueue(1);
q.enqueue(2);

console.log(q)


