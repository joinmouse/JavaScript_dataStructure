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
    let stack = []
    let result = []
    stack.push(s)
    set.add(s)
    while(stack.length > 0) {
        let vertex = stack.pop()  //出队列
        let nodes = graph[vertex]
        for(let key in nodes) {
            if(!set.has(nodes[key])) {
                stack.push(nodes[key])
                set.add(nodes[key])
            }
        }
        result.push(vertex)
    }
    return result
}
let result = BFS(graph, "E")
console.log(result)