// Create a variabel to store the values of nodes visited
// Store the root fo the BST in a variabel called current
// Write a helper function which accepts a node
    // Push the value of the node to the variable that stores the values
    // If the node has a left property, call the helper function with the left property as the node
    // If the node has a right property, call the helper function with the right property as the node
// Invoke the helper function with the current variable
// Return the array of values

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.count = 1;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        const newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
        } else {
            const search = node => {
                if (newNode.val === node.val) {
                    node.count++
                } else if (newNode.val < node.val) {
                    if (!node.left) {
                        node.left = newNode
                    } else {
                        search(node.left)
                    }
                } else if (newNode.val > node.val) {
                    if (!node.right) {
                        node.right = newNode
                    } else {
                        search(node.right)
                    }
                }
            }
            search(this.root)
        }
    }

    preDfs(){
        let visited = [];
        if(!this.root) return false;
        let current = this.root;
        const traverse = current => {
            visited.push(current.val);
            if(current.left) traverse(current.left);
            if(current.right) traverse(current.right);
        }
        traverse(current)
        return visited
    }
    
    // Only changing the order of 1 line between pre and post
    // Explore all children before visiting the node

    postDfs(){
        let visited = [];
        if(!this.root) return false;
        let current = this.root;
        const traverse = current => {
            if(current.left) traverse(current.left);
            if(current.right) traverse(current.right);
            visited.push(current.val); // just moved this line 
        }
        traverse(current)
        return visited
    }

    // in order dfs

    inDfs(){
        let visited = [];
        if(!this.root) return false;
        let current = this.root;
        const traverse = current => {
            if(current.left) traverse(current.left);
            visited.push(current.val); // just moved this line 
            if(current.right) traverse(current.right);
        }
        traverse(current)
        return visited
    }

}

const tree = new BinarySearchTree();

tree.insert(10);
tree.insert(5);
tree.insert(7);
tree.insert(12);
tree.insert(11);
tree.insert(15);
tree.insert(3);


console.log(tree.preDfs());
console.log(tree.postDfs());
console.log(tree.inDfs());