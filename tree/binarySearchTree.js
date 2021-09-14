// 二叉搜索树
class Node {
  constructor(element) {
    this.element = element;
    this.left = null;
    this.right = null;
  }
}

// binary search tree -> 二叉搜索树(指针存储)
class BST {
  constructor() {
    this.root = null;
  }
  insert(element) {
    let node = new Node(element);
    if (this.root === null) {
      this.root = node;
    } else {
      let temp = this.root;
      while (temp !== null) {
        if (element < temp.element) {
          if (temp.left === null) {
            temp.left = node;
            return;
          } else {
            temp = temp.left;
          }
        } else {
          if (temp.right === null) {
            temp.right = node;
            return;
          } else {
            temp = temp.right;
          }
        }
      }
    }
  }
  // 获取二叉树最大高度, 递归妙用
  getHeight(root) {
    if (root === null) {
      return 0;
    }
    let left_height = this.getHeight(root.left);
    let right_height = this.getHeight(root.right);
    let max = Math.max(left_height, right_height);
    // 1是root
    return max + 1;
  }
  // 获取二叉树的最大值, 递归妙用
  getMaxElement(root) {
    if (root === null) {
      return -1;
    }
    let leftMaxElement = this.getMaxElement(root.left);
    let rightMaxElement = this.getMaxElement(root.right);
    let element = root.element;
    let max = Math.max(leftMaxElement, rightMaxElement, element);
    return max;
  }
}

let array = [6, 3, 19, 5, 6, 2, 1, 7];
let bst = new BST();
for (let i = 0; i < array.length; i++) {
  bst.insert(array[i]);
}
console.log("max height is: ", bst.getHeight(bst.root));
console.log("max element is: ", bst.getMaxElement(bst.root));
