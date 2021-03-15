let graph = {
    "A": ["B", "C"],
    "B": ["A", "C", "D"],
    "C": ["A", "B", "D", "E"],
    "D": ["B", "C", "E", "F"],
    "E": ["C", "D"],
    "F": ["D"]
}

function BFS(graph, s) {
    let set = new Set()
    let parent = new Map()
    let queue = []
    let result = []
    queue.push(s)
    set.add(s)
    parent.set(s, null)
    while(queue.length > 0) {
        let vertex = queue.shift()  //出队列
        let nodes = graph[vertex]
        for(let key in nodes) {
            if(!set.has(nodes[key])) {
                queue.push(nodes[key])
                set.add(nodes[key])
                parent.set(nodes[key], vertex)
            }
        }
        result.push(vertex)
    }
    return {
        result,
        parent
    }
}
let res = BFS(graph, "E")
console.log(res.result)
console.log(res.parent)