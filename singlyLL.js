// Since a Singly Linked List is just a collection of nodes, we start out by creating a class for nodes.
// stores a piece of data - val
// and a reference to the nedxt node - next

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

// const first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");

// console.log(first)

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Adds to the end of the list
    push(val){
        const newNode = new Node(val);
        // if the list is empty...does not have to do with the node we just created
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++
        return this;
    }

    // POP removes a node from the end of the linked list

    // If there are no nodes in the list, return undefined
    // Loop through the list until you reach the tail
    // Store the previous node in a variable
    // Set the next property of the 2nd to last node to be null
    // Set the tail to be the 2nd to last node
    // Decrement the length of the list by 1
    // If you are popping the last item off the list, the head and tail need to be set to null
    // Return teh value of the node removed

    pop(){
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    // Shift() removing the first node
    // O(1) very quick

    // If there are no nodes, return undefined
    // Store the current head property in a variable
    // Set the head property to be the current head's next property
    // Decrement the length by 1
    // Return the value of the node removed



    shift(){
        if(!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;

    }


}

const list = new SinglyLinkedList()
list.push("Hello")
list.push("GoodBye")
list.push("Another thing")
list.push("something else")
list.push(1)
list.push(2)
list.push(3)
list.pop()
list.shift()
console.log(list);