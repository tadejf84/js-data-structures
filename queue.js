/**
 * Class Queue
 * 
 * First in, first out data structure
 */
class Queue {
    
    /**
     * @constructor
     * 
     */
    constructor() {
        this.data = [];   // data storage
    }
	
    /**
     * Add element to back of the queue
     * 
     * @param {string} el 
     */
    enqueue(el) {
        this.data.push(el);
    }

    /**
     * Remove element from front
     * 
     */
    dequeue() {
        this.data.shift();
    }

    /**
     * Traverse to front
     * 
     * @returns {string} element from front
     */
    front() {
        return this.data[0];
    }

    /**
     * Traverse to back
     * 
     * @returns {string} last element
     */
    back() {
        return this.data[this.data.length - 1];
    }

    /**
     * Display queue in console
     * 
     */
    display() {
        for (let d of this.data) {
            console.log(d + ',');
        }
    }
	
    /**
     * Check if queue is empty
     * 
     * @returns {boolean}
     */
    isEmpty() {
        if (this.data.length === 0) 
        {
            return true;
        } 
        else 
        {
            return false;
        }
    }

}
