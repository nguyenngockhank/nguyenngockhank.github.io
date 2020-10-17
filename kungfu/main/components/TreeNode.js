class TreeNode {
    // use value as key
    constructor(value, level = 1, parent = null) {
        this._level = level;
        this._parent = parent;
        this._value = value;
        this._nodes = { };
    }

    get level() {
        return this._level;
    }

    get value() {
        return this._value;
    }

    get isLeaf() {
        return Object.keys(this._nodes).length === 0 
                && this._nodes.constructor === Object;
    }

    nodes() {
        let result = [];
        for(const key in this._nodes) {
            result.push(this.toNode(key));
        } 
        return result;
    }

    hasNode(value) {
        return !!this._nodes[value];
    }

    toNode(value) {
        if (this.hasNode(value)) {
            return this._nodes[value];
        }
    }

    toParent() {
        return this._parent;
    }

    addNodeByValue(value) {
        const newNode = new TreeNode(value, this._level + 1, this);
        this.addNode(newNode);
    }

    addNode(node) {
        this._nodes[node.value] = node;
    }

    get fullPath() {
        let chunks = [];
        for(let node = this; node !== null;  node = node.toParent()) {
            chunks.push(node.value);
        }
        chunks.reverse();
        return chunks.join('/');
    }
}

module.exports = TreeNode;