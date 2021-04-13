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

    insert(val){

        const newNode = new Node(val);

        if(!this.root){
            this.root = newNode;
            return true;
        } else {
            
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

