/*
* 实现单链表
* time: 2020/12/26
* author: joinmouse
*/

// 创建节点
class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}

// 单向链表
class SingleLinkedList {
    constructor() {
        this.head = null
    }
    // 添加节点, 时间复杂度O(n)
    add(element) {
        let newNode = new Node(element)
        //边界处理: 链表为空的情况
        if(this.head === null) {
            this.head = newNode
            return
        }
        // 遍历到最后一个节点，然后插入, 最后一个节点的next指向的是null
        let currentNode = this.head
        while(currentNode.next !== null) {
            currentNode = this.head.next
        }
        currentNode.next = newNode
    }
    // 链表头新增元素, 时间复杂度O(1)
    addFirst(element) {
        let newNode = new Node(element)
        let currentNode = this.head //this.head为空的时候是null, 不为空就是单向的链表
        this.head = newNode
        newNode.next = currentNode
    }

    // 查询操作，时间复杂度O(n)
    get(index) {
        if(index < 0) {
            console.error("需要传入的index>=0哦~~")
            return null
        }
        let currentIndex = 0
        let currentNode = this.head
        while(currentIndex < index) {
            currentNode = currentNode.next
            if(currentNode === null) {
                console.error('超出链表最大限制~~')
                return null
            }
            currentIndex++
        }
        return currentNode;
    }

    // 插入
    insert(index, element){
        let newNode = new Node(element)
        // 获取index对应的节点
        let insertNode = this.head
        let insertIndex = 0
        while(insertIndex < index) {
            insertNode = insertNode.next;
            insertIndex++
        }
        newNode.next = insertNode.next
        insertNode.next = newNode;
        return this.head
    }

    // 删除
    remove(index) {
        // 删掉的是头节点
        if(index === 0) {
            this.head = this.head.next
            return
        }
        // 非头节点
        let deleteNode = this.head
        let deleteIndex = 0
        while(deleteIndex < index-1) {
            deleteNode = deleteNode.next
            deleteIndex += 1
        }
        deleteNode.next = deleteNode.next.next
    }

    // 删除节点从倒数开始
    removeNthFromEnd(index) {
        let last = this.getLength() - index
        this.remove(last)
    }

    // 获取链表长度
    getLength() {
        let currentNode = this.head
        let length = 0
        while(currentNode !== null) {
            length += 1
            currentNode = currentNode.next
        }
        return length
    }


    // 打印出链表元素
    display() {
        console.log(this.head)
    }
    displayArray() {
        let arr = []
        let node = this.head
        while(node !== null) {
            arr.push(node.element)
            node = node.next;
        }
        console.log(arr)
    }
}

module.exports = SingleLinkedList