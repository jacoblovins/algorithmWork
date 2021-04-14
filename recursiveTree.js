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

    // find()

    find(val) {
        if (!this.root) {
            return false;
        } else {
            const search = node => {
                if (val === node.val) {
                    return true;
                } else if (val < node.val) {
                    if (!node.left) {
                        return false;
                    } else if (val === node.left.val) {
                        return true
                    } else {
                        return search(node.left);
                    }
                } else if (val > node.val) {
                    if (!node.right) {
                        return false;
                    } else if (val === node.right.val) {
                        return true
                    } else {
                        return search(node.right);
                    }
                }
            }
            return search(this.root)
        }
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

console.log(tree.find(3));

// console.log(tree);

