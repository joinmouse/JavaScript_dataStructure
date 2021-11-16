// 前序遍历
// 入栈: 右 ——> 左
// 出栈: 中 ——> 左 ——> 右
let preorderTraversal = function(root, res = []) {
    if(!root) return res
    const stack = [root]
    let current = null
    while(stack.length) {
        current = stack.pop()
        res.push(current.val)
        current.right && stack.push(current.right)
        current.left && stack.push(current.left)
    }
    return res
}

// 中序遍历
// 入栈: 左 ——> 右
// 出栈: 左 ——> 中 ——> 右
let inorderTraversal = function(root, res = []) {
    if(!root) return res
    const stack = [root]
    let current = null
    while(stack.length) {
        if(current.left) {
            // left
            stack.push(current.left)
        }else {
            // 中
            current = stack.pop()
            res.push(current.val)
            // right
            if(current.right) {
                current = stack.pop()
                res.push(current.val)
                current.right && stack.push(current.right)
            }
        }
    }
    return res
}

// 后序遍历
// 入栈: 左 ——> 右
// 出栈: 中 ——> 右 ——> 左 结果翻转
let postorderTraversal = function(root, res = []) {
    if(!root) return res
    const stack = [root]
    let current = null
    do {
        current = stack.pop()
        res.push(current.val)
        current.left && stack.push(current.left)
        current.right && stack.push(current.right)
    }while(stack.length)
    return res.reverse()
}