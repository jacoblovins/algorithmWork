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

}

const list = new SinglyLinkedList()
list.push("Hello")
list.push("GoodBye")
list.push("Another thing")
list.push("something else")
console.log(list);