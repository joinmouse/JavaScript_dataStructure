/*
* 递归的方式去遍历二叉树
* @params: TreeNode
* 2021/11/17
* joinmouse
*/
type TreeNode = {
    val: string | number;
    left: TreeNode | null;
    right?: TreeNode;
}

function traverse(root: TreeNode) {
    if(root == null) return
    // 前序遍历
    // console.log(root.val)
    traverse(root.left)
    // 中序遍历
    // console.log(root.val)
    traverse(root.right)
    // 后序遍历
    // console.log(root.val)
}