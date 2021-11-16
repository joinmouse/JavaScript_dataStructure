function BFS(tree) {
    var nodes = []
    if(tree != null) {
        var queue = []
        queue.unshift(tree)
        console.log(queue)
        while (queue.length !== 0) {
            // 取出第一个元素
            var item = queue.shift()
            nodes.push(item)
            var children = item.children
            console.log(children)
            // 将节点下的子元素都push到queue然后 依次push到nodes数组中
            for (var i = 0; i < children.length; i++) {
                queue.push(children[i])
            }
        }
    }
    return nodes
}

var root = document.querySelector('#root')
console.log('bfs start ....')
console.log(BFS(root))
console.log('bfs end ....')