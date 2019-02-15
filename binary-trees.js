/*
* binary trees
* a tree is a nonlinear data structure that is used to store data in a hierarchical manner
* a tree is made up of a set of nodes connected by edges
* binary trees - max number of child nodes is 2
*/
class BinaryTree {
	
	constructor () {
		this.root = null; // set root of the tree to null at first
	}
	
	// insert node to binary tree
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
	
	// remove nodes from the tree
	remove(data) {
		this.root = this.removeNode(this.root, data);
	}
	
	removeNode(node, data) {
		
		if (node === null) {
			return null;
		}
		
		if (data === node.data) {
			
			// node has no children
			if (node.left === null && node.right === null) {
				return null;
			}
			
			// node has no left child
			if (node.left === null) {
				return node.right;
			}
			
			// node has no right child
			if (node.right === null) {
				return node.left;
			}
			
			// node has two children
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
	
	// find node
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
	
	// traverse tree and output nodes to console
	inOrder(node) {
		if ( node !== null) {
			this.inOrder(node.left);
			console.log(node.data);
			this.inOrder(node.right);
		}
	}
	
	// get min value - minimum is either root or found in the left
	getMin() {
		let current = this.root;
		while (current.left !== null) {
			current = current.left;
		}
		return current.data;
	}
	
	// get max value - maximum is either root or found in the right
	getMax() {
		let current = this.root;
		while (current.right !== null) {
			current = current.right;
		}
		return current.data;
	}
			
}


/*
* class to construct a node
*/
class NodeTree {
	constructor (data, left, right) {
		this.data = data;
		this.left = left;
		this.right = right;
	}
}
