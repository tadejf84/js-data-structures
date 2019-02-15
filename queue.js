/*
* queue
* first in, first out data structure
*/
class Queue {
	
	constructor() {
		this.data = [];   // data storage
	}
	
	// add el to back
	enqueue(el) {
		this.data.push(el);
	}

	// remove el from front
	dequeue() {
		return this.data.shift();
	}

	// traverse to front
	front() {
		return this.data[0];
	}

	// traverse to back
	back() {
		return this.data[this.data.length - 1];
	}
	
	// display queue - to console
	display() {
		for (let d of this.data) {
			console.log(d + ',');
		}
	}
	
	// check if queue is empty
	isEmpty() {
		if (this.data.length === 0) {
			return true;
		} else {
			return false;
		}
	}
	
}
