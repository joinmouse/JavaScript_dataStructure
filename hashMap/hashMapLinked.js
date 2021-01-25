const { handleHashCode } = require('./hashCode')
const { SingleLinkedList } = require('./LinkedList')

// put进去的object = {key: value}
class putValue {
    constructor(key, value) {
        this.key = key
        this.value = value
    }
}

class HashMapLinked {
    constructor() {
        this.map = []
    }

    // put<K, V>
    put(key, value) {
        let position = handleHashCode(key)
        if(this.map[position] === undefined) {
            // 第一次插入, 初始化链表
            this.map[position] = new SingleLinkedList()
        }
        this.map[position].append(new putValue(key, value))
    }

    // get<K>
    get(key) {
        let position = handleHashCode(key)
        // 判断当前位置是否存在元素
        if(this.map[position] === undefined) {
            return false
        }else {
            let currentNode = this.map[position].head
            // 找到node节点
            while(currentNode) {
                if(currentNode.val.key === key) {
                    return currentNode.val.value
                }
                currentNode = currentNode.next
            }
            return false
        }
    }

    // remove<K>
    remove(key) {
        let position = handleHashCode(key)
        if(this.map[position] === undefined) {
            return false
        }else {
            let currentNode = this.map[position].head
            let index = 0
            while(currentNode) {
                // 删除链表对应的位置
                if(currentNode.val.key === key) {
                    // console.log(this.map[position])
                    this.map[position].remove(index)
                }
                // 空链表进行初始化
                if(this.map[position].isEmpty()) {
                    this.map[position] = undefined
                }
                currentNode = currentNode.next
                index += 1
            }
            return false
        }
    }

    getItems() {
        return this.map
    }
}

// 测试 case
const hashmap = new HashMapLinked()
hashmap.put("Donnie", "1111@qq.com")
hashmap.put("ab", "2222@qq.com")
hashmap.put("Ana", "3333@qq.com")
console.log("hashCode: ", handleHashCode("ab"))
console.log("hashCode: ", handleHashCode("Ana"))
console.log(hashmap.getItems())

hashmap.remove("Donnie")
hashmap.remove("Ana")
console.log(hashmap.getItems())
hashmap.put("Ana", "4444@qq.com")
console.log(hashmap.getItems())