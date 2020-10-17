class ContentBuilder {

    constructor(node) {
        this._node = node;
    }

    async prefix() {
        return '';
    }

    async content() {
        return '';
    }

    async postfix() {
        return '';
    }

}

module.exports = ContentBuilder;