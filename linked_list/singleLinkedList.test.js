const SingleLinkedList = require('./singleLinkedList')

// 测试代码
let singleList = new SingleLinkedList()
// 添加操作
console.log('---- add操作 ----')
singleList.add('1')
singleList.add('2')
singleList.addFirst('3')
singleList.displayArray()
// get-获取操作
console.log('---- get操作 ----')
let currentNode1 = singleList.get(-10)
console.log("currentNode1: " + currentNode1)
let currentNode2 = singleList.get(1)
console.log("currentNode2: " + currentNode2)
let currentNode3 = singleList.get(10)
console.log("currentNode3: " + currentNode3)
// insert-插入节点
console.log('---- insert操作 ----')
singleList.insert(2, '11')
singleList.displayArray()
// delete-操作
console.log('---- delete操作 ----')
singleList.delete(0)
singleList.displayArray()