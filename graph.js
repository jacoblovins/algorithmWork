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

    // DFS Iterative
        // The function should accept a starting node
        // Creat a stack to help keep track of vertices (use a list/array)
        // Create a list to store the end result to be returned at the end
        // Create an object to store visited vertices
        // Add the starting vertex to the stack and mark it visited
        // While the stack has something in it:
            // Pop the next vertex from the stack
            // If that vertex hasn't been visited yet:
                // Mark it as visited
                // Add it ot the result list
                // Push all of its neighbors into the stack
        // Return the result array

    depthFirstIterative(start){
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;
        while(stack.length){
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            });
        }
        return result;
    }


    // Function should accept a starting vertex
    // Create a queue and place the starting vertex in it
    // Create an array to store the nodes visited
    // Create an object to store nodes visited
    // Mark the starting vertex as visited
    // Loop as long as there is anything in the queue
        // Remove the first vertex from the queue and push it into the array that stores nodes visited
        // Loop over each vertex in the adjacency list for the vertex you are visiting
            // If it is not inside the object that stores nodes visited, mark it as visited and enqueue that vertex
    // Return the array of visited nodes

    breadthFirst(start){

    }

}


const g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log(g.depthFirstIterative("A"));
