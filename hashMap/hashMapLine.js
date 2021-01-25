const { handleHashCode } = require('./hashCode')

// put进去的object = {key: value}
class putValue {
    constructor(key, value) {
        this.key = key
        this.value = value
    }
}

// 实现hashMapLine
class HashMapLine {
    constructor() {
        this.map = []
    }

    // put元素
    put(key, value) {
        // 1、获取位置
        let position = handleHashCode(key)
        // 2、position位置上的值不为undefined、null
        while(this.map[position] !== undefined && this.map[position] !== null) {
            position += 1
        }
        // 3、插入值
        this.map[position] = new putValue(key, value)
    }

    // get元素
    get(key) {
        let position = handleHashCode(key)
        // 1、判断position位置的元素是否存在
        while(this.map[position] !== undefined) {
            // 2、判断position位置的key相等就返回value, 否则+1
            if(this.map[position].key === key) {
                return this.map[position].value
            }else {
                position += 1
            }
        }
        return false
    }

    // remove元素
    remove(key) {
        let position = handleHashCode(key)
        // 1、判断position位置的元素是否存在
        while(this.map[position] !== undefined) {
            // 2、判断position位置的key相等就将postion置位null, 否则+1
            if(this.map[position].key === key) {
                this.map[position] = null
                return true
            }else {
                position += 1
            }
        }
        return false
    }

    getItems() {
        return this.map
    }
}


// 测试 case
const hashmap = new HashMapLine()
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