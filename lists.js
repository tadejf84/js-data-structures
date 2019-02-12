/*
* a list is a ordered sequence of data
* each data item stored in the list is called an element
* elements can be of any data type
*/
class List {
	
	constructor() {
		this.listSize = 0; 		// size of the list
		this.pos = 0; 				// current position in the list
		this.dataStore = []; 	// data storage - elements stored in an array
	}
	
	// append element to list
	append(element) {
		this.dataStore[this.listSize++] = element;
	}
	
	// insert an element
	insert(element, after) {
		var insertPos = this.find(after);
		if (insertPos > -1) {
			this.dataStore.splice(insertPos + 1, 0, element);
			this.listSize++;
			return true;
		}
		return false;
	}
	
	// remove element from list
	remove(element) {
		var foundAt = this.find(element);
		if (foundAt > -1) {
			this.dataStore.splice(foundAt, 1);
			this.listSize--;
			return true;
		}
		return false;
	}
	
	// empty list
	clear() {
		this.dataStore = [];
		this.listSize = 0;
		this.pos = 0;
	}
	
	// find element in the list
	find(element) {
		return this.dataStore.indexOf(element);
	}
	
	// diplay list
	display() {
		return this.dataStore;
	}
	
	// check if element is in the list
	hasElement(element) {
		return this.dataStore.includes(element);
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
		return this.dataStore[this.pos];
	}
	
	// return length of the list
	length() {
		return this.listSize;
	}
		
}

