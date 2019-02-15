/*
* linked lists
*
*/
class LinkedList {
	
	constructor () {
		this.head = new Node("head");;
	}
	
	// find node in the list
	find (node) {
		let currNode = this.head;
		while (currNode.element !== node) {
		currNode = currNode.next;
		}
		return currNode;
	}
	
	// insert new node
	insert(newEl, linkedNode) {
		let newNode = new Node(newEl);
		let current = this.find(linkedNode);
		newNode.next = current.next;
		current.next = newNode;
	}
	
	// remove node from list
	remove(node) {
		let prevNode = this.findPrevious(node);
		if (prevNode.next !== null) {
			prevNode.next = prevNode.next.next;
		}
	}
	
	// display data - to console
	display() {
		let currNode = this.head;
		while (currNode.next !== null) {
			console.log(currNode.next.element);
			currNode = currNode.next;
		}
	}
	
	// find previos node
	findPrevious(node) {
		let currNode = this.head;
		while (currNode.next !== null && currNode.next.element !== node) {
			currNode = currNode.next;
		}
		return currNode;
	}

}


/*
* class to construct a node
*/
class Node {
	constructor (el) {
		this.element = el;
		this.next = null;	
	}
}
