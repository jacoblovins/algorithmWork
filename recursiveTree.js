class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    // insert()
    goLeft(newNode, current){
        if(current.left === null){
            current.left = newNode;
            return true;
        } else if(newNode.val < current.left.val){
            current = current.left;
            this.goLeft(newNode, current);
        } else if(newNode.val > current.left.val){
            current = current.left;
            this.goRight(newNode, current);
        }
    }
    goRight(newNode, current){
        if(current.right === null){
            current.right = newNode;
            return true;
        } else if(newNode.val < current.right.val){
            current = current.right;
            this.goLeft(newNode, current);
        } else if(newNode.val > current.right.val){
            current = current.right;
            this.goRight(newNode, current);
        }
    }

    insert(val){

        const newNode = new Node(val);

        if(!this.root){
            this.root = newNode;
            return true;
        } else {
            let current = this.root;
            if(newNode.val < current.val){
                this.goLeft(newNode, current)
            } else if(newNode.val > current.val){
                this.goRight(newNode, current)
            }
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

console.log(tree);

