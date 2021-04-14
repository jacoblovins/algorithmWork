class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
        this.count = 1;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    // insert()

    insert(val){
        const newNode = new Node(val);
        if(!this.root){
            this.root = newNode;
        } else {
            const search = node => {
                if(newNode.val === node.val){
                    node.count++
                } else if(newNode.val < node.val){
                    if(!node.left){
                        node.left = newNode
                    } else {
                        search(node.left)
                    }
                } else if(newNode.val > node.val){
                    if(!node.right){
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

    searchLeft(val, current){
        if(current.left === null){
            return false;
        } else if(val === current.left.val){
            return true;
        } else if(val < current.left.val){
            current = current.left;
            return this.searchLeft(val, current)
        } else if(val > current.left.val){
            current = current.left;
            return this.searchRight(val, current)
        }
    }

    searchRight(val, current){
        if(current.right === null){
            return false;
        } else if(val === current.right.val){
            return true;
        } else if(val < current.right.val){
            current = current.right;
            return this.searchLeft(val, current)
        } else if(val > current.right.val){
            current = current.right;
            return this.searchRight(val, current)
        }
    }
    
    find(val){
        let current = this.root;
        if(this.root === null){
            return false;
        } else if(val === current.val){
            return true;
        } else if(val < current.val){
            return this.searchLeft(val, current);
        } else if(val > current.val){
            return this.searchRight(val, current);
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

// console.log(tree.find(16));

console.log(tree);

