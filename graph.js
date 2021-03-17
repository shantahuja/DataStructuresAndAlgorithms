class Node {
  constructor(name) {
    this.name = name;
    this.edgesMap = new Map();
  }

  display() {
    let myString = "Name: " + this.name + "\nEdges: {";

    // for (let key of this.edgesMap) {
    //     console.log(key);
    // }
    // console.log(this.edgesMap.keys().length);
    let iter = this.edgesMap.keys();
    //console.log(iter);

    for (let key of iter) {
      //   console.log(key);

      myString += key + ": " + this.edgesMap.get(key) + ", ";

      // if ((iter.next()).done) {
      //     myString += ", "
      // }
    }

    // myString += this.edgesMap;

    myString += "}\n";

    console.log(myString);
  }
}

class Graph {
  constructor() {
    // this.nodes = [];
    this.nodes = new Map();
  }

  addNode(name) {
    // this.nodes.push(new Node(name));
    this.nodes.set(name, new Node(name));
  }

  addConnection(name1, name2, edgeLength) {
    this.nodes.get(name1).edgesMap.set(name2, edgeLength);

    this.nodes.get(name2).edgesMap.set(name1, edgeLength);

    // for (let i = 0; i < this.nodes.length; i++) {
    //   if (name1 == this.nodes[i].name) {
    //     this.nodes[i].edgesMap.set(name2, edgeLength);
    //   } else if (name2 == this.nodes[i].name) {
    //     this.nodes[i].edgesMap.set(name1, edgeLength);
    //   }
    // }
  }

  display() {
    // for (let i = 0; i < this.nodes.length; i++) {
    //   this.nodes[i].display();
    // }

    for (let key of this.nodes.keys()) {
      this.nodes.get(key).display();
    }
  }

  nearestNeighborAlgo(name1, name2) {
    let walker = this.nodes.get(name1);

    let myString = "";

    let shortestNode = null;

    while (walker.name != name2) {
      myString += walker.name + " -> ";

      for (let key of this.nodes.get(walker.name).edgesMap.keys()) {
        if (key == name2) {
          // walker = this.nodes.get(key);
          shortestNode = key;
          break;
        } else if (shortestNode == null) {
          shortestNode = key;
        } else if (
          this.nodes.get(walker.name).edgesMap.get(shortestNode) >
          this.nodes.get(walker.name).edgesMap.get(key)
        ) {
          shortestNode = key;
        }
      }

      walker = this.nodes.get(shortestNode);
    }
    console.log(myString + walker.name);
  }
}

function main() {
  graph = new Graph();

  graph.addNode("A");
  graph.addNode("B");
  graph.addNode("C");
  graph.addNode("D");
  graph.addNode("E");

  graph.addConnection("A", "B", 1);
  graph.addConnection("A", "D", 4);

  graph.addConnection("A", "E", 2);

  graph.addConnection("B", "C", 1);

  graph.addConnection("B", "D", 3);

  graph.addConnection("B", "E", 7);

  graph.addConnection("C", "D", 4);

  graph.addConnection("D", "E", 5);

  graph.display();
  // console.log(graph);

  // graph.nearestNeighborAlgo("A", "D");
  graph.nearestNeighborAlgo("C", "A");
}

main();
