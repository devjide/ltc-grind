/* (https://bigfrontend.dev/problem/create-a-simple-store-for-DOM-node) */

class NodeStore {
  constructor() {
    this.store = {};
    this.idCounter = 0;
    this.nodeKey = "nodeStoreKey";
  }

  _getNodeId(node) {
    if (!node[this.nodeKey]) {
      node[this.nodeKey] = ++this.idCounter;
    }
    return node[this.nodeKey];
  }

  set(node, value) {
    const id = this._getNodeId(node);
    this.store[id] = value;
  }

  get(node) {
    const id = node[this.nodeKey];
    return this.store[id];
  }

  has(node) {
    const id = node[this.nodeKey];
    return id in this.store;
  }

  delete(node) {
    const id = node[this.nodeKey];
    if (id in this.store) {
      delete this.store[id];
    }
  }
}
