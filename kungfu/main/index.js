const SHARE = require('./share');

const recursive = require("recursive-readdir");
const TreeNode = require('./components/TreeNode');
const RootContentBuilder = require('./components/RootContentBuilder');
const LeafContentBuilder = require('./components/LeafContentBuilder');
const DirContentBuilder = require('./components/DirContentBuilder');

const writeContent = require('./actions/writeContent')

const SOURCE_DIR = SHARE.SOURCE_DIR;
const PATH_DIVIDER = '/';


(async function() {
    const filePaths = (await scanFilesFolder(SOURCE_DIR))
                    .map(filePath => filePath.replace(SOURCE_DIR + PATH_DIVIDER, ""));
    
    const pathTree = toTree(filePaths);

    // const node = pathTree.toNode('boolean').toNode('boolean.java');
    // const node = pathTree.toNode('boolean');
    const node = pathTree;
    let content = await buildContent(node);

    writeContent('kungfu.md', content);

    // console.log(content);
    // console.log(node.fullPath)
    // console.log('files', filePaths);
    // console.log('tree', pathTree)

}());



/**
 * @param {String} path 
 * @return {Promise<string>}
 */
function scanFilesFolder(path) {
    return new Promise((resolve, reject) => {
        recursive(path, function (err, files) {
            // `files` is an array of file paths
            resolve(files);
        })
    })
}

/**
 * 
 * @param {String[]} filePaths 
 * @return {TreeNode}
 */
function toTree(filePaths) {
    const tree = new TreeNode('');

    const pathChunks = filePaths.map(filePath => {
        return filePath.split(PATH_DIVIDER);
    });
    
    pathChunks.map((pathChunk) => {
        pathChunk.reduce((node, fileName) => {
                            if (!node.hasNode(fileName)) {
                                node.addNodeByValue(fileName);
                            }
                            return node.toNode(fileName);
                        }, tree);
    });
    return tree;
}

/**
 * @param {TreeNode} node 
 * @return {String}
 */
async function buildContent(node) {
    let contentBuilder = createContentBuilder(node);

    let str = await contentBuilder.prefix();

    str += await contentBuilder.content();
    for(const child of node.nodes()) {
        str += await buildContent(child)
    }

    str += await contentBuilder.postfix();
    return str;
}

/**
 * @param {TreeNode}
 * @return {ContentBuilder}
 */
function createContentBuilder(node) {

    if (!node.toParent()) {
        return new RootContentBuilder(node);
    }
    if (node.isLeaf) {
        return new LeafContentBuilder(node);
    } 
    return new DirContentBuilder(node);
    // throw new Error('Not found ContentBuilder');
}