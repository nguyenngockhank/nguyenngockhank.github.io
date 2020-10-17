
const ContentBuilder = require('./ContentBuilder');

class RootContentBuilder extends ContentBuilder {

    async prefix() {
        return `# Kungfu\n`;
    }

    async content() {
        return "Let's go!!!\n"
    }

    async postfix() {
        return `\n*Thanks!*`;
    }
}

module.exports = RootContentBuilder;