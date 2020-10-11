/**
 * Class List
 * 
 * A list is a ordered sequence of data
 * Each data item stored in the list is called an element
 * Elements can be of any data type
 */
class List {
    
    /**
     * @constructor
     * 
     */
    constructor() {
        this.listSize = 0; 		// Size of the list
        this.pos = 0; 			// Current position in the list
        this.data = []; 		// Data storage - elements stored in an array
    }

    /**
     * Append element to list
     * 
     * @param {string} el 
     */
    append(el) {
        this.data[this.listSize++] = el;
    }

    /**
     * Insert an element at specific position
     * 
     * @param {string} el 
     * @param {string} after 
     * 
     * @returns {boolean}
     */
    insert(el, after) {
        const insertPos = this.find(after);
        if (insertPos > -1) {
            this.data.splice(insertPos + 1, 0, el);
            this.listSize++;
            return true;
        }
        return false;
    }
	
    /**
     * Remove element from the list
     * 
     * @param {string} el 
     * 
     * @returns {boolean}
     */
    remove(el) {
        const foundAt = this.find(el);
        if (foundAt > -1) {
            this.data.splice(foundAt, 1);
            this.listSize--;
            return true;
        }
        return false;
    }
	
    /**
     * Empty the list
     */
    clear() {
        this.data = [];
        this.listSize = 0;
        this.pos = 0;
    }

    /**
     * Find element in the list
     * 
     * @param {string} el
     * 
     * @returns {number} index
     */
    find(el) {
        return this.data.indexOf(el);
    }

    /**
     * Display the list to console
     * 
     */
    display() {
        console.log(this.data);
    }

    /**
     * Check if element is in the list
     * 
     * @param {string} el 
     * 
     * @returns {boolean}
     */
    hasElement(el) {
        return this.data.includes(el);
    }

    /**
     * Move to front of the list
     * 
     */
    front() {
        this.pos = 0;
    }
	
    /**
     * Move to end of the list
     * 
     */
    end() {
        this.pos = this.listSize - 1;
    }

    /**
     * Move to previous element
     * 
     */
    prev() {
        if (this.pos > 0) {
            this.pos--;
        }
    }
	
    /**
     * Move to next element
     * 
     */
    next() {
        if (this.pos < this.listSize - 1) {
            this.pos++;
        }
    }

    /**
     * Get position of the current element in the list
     * 
     * @returns {number} index
     */
    currPos() {
        return this.pos;
    }
	
    /**
     * Move to position
     * 
     * @param {number} position 
     */
    moveTo(position) {
        this.pos = position;
    }
	
    /**
     * Get current element value
     * 
     * @returns {string} el
     */
    getElement() {
        return this.data[this.pos];
    }
	
    /**
     * Get size of the list
     * 
     * @returns {number} length
     */
    length() {
        return this.listSize;
    }
		
}

