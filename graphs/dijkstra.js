// Light PseudoCode
// Every time we look to visit a new node, we pick the node with the smallest known distance to visit first
// Once we've moved to the node we're going to visit, we look at each of its neighbors
// For each neighboring node, we calculate the distance by summing the total edges that lead to the node we're checking from the starting node
// If the new total distance to a node is less than the previous total, we store the new shorter distance for that node.

// Full PseudoCode
// -This funciton should accept a starting and ending vertex
// -Create an object (we'll call it distances) and set each key to be every vertex in the adjacency list 
// with a value of infinity, except for the starting vertex which shoulld have a value of 0
// -After setting a value in the distances object, add each vertex with a priority of Infinity to the priority queue, except the starting vertex, 
// which should have a priority of 0 because that's where we begin
// -Create another object called previous and set each key to be every vertex in the adjacency list with a value of null
// -Start looping as long as there is anything in the priority queue
// Dequeue a vertex from the priority queue
// If that vertex is the same as the ending vertex...we are done!
// Otherwise loop through each value in the adjacency list at that vertex
    // Calculate the distance to that vertex from the starting vertex
    // If the distance is less than what is currently stored in our distances object:
        // Update the distances object whe new lower distance
        // Update the previous object to contain that vertex
        // Enqueue the vertex with the total distance from the start node\

        

class PriorityQueue {
    constructor(){
        this.values = [];
    }
    enqueue(val, priority) {
        let newNode = new Node(val, priority)
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length -1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIndex = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIndex];
            if(element.priority >= parent.priority) break;
            this.values[parentIndex] = element;
            this.values[idx] = parent;
            idx = parentIndex;
        }
    }

    dequeue(){
        const min = this.values[0];
        let end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }
    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];

        while(true){
            let leftChildIdx = (2 * idx) + 1;
            let rightChildIdx = (2 * idx) + 2;
            let leftChild, rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority){
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if((swap === null && rightChild.priority < element.priority) || (swap !== null && rightChild.priority < leftChild.priority)){
                    swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority
    }
}
        
         
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
    Dijkstra(start, finish){
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let smallest;
        let path = []; // to return at end

        // Buildup initial state
        for(let vertex in this.adjacencyList){
            if(vertex === start){
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0)
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity)
            }
            previous[vertex] = null;
        }

        // As long as there is something to visit
        while(nodes.values.length){
            smallest = nodes.dequeue().val;
            if(smallest === finish){
                // we are done and we need to build path to return at end
                while(previous[smallest]){
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if(smallest || distances[smallest] !== Infinity){
                for(let neighbor in this.adjacencyList[smallest]){
                    // find neighboring node
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    // calculate new distance to neighboring node
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    if(candidate < distances[nextNeighbor]){
                        // updating new smallest distance to neighbor
                        distances[nextNeighbor] = candidate;
                        // updating how we got to neighbor
                        previous[nextNeighbor] = smallest;
                        // enqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }
       return path.concat(smallest).reverse();
    }
}



const graph = new WeightedGraph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

console.log(graph.Dijkstra("A", "E"));
