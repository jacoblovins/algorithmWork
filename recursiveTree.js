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
    goLeft(newNode, current){
        if(current.left === null){
            current.left = newNode;
            return true;
        } else if(newNode.val === current.left.val){
            current.left.count++;
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
        } else if(newNode.val === current.right.val){
            current.right.count++;
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
            if(newNode.val === current.val){
                current.count++;
                return true;
            }
            if(newNode.val < current.val){
                this.goLeft(newNode, current)
            } else if(newNode.val > current.val){
                this.goRight(newNode, current)
            }
        }
    }

    // find()
    searchLeft(val, current){
        console.log("searchleft running")
        if(current.left === null){
            return false;
        } else if(val === current.left.val){
            console.log("val === current.left.val")
            return true;
        } else if(val < current.left.val){
            current = current.left;
            this.searchLeft(val, current)
        } else if(val > current.left.val){
            current = current.left;
            this.searchRight(val, current)
        }
    }

    searchRight(val, current){
        console.log("searchRight running")
        if(current.right === null){
            console.log("current.right.val === null")
            return false;
        } else if(val === current.right.val){
            console.log("val === current.right.val")
            return true;
        } else if(val < current.right.val){
            console.log("val < current.right.val")
            current = current.right;
            this.searchLeft(val, current)
        } else if(val > current.right.val){
            console.log("val > current.right.val")
            current = current.right;
            this.searchRight(val, current)
        }
    }
    

    find(val){
        let current = this.root;
        if(this.root === null){
            console.log("root is null");
            return false;
        } else if(val === current.val){
            console.log("value is here");
            return true;
        } else if(val < current.val){
            console.log("value is less than current");
            this.searchLeft(val, current)
        } else if(val > current.val){
            console.log("value is greater than current");
            this.searchRight(val, current)
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

console.log(tree.find(11))

// console.log(tree);

