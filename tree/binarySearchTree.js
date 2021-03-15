// 二叉搜索树
class Node {
    constructor(element) {
        this.element = element
        this.left = null
        this.right = null
    }  
}

class BST {
    // 定义一个栈
    constructor(array) {
        let [root, ...rest] = array
        this.queue = [root]
    }
    // createTree(stack, rest) {
    //     while(stack.length > 0){
    //         let top = qu.pop()
    //         let node = new Node(top)
    //         if(rest.length >= 2) {
    //             let left = rest.unshift()
    //             let right = rest.unshift()
    //         }
    //         stack.push(left)
    //         stack.push(right)
    //     }
    // }
}

let array = [3, 9, 20, null, null, 15, 7]
/*   3 
*   / \
*  9  20
*     / \
*    15  7
*/