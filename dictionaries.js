/**
 * Class Dictionary
 * 
 * Store data as key value pairs
 */
class Dictionary {
	
	constructor() {
		this.data = []; // data storage
	}
	

	/**
	 * Add data as key-value pair
	 * 
	 * @param {string} key 
	 * @param {string} val 
	 */
	add(key, val) {
		this.data[key] = val;
	}
	

	/**
	 * Find by key
	 * 
	 * @param {string} key 
	 * 
	 * @returns {string}
	 */
	find(key) {
		return this.data[key];
	}
	

	/**
	 * Remove element
	 * 
	 * @param {string} key 
	 */
	remove(key) {
		delete this.data[key];
	}
	

	/**
	 * Display all data in console
	 * 
	 */
	display() {
		Object.keys(this.data).forEach( (key, val) => console.log(key + ': ' + this.data[key]) );
	}
	

	/**
	 * Count total number of elements
	 * 
	 * @returns {number} count
	 */
	count() {
		let n = 0;
		Object.keys(this.data).forEach( key => n++ );
		return n;
	}
	
	/**
	 * Empty all data
	 * 
	 */
	empty() {
		this.data = [];
	}
	
}

