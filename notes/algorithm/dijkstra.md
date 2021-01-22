# Dijkstra's algorithm

```js
// data structure
var graph = {
    start: {
        a: 6,
        b: 2,
    },
    a: {
        fin: 1,
    }, 
    b: {
        a: 3,
        fin: 5,
    },
    fin: {}
};

// 2nd
var costs = {
    a: 6,
    b: 2,
    fin: undefined,
}

// 3rd
var parents = {
    a: 'start',
    b: 'start',
    fin: null,
}

```

```ts
type NodeName = string;
type Weight = number; // 
type Neighbors = Record<NodeName, Weight>;
type Graph = Record<NodeName, Neighbors>;

class LowestCostFinder {

    private processed : NodeName[] = [];
    private costs : Record<NodeName, Weight> = {};
    private parents : Record<NodeName, NodeName | null> = {};

    constructor(private graph: Graph, startNode: NodeName, endNode: NodeName) {
        this.initCosts(startNode, endNode)
        this.initParents(startNode, endNode)
    }

    private initCosts(startNode: NodeName, endNode: NodeName) {
        const neighbors = this.graph[startNode];
        const costs = {}
        for (const node in neighbors) {
            costs[node] = neighbors[node]; // copy weight
        }
        this.costs = costs;
    }

    private initParents(startNode: NodeName, endNode: NodeName) {
        const neighbors = this.graph[startNode];
        const parents = {}
        for (const node in neighbors) {
            parents[node] = startNode; 
        }
        parents[endNode] = null; // add to last
        this.parents = parents;
    }

    private findLowestCostNode() : NodeName | null {
        let lowestCost = Infinity;
        let lowestCostNode = null;

        for (const node in this.costs) {
            const cost : Weight | undefined = this.costs[node];

            if (cost < lowestCost && !this.processed.includes(node)) {
                lowestCost = cost;
                lowestCostNode = node;
            }
        }
        return lowestCostNode;
    }

    execute() {
        for(let node = this.findLowestCostNode(); node != null; node = this.findLowestCostNode()) {
            const cost = this.costs[node];
            const neighbors = this.graph[node];

            // tranverse neighbors 
            for (const n in neighbors) {
                const newCost = cost + neighbors[n];
                const currentCost = this.costs[n]

                if (currentCost === undefined || currentCost > newCost) {
                    this.costs[n] = newCost;
                    this.parents[n] = node;
                }
            }

            this.processed.push(node);
        }

        return this.parents; 
    }
}
```