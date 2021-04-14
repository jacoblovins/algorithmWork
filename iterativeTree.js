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

    // insert()

    // Create a new node
    // Starting at the root:
    // Check if there is a root, if not, the root now becomes that new node.
    // If there is a root, check if the value of the new node is greater than or less than the value of the root.
    // If it is greater:
    // Check to see if there is a node to the right
    // If there is, move to that node and repeat these steps
    // If there is not, add that node as the right property
    // If it is less:
    // Check to see if there is a node to the left
    // If there is , move to that node and repeat these steps
    // If there is not, add that node as the left property

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

    // find()

    // Check if there is a root, if not we are done searching
    // If there is a root, check if the value of the new node is the value we are looking for. If we found it, we are done
    // If not, check to see if the value is greater than or less than the value of the root
    // If it is greater:
    // Check to see if there is a node to the right
    // If there is, move to that node and repeat these steps
    // If there is not, we are done searching
    // If it is less:
    // Check to see if there is a node to the left
    // If there is, move to that node and repeat these steps
    // If ther is not, we are done searching

    find(val) {
        if (!this.root) return false;
        let current = this.root;
        while (current) {
            if (val === current.val) {
                return true;
            } else if (val < current.val) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
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
tree.insert(10);
tree.insert(12);

console.log(tree.find(10));

// console.log(tree);

