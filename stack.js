// // Array Implementation

// const stack = [];

// stack.push("google");
// stack.push("instagram");
// stack.push("youtube");
// stack.push("facebook");

// stack.pop();
// stack.pop();
// stack.pop();
// stack.pop();

// stack.unshift("create new file");
// stack.unshift("removed new file");
// stack.unshift("photoshopped file");

// stack.shift();
// stack.shift();
// stack.shift();



// linked list implementation

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            let oldHead = this.head
            this.head = newNode;
            this.head.next = oldHead;
        }
        this.length++;
        return this.length;
    }

    pop(){
        if(this.length === 0) return null;
        let oldHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            oldHead.next = null;
        }
        this.length--;
        return oldHead.val;
    }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.pop();
stack.pop();
stack.pop();
console.log(stack.pop());

console.log(stack);