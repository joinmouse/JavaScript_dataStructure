function dfs(tree, nodeList) {
    if(tree) {
        nodeList.push(tree)
        console.log(nodeList)
        var children = tree.children
        for (var i = 0; i < children.length; i++) {
            dfs(children[i], nodeList);
        }
    }
    return nodeList
}

var root = document.getElementById('root')
console.log('dfs_recursive start ...')
console.log(dfs(root, []))
console.log('dfs_recursive end ...')