/*
* graphs
* graph consists of a set of vertices and a set of edges
* edges connect vertices
* a vertex can also have weight, also called cost
*/
class Graph { 

	constructor(vertices, edges) { 
		this.vertices = vertices; 	// initial vertices
		this.edges = edges;
		this.AdjList = new Map(); 	// list of adjacent vertices
		
		// add initial vertices to graph
		for (let v of vertices) {
			this.AdjList.set(v, []); 
		}

		// add initial edges to graph
		for (let edge of edges) {
			this.AdjList.get(edge.src).push(edge.dest); 
			this.AdjList.get(edge.dest).push(edge.src);
		}
    } 
  
    // add vertex to the graph 
	addVertex(v) { 
		this.AdjList.set(v, []); 
		this.vertices.push(v);
	}  

	// add edge to the graph 
	addEdge(edge) { 
		this.AdjList.get(edge.src).push(edge.dest); 
		this.AdjList.get(edge.dest).push(edge.src); 
		this.edges.push({'src': edge.src, 'dest': edge.dest});
	} 

	// display the vertex and adjacency list - to console
	display() { 

		// get all the vertices 
		const mapKeys = this.AdjList.keys(); 
	
		// iterate over the vertices 
		for (let i of mapKeys)  { 

			// get the adjacency array for vertex
			const mapValues = this.AdjList.get(i); 
			let str = ""; 
	
			// iterate over the adjacency list 
			for (let j of mapValues) {
				str += j + " "; 
			}

			console.log(i + " -> " + str); 
		} 
	}

	
	// traverse graph - depth first search
	dfs(startingNode) { 
		let visited = []; 
		for (let i = 0; i < this.vertices.length; i++) {
			visited[i] = false; 
		}	
		this.dfsUtil(startingNode, visited); 
	} 
	
	// helper function - recursive go through all unvisited vertices
	dfsUtil(v, visited) { 
		visited[v] = true; 
		console.log(v); 
		const getNeighbours = this.AdjList.get(v); 
		for (let i in getNeighbours) { 
			let getEl = getNeighbours[i]; 
			if (!visited[getEl]) {
				this.dfsUtil(getEl, visited);
			} 
		} 
	}

} 
