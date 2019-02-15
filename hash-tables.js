/*
* hash tables
* for fast insertion, deletion, and retrieval
* ach data element is stored in the array based on the key, similar to dictionary
* to store a piece of data in a hash table, the key is mapped into a number in the range of 0 through the hash table size, using a hash function
* not suitable for searching operations such as find max or min
*/
class HashTable{
	
	constructor () {
		this.table = new Array(137);  // data storage - array with predefined length
	}
	
	// put data to table, generate key first with hash function
	put (data) {
		const key = this.hash(data);
		this.table[key] = data;
	}
	
	// hash function
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
	
	// display data - to console
	display () {
		for (let i = 0; i < this.table.length; i++) {
			if (this.table[i] != undefined) {
			console.log(i + ": " + this.table[i]);
			}
		}
	}

}
