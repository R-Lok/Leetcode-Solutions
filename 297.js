

function serialize(root) {

    let result = ''

    function dfs(root) {

        if (!root) {
            if (result.length > 0) result += ','
            result += 'N'
            return
        }

        if (result.length > 0) result += ','
        result += root.val

        dfs(root.left)
        dfs(root.right)
    }
    dfs(root)

    return result
}

function deserialize(data) {

    const nodes = data.split(',')
    let index = 0

    function dfs() {

        if (nodes[index] === 'N') {
            index++
            return null
        }

        const node = new TreeNode(Number(nodes[index++]))

        node.left = dfs()
        node.right = dfs()

        return node
    }

    return dfs()
}   
