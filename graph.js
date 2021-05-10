// This will be an undirected graph
// We will store it in an Adjacency List

class Graph {
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        this.adjacencyList[vertex] = [];
    }

    // find vertex1 in the list and push vertex2 to it's array
    // find vertex2 and push vertex1 go it's array
    addEdge(v1, v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }

    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }
}

const g = new Graph();

g.addVertex("hello");
g.addVertex("goodbye");
g.addVertex("something");
g.addVertex("another");
g.addEdge("hello", "goodbye")
g.addEdge("hello", "another")
g.addEdge("goodbye", "something")
g.addEdge("another", "something")
g.addEdge("hello", "something")

g.removeVertex("another")

console.log(g);