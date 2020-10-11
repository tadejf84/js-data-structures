/**
 * Class Binary Tree
 * 
 * A tree is a nonlinear data structure that is used to store data in a hierarchical manner
 * A tree is made up of a set of nodes connected by edges
 * Binary trees - max number of child nodes is 2
 */
class BinaryTree {

    /**
     * @constructor
     * 
     */
    constructor () {
        this.root = null; // Set root of the tree to null at first
    }

    /**
     * Insert node to binary tree
     * 
     * @param {number} data 
     */
    insert (data) {
        let n = new NodeTree(data, null, null);
        if (this.root === null) {
            this.root = n;
        } else {
            let current = this.root;
            let parent;
            while (true) {
                parent = current;
                if (data < current.data) {
                    current = current.left;
                    if (current === null) {
                        parent.left = n;
                        break;
                    }
                } else {
                    current = current.right;
                    if (current === null) {
                        parent.right = n;
                        break;
                    }
                }
            }
        }
    }

    /**
     * Remove nodes from the tree
     * 
     * @param {number} data 
     */
    remove(data) {
        this.root = this.removeNode(this.root, data);
    }

    /**
     * Remove node
     * 
     * @param {object} node 
     * @param {number} data 
     * 
     * @returns {object} node
     */
    removeNode(node, data) {
        if (node === null) return null;
        
        if (data === node.data) {
            
            // Node has no children
            if (node.left === null && node.right === null) {
                return null;
            }
            
            // Node has no left child
            if (node.left === null) {
                return node.right;
            }
            
            // Node has no right child
            if (node.right === null) {
                return node.left;
            }
            
            // Node has two children
            let tempNode = Math.min(node.right);
            node.data = tempNode.data;
            node.right = this.removeNode(node.right, tempNode.data);
            return node;
            
        } else if (data < node.data) {
            node.left = this.removeNode(node.left, data);
            return node;
        } else {
            node.right = this.removeNode(node.right, data);
            return node;
        }
    }

    /**
     * Find node
     * 
     * @param {number} data 
     * 
     * @returns {object} Node
     */
    find(data) {
        let current = this.root;
        
        // loop through all nodes data until we find a match
        while (current.data !== data) {
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
            if (current === null) {
                return null;
            }
        }
        
        return current;
    }

    /**
     * Traverse tree and output nodes to console
     * 
     * @param {object} node 
     */
    inOrder(node) {
        if ( node === null) return;
        this.inOrder(node.left);
        console.log(node.data);
        this.inOrder(node.right);
    }
	
    /**
     * Get min value - minimum is either root or found in the left
     * 
     * @returns {number} min
     */
    getMin() {
        let current = this.root;
        while (current.left !== null) {
            current = current.left;
        }
        return current.data;
    }

    /**
     * Get max value - maximum is either root or found in the right
     * 
     * @returns {number} max
     */
    getMax() {
        let current = this.root;
        while (current.right !== null) {
            current = current.right;
        }
        return current.data;
    }		
}


/**
 * Class NodeTree
 * Instantiate a single node of the tree
 * 
 */
class NodeTree {

    /**
     * @constructor
     * 
     * @param {number} data 
     * @param {object} left 
     * @param {object} right 
     */
    constructor (data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}
