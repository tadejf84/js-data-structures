function Dictionary() {
		this.add = add;
		this.datastore = new Array();
		this.find = find;
		this.remove = remove;
		this.showAll = showAll;
		this.count = count;
		this.clear = clear;
}

function add(key, value) {
	this.datastore[key] = value;
}

function find(key) {
	return this.datastore[key];
}

function remove(key) {
	//delete this.datastore[key];
}

function showAll() {
	Object.keys(this.datastore).forEach(function(key){
		console.log(key + " -> " + this.datastore[key]);
	});
	/*
	foreach (var key in Object.keys(this.datastore)) {
		console.log(key + " -> " + this.datastore[key]);
	}
	*/
}

function count() {
	var n = 0;
	Object.keys(this.datastore).forEach(function(key){
		++n;
	});
	return n;
	/*
	var n = 0;
	for each (var key in Object.keys(this.datastore)) {
	++n;
	}
	return n;
	*/
}

function clear() {
	Object.keys(this.datastore).forEach(function(key){
		//delete this.datastore[key];
	});
	/*
	for each (var key in Object.keys(this.datastore)) {
	delete this.datastore[key];
	}
	*/
}