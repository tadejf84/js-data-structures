/*
* graphs
* graph consists of a set of vertices and a set of edges
* edges connect vertices
* a vertex can also have weight, also called cost
*/

class Graph { 

    constructor(noOfVertices) { 
        this.noOfVertices = noOfVertices; 
        this.AdjList = new Map(); 
    } 
  
    // add vertex to the graph 
	addVertex(v) { 
		this.AdjList.set(v, []); 
	}  

	// add edge to the graph 
	addEdge(v, w) { 
		this.AdjList.get(v).push(w); 
		this.AdjList.get(w).push(v); 
	} 

	// display the vertex and adjacency list - to console
	displayGraph() { 
		// get all the vertices 
		const get_keys = this.AdjList.keys(); 
	
		// iterate over the vertices 
		for (let i of get_keys)  { 
			const get_values = this.AdjList.get(i); 
			var conc = ""; 
	
			// iterate over the adjacency list 
			for (let j of get_values) {
				conc += j + " "; 
			}

			console.log(i + " -> " + conc); 
		} 
	}

} 
