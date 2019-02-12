function Vertex(label) {
	this.label = label;
}

function Graph(v) {
this.vertices = v;
this.edges = 0;
this.adj = [];
for (var i = 0; i < this.vertices; ++i) {
this.adj[i] = [];
this.adj[i].push("");
}
this.addEdge = addEdge;
this.showGraph = showGraph;
this.dfs = dfs;
this.marked = [];
for (var i = 0; i < this.vertices; ++i) {
this.marked[i] = false;
}
	
this.edgeTo = [];
this.pathTo = pathTo;
this.hasPathTo = hasPathTo;
}

function addEdge(v,w) {
this.adj[v].push(w);
this.adj[w].push(v);
this.edges++;
}


function showGraph() {
/*
for (var i = 0; i < this.vertices; ++i) {
putstr(i + " -> ");
for (var j = 0; j < this.vertices; ++j) {
if (this.adj[i][j] != undefined)
putstr(this.adj[i][j] + ' ');
}
print();
}
*/
}


// search graph
function dfs(v) {
/*
this.marked[v] = true;
if (this.adj[v] != undefined) {
print("Visited vertex: " + v);
}
for each (var w in this.adj[v]) {
if (!this.marked[w]) {
this.dfs(w);
}
}
*/
}

// find shortest paths
function bfs(s) {
/*
var queue = [];
this.marked[s] = true;
queue.push(s); // add to back of queue
while (queue.length > 0) {
var v = queue.shift(); // remove from front of queue
if (v == undefined) {
print("Visited vertex: " + v);
}
for each (var w in this.adj[v]) {
if (!this.marked[w]) {
this.edgeTo[w] = v;
this.marked[w] = true;
queue.push(w);
}
}
}
*/
}


function pathTo(v) {
var source = 0;
if (!this.hasPathTo(v)) {
return undefined;
}
var path = [];
	for (var i = v; i != source; i = this.edgeTo[i]) {
path.push(i);
}
path.push(s);
return path;
}

function hasPathTo(v) {
return this.marked[v];
}
