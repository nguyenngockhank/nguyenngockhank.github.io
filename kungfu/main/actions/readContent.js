const fs = require('fs'); 
const SHARE_VARS = require('../share');
const SOURCE_DIR = SHARE_VARS.SOURCE_DIR;

/**
 * @param {TreeNode} node 
 * @return {Promise<string>}
 */
function readContent(node) {
    let path = SOURCE_DIR + node.fullPath;

    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', function (err, data) {
            if (err) {
                reject(err);
                return;
            }
            resolve(data);
        });
    });
}


module.exports = readContent