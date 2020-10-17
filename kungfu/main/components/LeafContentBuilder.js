const readContent = require('../actions/readContent');

const ContentBuilder = require('./ContentBuilder');

class LeafContentBuilder extends ContentBuilder {

    async prefix() {
        const fileName = this._node.value;

        const extension = fileName.split('.').pop();
        return `${this._startTabLine(extension)}\n${this._startSourceLine(extension)}\n`;
    }

    async content() {
        return await readContent(this._node);
    }

    async postfix() {
        return `\n${this._endSourceLine()}\n${this._endTabLine()}\n`;
    }

    _startTabLine(extension) {
        return `::: tab ${extension.toUpperCase()}`;
    }

    _startSourceLine(extension) {
        return "```" + extension.toLowerCase();
    }

    _endSourceLine() {
        return "```";
    }

    _endTabLine() {
        return ":::";
    }

}

module.exports = LeafContentBuilder;