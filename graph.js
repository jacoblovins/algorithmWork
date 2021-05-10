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



    // Traversal: going through/visiting every vertex in the graph
    // There's no root so you need to specify a start point
    // Depth first search Recursive
        // Pass in your starting vertex as the parameter to your function
        // Create a list to store the end result, to be returned at the very end
        // Create an object to store visited vertices
        // Create a helper function which accepts a vertex
            // The helper function should return early if the vertex is empty
            // The helper function shold place the vertex it accepts into the visited object and push that vertex into the results array.
            // Loop over all of the values in the adjacencyList for that vertex
            // If any of those values have not been visited, recursively invoke the helper function with that vertex
        // Invoke the helper funciton with the starting vertex
        // Return the result array

        depthFirstRecursive(start){
            const result = [];
            const visited = {};
            const adjacencyList = this.adjacencyList;

            (function dfs(vertex){
                if(!vertex) return null;
                visited[vertex] = true;
                result.push(vertex);
                adjacencyList[vertex].forEach(neighbor => {
                    if(!visited[neighbor]){
                        return dfs(neighbor)
                    }
                });
            })(start);
            return result;
        }

        // Depth First Search Iterative:


}

const g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")

console.log(g.depthFirstRecursive("A"))

// g.removeVertex("another")

// console.log(g);