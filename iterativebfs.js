// Create a queue (we will use an array to keep it simple) and a variabel to store the values of nodes visited
// Place the root node in the queue
// Loop as long as there is anything in the queue
    // Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
    // If there is a left property on the node dequeued - add it to the queue
    // if there is a right property on the node dequeued - add it to the queue
// Return the variable that stores the values


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

        if (this.root === null) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            if (val === current.val) {
                current.count++;
                return this;
            }
            while (true) {
                if (val === current.val) {
                    current.count++;
                    return this;
                }
                if (val < current.val) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if (val > current.val) {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }

    bfs(){
        const queue = [];
        const visited = [];

        if(!this.root) return false;
        queue.push(this.root);
        while(queue.length > 0){
            let check = queue.shift();
            visited.push(check.val);
            if(check.left){
                queue.push(check.left)
            } else {
                continue
            }
            if(check.right){
                queue.push(check.right)
            } else {
                continue
            }
        }
        return visited;
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


console.log(tree.bfs());