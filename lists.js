/*
* a list is a ordered sequence of data
* each data item stored in the list is called an element
* elements can be of any data type
*/
class List {
	
	constructor() {
		this.listSize = 0; 		// size of the list
		this.pos = 0; 			// current position in the list
		this.data = []; 		// data storage - elements stored in an array
	}
	
	// append element to list
	append(el) {
		this.data[this.listSize++] = el;
	}
	
	// insert an element
	insert(el, after) {
		var insertPos = this.find(after);
		if (insertPos > -1) {
			this.data.splice(insertPos + 1, 0, el);
			this.listSize++;
			return true;
		}
		return false;
	}
	
	// remove element from list
	remove(el) {
		var foundAt = this.find(el);
		if (foundAt > -1) {
			this.data.splice(foundAt, 1);
			this.listSize--;
			return true;
		}
		return false;
	}
	
	// empty list
	clear() {
		this.data = [];
		this.listSize = 0;
		this.pos = 0;
	}
	
	// find element in the list
	find(el) {
		return this.data.indexOf(el);
	}
	
	// diplay list
	display() {
		return this.data;
	}
	
	// check if element is in the list
	hasElement(el) {
		return this.data.includes(el);
	}
	
	// traverse the list methods
	front() {
		this.pos = 0;
	}
	
	end() {
		this.pos = this.listSize - 1;
	}
	
	prev() {
		if (this.pos > 0) {
			this.pos--;
		}
	}
	
	next() {
		if (this.pos < this.listSize - 1) {
			this.pos++;
		}
	}
	
	currPos() {
		return this.pos;
	}
	
	moveTo(position) {
		this.pos = position;
	}
	
	getElement() {
		return this.data[this.pos];
	}
	
	// return length of the list
	length() {
		return this.listSize;
	}
		
}

