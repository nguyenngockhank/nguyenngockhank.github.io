const fs = require('fs'); 

const SHARE_VARS = require('../share')

module.exports = function(destFile, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(`${SHARE_VARS.BUILD_DIR}/${destFile}`, content, function(err) {
            if(err) {
                return reject(err);
            }
            resolve();
        });
    })
}