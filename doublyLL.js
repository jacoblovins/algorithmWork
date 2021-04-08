class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Push() adding a new node to the end of the DLL

    // Create a new node with the value passed to the function
    // If the head property is null set the head and tail to be the newly created node
    // If not, set the next property on the tail to be that node
    // Set the previous property on the newly created node to be the tail
    // Set the tail property to be the new node we added
    // Increment the length
    // Return the list

    push(val){
        const newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // pop() removing a node from the end of the Doubly Linked List

    // If there is no head or tail, return undefined
    // Store the current tail in a variable to return later
    // If the length is 1, set the head and tail to null
    // Update the tail to be the previous node
    // Set the new tail's next to null
    // Decrement the length
    // Return the value removed

    pop(){
        if(this.length === 0) return undefined;
        const poppedNode = this.tail;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }

    // shift() removing a node from the beginning of the doubly linked list

    // If length is 0 return undefined
    // Store the current head property in a variable
    // If the length is 1, set the head and tail to null
    // Update the head to be the next fo the current
    // Set teh head's prev property to null
    // Set the current next to null
    // Decrement the length
    // Return the old head

    shift(){
        if(this.length === 0) return undefined;
        const current = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.head = current.next;
            this.head.prev = null;
            current.next = null;
        }
        this.length--;
        return current;
    }
}

const list = new DoublyLinkedList();
list.push("Hello");
list.push("GoodBye");
list.push("Another thing");
list.push("something else");
list.push(1);
list.push(2);
list.push(3);
list.pop();
list.shift();
// list.shift()
// list.unshift("First")
// list.set(0, "Changed!")
// list.insert(1, "Second changed!")
// list.remove(1)

// list.print()
// list.reverse()
// list.print()
// console.log(list.get(1))
console.log(list);
console.log(list.head);
console.log(list.tail);