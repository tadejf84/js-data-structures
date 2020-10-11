/**
 * Class Stack
 * 
 * Data can be added or removed only from the top of the stack
 */
class Stack {
    
    /**
     * @constructor
     * 
     */
	constructor() {
		this.data = []; 	// Data storage - elements stored in an array
		this.top = 0; 		// Top of the stack
	}

    /**
     * Store element on the top of the stack
     * 
     * @param {string} el 
     */
    push(el) {
        this.data[this.top++] = el;
    }

    /**
     * Return the element from the top of the stack and decrement stack size
     * 
     * @returns {string} element
     */
    pop() {
        return this.data[--this.top];
    }

    peek() {
        return this.data[this.top - 1];
    }
	
    /**
     * Empty the stack
     * 
     */
    clear() {
        this.top = 0;
    }

	/**
	 * Get the size of the stack
	 * 
	 * @returns {number} size
	 */
	length() {
		return this.top;
	}
	
}
