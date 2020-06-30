/*
* JavaScript实现单链表
* 时间: 2020/6/2
* author: joinmouse
*/
function Node(element) {
    this.element = element  // 当前节点元素
    this.next = null        // 指向下一个节点
}

// LinkedList类
function LinkedList() {
    this.head = new Node('head')
}

// 查找给定的节点
LinkedList.prototype.find = function(item) {
    let currentNode = this.head
    while(currentNode.element != item) {
        // 往下依次沿着链表查找
        currentNode = currentNode.next
    }
    return currentNode
}

// 显示链表所有的元素
LinkedList.prototype.display = function() {
    let currentNode = this.head
    while(currentNode.next !== null) {
        console.log(currentNode.element)
        currentNode = currentNode.next
    }
}

// 插入目标节点
LinkedList.prototype.insert = function(newElement, item) {
    let newNode = new Node(newElement)
    let currentNode = this.find(item)
    // 先让新节点的下一个指向current节点的下一个
    // 再让current节点的指针指向新节点
    newNode.next = currentNode.next
    currentNode.next = newNode
}

