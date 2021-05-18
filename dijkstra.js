class WeightedGraph{
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = [];
        } 
    }

    addEdge(v1, v2, weight){
        this.adjacencyList[v1].push({node: v2, weight}); // weight is being destructured. It is actually {node: v2, weight: weight}
        this.adjacencyList[v2].push({node: v1, weight});
    }

}

class PriorityQueue{
    constructor(){
        this.values = [];
    }
    enqueue(val, priority){
        this.values.push({val, priority});
        this.sort();
    };
    dequeue(){
        return this.values.shift();
    };
    sort(){
        this.values.sort((a, b) => a.priority - b.priority);
    };

}

// Every time we look to visit a new node, we pick the node with the smallest known distance to visit first
// Once we've moved to the node we're going to visit, we look at each of its neighbors
// For each neighboring node, we calculate the distance by summing the total edges that lead to the node we're checking from the starting node
// If the new total distance to a node is less than the previous total, we store the new shorter distance for that node.




const graph = new WeightedGraph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B", 9);
graph.addEdge("A", "C", 5);
graph.addEdge("B", "C", 7);

console.log(graph.adjacencyList)





/*
    Instead of just an array, we need to store the vertex and the weight of the edge so we 
    will store objects with both properties inside an arrray.

    {
        "A": [{node: "B", weight: 10}]
    }

*/