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

    bfs(){
        const queue = [];
        const visited = [];
        let check;

        if(!this.root) return false;
        queue.push(this.root);
        while(queue.length > 0){
            check = queue.shift();
            visited.push(check.val);
            if(check.left) queue.push(check.left);
            if(check.right) queue.push(check.right);
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