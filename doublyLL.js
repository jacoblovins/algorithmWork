class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
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

    push(val) {
        const newNode = new Node(val);
        if (this.length === 0) {
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

    pop() {
        if (this.length === 0) return undefined;
        const poppedNode = this.tail;
        if (this.length === 1) {
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
    // Set the head's prev property to null
    // Set the current next to null
    // Decrement the length
    // Return the old head

    shift() {
        if (this.length === 0) return undefined;
        const current = this.head;
        if (this.length === 1) {
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

    // unshift()  adding a node to the beginning of the doubly linked list

    // Create a new node with the value passed to the function
    // If the length is 0, Set the head to be the new node, and set the tail to be the new node
    // Otherwise..
    // Set the prev property on the head of the list to be the new node
    // Set the next property on the new node to be the head property
    // Update the head to be the new node

    // Increment the length
    // Return the list

    unshift(val) {
        const newNode = new Node(val);
        if (this.length !== 0) {
            newNode.next = this.head;
            this.head.prev = newNode;
        } else {
            this.tail = newNode;
        }
        this.head = newNode;
        this.length++;
        return this;
    }

    // get() accessing a node in a doubly linked list by its position (index)
    // could use the same method for singly linked list but there is an optimization for a doubly linked list

    // If the index is less than 0 or greater or equal to the length, return undefined
    // If the index is less than or equal to half the length of the list
    // --loop through the list starting from the head and loop towards the middle
    // --return the node once it is found
    // If the index is greater than half the length of the list
    // --loop through the list starting from the tail and loop towards the middle
    // --return the node once it is found 

    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        let count, current;
        if (index <= this.length / 2) {
            count = 0;
            current = this.head;
            while (count !== index) {
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while (count !== index) {
                current = current.prev;
                count--;
            }
        }
        return current;
    }

    // set() replacing the value of a node in a doubly linked list
    // We can use the get method we set up, then just find the value

    // Create a variable which is the result of the get method at the index passed to the function
    // -If the get method returns a valid node, set the value of that node to be the value passed to the function
    // -Return true
    // Otherwise return false

    set(index, val) {
        let node = this.get(index);
        if (node != null) {
            node.val = val;
            return true;
        }
        return false;
    }

    // insert() adding a node based on a position
    // We can optimize this starting from the beginning or the end like we did with the get method
    // We can use the get method the do this

    // If the index is less than zero or greater than or equal to the length, return false
    // If the index is 0, unshift()
    // If the index is the same as the length, push()
    // Otherwise, create a new node
    // Use the get method to access the index - 1
    // Set the next and prev properties on the correct nodes to link everything together
    // Increment the length
    // Return true

    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(val);
        if (index === this.length) return !!this.push(val);

        let newNode = new Node(val);
        let prevNode = this.get(index - 1);
        let nextNode = prevNode.next;
        prevNode.next = newNode;
        newNode.prev = prevNode;
        newNode.next = nextNode;
        nextNode.prev = newNode;
        this.length++;
        return true;
    }

    // remove() removing a node in a doubly linked list by a certain position
    // We can again take advantage of the get method optimization

    // If the index is less than zero or greater than or equal to the length, return undefined
    // If the index is 0, shift()
    // If the index is equal to the length - 1, pop()
    // Use the get method to retrieve the item to be removed
    // Update the next and prev properties to remove the found node from the list
    // Set next and prev to null on the found node
    // Decrement the length
    // Return the removed node

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        let remNode = this.get(index);
        let prevNode = remNode.prev;
        let nexNode = remNode.next;

        prevNode.next = nexNode;
        nexNode.prev = prevNode;

        remNode.next = null;
        remNode.prev = null;

        this.length--;
        return remNode;
    }

    print() {
        let arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }

    // reverse() reverse the linked list in place

    reverse() {
        let current = this.head; 
        this.tail = current;

        while (current) {
            let true_next = current.next;
            // swap the previous and next for each node.
            current.next = current.prev; 
            current.prev = true_next; 

            this.head = current; 
            current = true_next; 
        }
        return this;
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
list.reverse();

list.print();
console.log(list)


