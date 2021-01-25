const assert = require("assert")

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

// 实现一个单向链表
class SingleLinkedList {
    constructor() {
        this.head = null;
        this.length = 0
    }

    // 链表尾部添加节点
    append(val) {
        const newNode = new Node(val)
        if(this.isEmpty()) {
            this.head = newNode
        }else {
            // 遍历到最后节点添加
            let currentNode = this.head
            while(currentNode.next) {
                currentNode = currentNode.next
            }
            currentNode.next = newNode
        }
        this.length += 1;
        return true
    }

    // 插入节点
    insert(position, val) {
        // 边界处理
        if(Number.isInteger(position) && position > -1 && position < this.size()) {
            const newNode = new Node(val)
            let currentNode = this.head
            // 链表头结点插入
            if(position === 0) {
                this.head = newNode
                newNode.next = currentNode
            }else {
                // 1->2->3->5->6, 插入(3, 4)
                let index = 0
                let prev = null
                while(index < position) {
                    prev = currentNode
                    currentNode = currentNode.next
                    index += 1
                }
                prev.next = newNode
                newNode.next = currentNode
            }
            this.length += 1
            return true
        }else {
            console.error(new Error(position + " postion insert involid"))
        }
    }

    //删除节点
    remove(position) {
        if(Number.isInteger(position) && position > -1 && position < this.size()) {
            let currentNode = this.head
            if(position === 0) {
                this.head = currentNode.next
            }else {
                let index = 0;
                let prev = null
                while(index < position) {
                    prev = currentNode
                    currentNode = currentNode.next
                    index += 1
                }
                prev.next = currentNode.next
            }
            this.length -= 1
            return true
        }else {
            console.error(new Error(position + " postion insert involid"))
        }
    }

    isEmpty() {
        return this.length === 0
    }

    size() {
        return this.length
    }

    toString() {
        let arr = []
        let currentNode = this.head
        while(currentNode) {
            arr.push(currentNode.val)
            currentNode = currentNode.next
        }
        console.log(arr)
    }
}

// 测试 case
/*
let singleLinkedList = new SingleLinkedList()
singleLinkedList.append("a")
singleLinkedList.append("b")
singleLinkedList.append("c")
singleLinkedList.append("d")
singleLinkedList.append("e")
singleLinkedList.append("f")
singleLinkedList.toString()
singleLinkedList.insert(3, "m")
singleLinkedList.insert(4, "n")
singleLinkedList.toString()
singleLinkedList.remove(3)
singleLinkedList.remove(3)
singleLinkedList.remove(11)
singleLinkedList.toString()
*/

module.exports = {
    SingleLinkedList
}