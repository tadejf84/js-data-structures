/*
* dictionaries
* store data as key value pairs
*/
class Dictionary {
	
	constructor () {
		this.data = []; // data storage
	}
	
	// add data as key-value pair
	add (key, val) {
		this.data[key] = val;
	}
	
	// find value by key
	find (key) {
		return this.data[key];
	}
	
	// remove element
	remove (key) {
		delete this.data[key];
	}
	
	// display all data - to console
	display () {
		Object.keys(this.data).forEach( (key, val) => console.log(key + ': ' + this.data[key]) );
	}
	
	// count number of elements
	count () {
		let n = 0;
		Object.keys(this.data).forEach( key => n++ );
		return n;
	}
	
	// clear data
	empty () {
		this.data = [];
	}
	
}

