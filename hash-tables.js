/**
 * Class HashTable
 * 
 * For fast insertion, deletion, and retrieval
 * Each data element is stored in the array based on the key, similar to dictionary
 * To store a piece of data in a hash table, the key is mapped into a number in the range of 0 through the hash table size, using a hash function
 */
class HashTable{
	
	constructor () {
		this.table = new Array(137);  // data storage - array with predefined length
	}
	

	/**
	 * Put data to table, generate key first with hash function
	 * 
	 * @param {string} data 
	 */
	put(data) {
		const key = this.hash(data);
		this.table[key] = data;
	}
	

	/**
	 * Hash function
	 * 
	 * @param {string} string 
	 * 
	 * @returns {number} key
	 */
	hash (string) {
		const H = 37;
		let total = 0;
		for (let i = 0; i < string.length; i++) {
			total += H * total + string.charCodeAt(i);
		}
		total = total % this.table.length;
		if (total < 0) {
			total += this.table.length - 1;
		}
		return parseInt(total);
	}
	
	
	/**
	 * Display data to console
	 * 
	 */
	display () {
		for (let i = 0; i < this.table.length; i++) {
			if (this.table[i] != undefined) {
			console.log(i + ": " + this.table[i]);
			}
		}
	}

}
