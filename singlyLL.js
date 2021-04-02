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

    // Unshift() - adding a new node to the beginning of the linked list

    // Function accepts a value
    // Create a new node using the value passed to the function
    // If there is no head property on the list, set the head and tail to be the newly created node
    // Otherwise set the newly created node's next property to be the current head property on the list
    // Set the head property on the list to be that newly created node
    // Increment the length of the list by 1
    // Return the linked list

    unshift(val){
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    // get() - retrieving a node by it's position in the linked list

    // Function should accept an index
    // If the index is less than zero or greater than or equal to the length of the list, return null
    // Loop through the list until you reach the index and return the node at that specific index

    get(index){
        if(index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while(counter != index){
            current = current.next;
            counter++;
        }
        return current;
    }

    // set() - changing the value of a node based on it's position in the linked list

    // Function accepts an index and a value to update it to
    // use your get() function to find the node
    // if the node is not found, return false
    // if the node is found, set the value of that node to be the value passed to the function and return true

    set(index, val){
        const foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }

    // insert() - adding a node to the linked list at a specific position

    // Function takes in an index and a value
    // If the index is less than zero or greater than the length, return false
    // If the index is the same as the length, push a new node to the end of the list
    // If the index is 0, unshift a new node to the start of the list
    // Otherwise using the get method, acces the node at the index -1
    // Set the next property on that node to be the new node
    // Set the next property on the new node to be the previous next
    // Increment the length
    // Return true

    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === this.length){
            this.push(val);
            return true;
        } 
        if(index === 0){
            this.unshift(val);
            return true;
        }
        const newNode = new Node(val);
        const prev = this.get(index-1);
        const temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    // remove() - removing a node from the linked list at a specific postion

    // Function that accepts an index
    // If the index is less than zero or greater than the length return undefined or null
    // If the index is the same as the length - 1, pop
    // If the index is 0 use shift()
    // Otherwise, using the get method, access the node at the index - 1
    // Set the next property on that node to be the next of the next node
    // Decrement the length
    // Return the value of the node removed

    remove(index){
        if(index < 0 || index >= this.length) return false;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        const previousNode = this.get(index - 1);
        const removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }

    // reverse()
    
    // Swap the head and tail
    // create a variable called next
    // create a variable called previous
    // Create a variable called node and initialize it to the head property
    // Loop through the list
    // Set next to be the next property on whatever node is
    // set the next property on the node to be whatever the prev is
    // set prev to be the value of the node variable
    // Set thenode variable to be teh value of the next variable

    // Print function to make checking our work easier
    print(){
        let arr = [];
        let current = this.head;
        while(current){
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }

    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next = null;
        let prev = null;
        for(let i = 0; i < this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
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
// list.pop()
// list.shift()
list.unshift("First")
// list.set(0, "Changed!")
// list.insert(1, "Second changed!")
list.remove(1)

list.print()
list.reverse()
list.print()
// console.log(list.get(1))
