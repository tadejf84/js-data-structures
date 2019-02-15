/*
* stack 
* data can be added or removed only from the top of the stack
*/
class Stack {
	
	constructor() {
		this.data = []; 	// data storage - elements stored in an array
		this.top = 0; 		// top of the stack
	}
	
	// store element on the top of the stack
	push(el) {
		this.data[this.top++] = el;
	}
	
	// return the element from the top of the stack and decrement stack size
	pop() {
		return this.data[--this.top];
	}
	
	peek() {
		return this.data[this.top - 1];
	}
	
	// clear the stack
	clear() {
		this.top = 0;
	}
	
	// get size of the stack
	length() {
		return this.top;
	}
	
}
