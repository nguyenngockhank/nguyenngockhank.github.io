
const _ = require('lodash')

const ContentBuilder = require('./ContentBuilder');

class DirContentBuilder extends ContentBuilder {

    constructor(node) {
        super(node);
        this._hasLeaf = this._checkContainLeaf();
    }

    _checkContainLeaf() {
        for(const node of this._node.nodes()) {
            if(node.isLeaf) {
                return true;
            }
        }
        return false;
    }

    async prefix() {
        const level = this._node.level;
        const value = this._node.value;
        return "\n" + _.padStart('', level, '#') + ` ${value}\n`;
    }

    async content() {
        if (this._hasLeaf) {
            return ":::: tabs\n"
        }
        return '';
    }

    async postfix() {
        if (this._hasLeaf) {
            return '::::\n'
        }
        return "\n";
    }
}

module.exports = DirContentBuilder;