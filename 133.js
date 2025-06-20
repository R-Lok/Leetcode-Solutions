/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    
    const cloned = new Map()

    return dfs(node, cloned)

}

var dfs = function(node, cloned) {

    if(node === null) {
        return null
    }

    if(cloned.has(node)) {
        return cloned.get(node)
    }

    const copy = new _Node(node.val)

    cloned.set(node, copy)

    for(const n of node.neighbors) {
        copy.neighbors.push(dfs(n, cloned))
    } 

    return copy
}