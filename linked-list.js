/**
 * Class LinkedList
 * 
 * A linked list is a linear data structure - the elements in the list are linked with pointers
 * Each element or node contains data and reference to the next element in the list
 */
class LinkedList {
    
    /**
     * @constructor
     * 
     */
    constructor() {
        this.head = new Node("head");;
    }
	
    /**
     * Find node in the list
     * 
     * @param {string} node 
     * 
     * @returns {object} currNode
     */
    find(node) {
        let currNode = this.head;
        while (currNode.element !== node) {
            currNode = currNode.next;
        }
        return currNode;
    }

    /**
     * Insert new node
     * 
     * @param {string} newEl 
     * @param {string} linkedNode 
     */
    insert(newEl, linkedNode) {
        let newNode = new Node(newEl);
        let current = this.find(linkedNode);
        newNode.next = current.next;
        current.next = newNode;
    }
	
    /**
     * Remove node from list
     * 
     * @param {string} node 
     */
    remove(node) {
        let prevNode = this.findPrevious(node);
        if (prevNode.next !== null) {
            prevNode.next = prevNode.next.next;
        }
    }
	
    /**
     * Display data to console
     * 
     */
    display() {
        let currNode = this.head;
        while (currNode.next !== null) {
            console.log(currNode.next.element);
            currNode = currNode.next;
        }
    }
	
    /**
     * Find previous node in the list
     * 
     * @param {string} node 
     * 
     * @returns {string} node
     */
    findPrevious(node) {
        let currNode = this.head;
        while (currNode.next !== null && currNode.next.element !== node) {
            currNode = currNode.next;
        }
        return currNode;
    }

}


/**
 * Class Node
 * Instantiate a new node
 * 
 */
class Node {

    /**
     * @constructor
     * 
     * @param {string} el 
     */
    constructor (el) {
        this.element = el;
        this.next = null;	
    }
}
