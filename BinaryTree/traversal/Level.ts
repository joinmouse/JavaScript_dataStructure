/*
* 二叉树的层序遍历
*     1
*    / \
*   2   3
*  / \
* 4   5
* =>
* results = [
*    [1],
*    [2, 3],
*    [4, 5]
* ]
* 队列: 队列先进先出，符合一层一层遍历的逻辑，而是用栈先进后出适合模拟深度优先遍历也就是递归的逻辑。(层序遍历方式就是图论中的广度优先遍历)
*/

type TreeNode = {
    val: string | number;
    left: TreeNode | null;
    right?: TreeNode;
}

function levelOrder(root: TreeNode | null) {
    if(root == null ) return null
    let res = [], queue = []
    queue.push(root)
    while (queue.length > 0) {
        let length = queue.length
        let curLevel = []
        for(let i=0; i<length; i++) {
            let node = queue.shift()
            curLevel.push(node.val)
            // 存放当前下一个节点
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
        res.push(curLevel)
    }
    return res
}