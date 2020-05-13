/**
 * Class Graph
 * 
 * Graph consists of a set of vertices and a set of edges
 * Edges connect vertices
 * A vertex can also have weight, also called cost
 */
class Graph { 

	constructor(vertices, edges) { 
		this.vertices = vertices; 	// Initial vertices
		this.edges = edges;
		this.AdjList = new Map(); 	// List of adjacent vertices
		
		// Add initial vertices to graph
		for (let v of vertices) {
			this.AdjList.set(v, []); 
		}

		// Add initial edges to graph
		for (let edge of edges) {
			this.AdjList.get(edge.src).push(edge.dest); 
			this.AdjList.get(edge.dest).push(edge.src);
		}
    } 
  

	/**
	 * Add vertex to the graph
	 * 
	 * @param {string} v 
	 */
	addVertex(v) { 
		this.AdjList.set(v, []); 
		this.vertices.push(v);
	}  

  
	/**
	 * Add edge to the graph
	 * 
	 * @param {object} edge 
	 */
	addEdge(edge) { 
		this.AdjList.get(edge.src).push(edge.dest); 
		this.AdjList.get(edge.dest).push(edge.src); 
		this.edges.push({'src': edge.src, 'dest': edge.dest});
	} 


	/**
	 * Display the vertex and adjacency list in console
	 * 
	 */
	display() { 

		// Get all vertices 
		const mapKeys = this.AdjList.keys(); 
	
		for (let i of mapKeys)  { 

			// Get the adjacency array for vertex
			const mapValues = this.AdjList.get(i); 
			let str = ""; 
	
			// Iterate over the adjacency list 
			for (let j of mapValues) {
				str += j + " "; 
			}

			console.log(i + " -> " + str); 
		} 
	}

	
	/**
	 * Traverse graph - depth first search
	 * 
	 * @param {string} startingNode
	 */
	dfs(startingNode) { 
		let visited = []; 
		for (let i = 0; i < this.vertices.length; i++) {
			visited[i] = false; 
		}	
		this.dfsUtil(startingNode, visited); 
	} 
	

	/**
	 * Helper function - recursively go through all unvisited vertices
	 * 
	 * @param {string} v 
	 * @param {array} visited 
	 */
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
