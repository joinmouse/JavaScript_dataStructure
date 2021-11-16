function dfs(tree) {
    var nodeList = []
    if(tree) {
        var stack = []
        stack.push(tree)
        while(stack.length > 0) {
            var childrenItem = stack.pop()
            nodeList.push(childrenItem)
            console.log(nodeList)
            var childrenList = childrenItem.children
            for (var i = childrenList.length - 1; i >= 0; i--) {
                stack.push(childrenList[i])
            }
        }
    }
    return nodeList
}

var root = document.getElementById('root')
console.log('dfs start ...')
console.log(dfs(root))
console.log('dfs end ...')