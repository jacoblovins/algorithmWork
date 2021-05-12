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