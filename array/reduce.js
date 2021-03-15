// reduce语法: reduce(callback, initialValue)
// 参考文档: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

// 累加数组的value
let array = [0, 1, 2, 3, 4]
let result = array.reduce((acc, cur) => acc + cur, 10)
console.log(result)

// 累加对象数组的value
let arrayObj = [
    {x: 0},
    {x: 1}, 
    {x: 2}, 
    {x: 3},
    {x: 4}
]
let resObj = arrayObj.reduce((acc, cur) => acc + cur.x, 10)
console.log(resObj)

// 二维数组转一维
let flatArray = [[0, 1], [2, 3], [4, 5]].reduce((acc, cur) => acc.concat(cur), [])
console.log(flatArray)

// 计算数组元素出现次数
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']
let countedNames = names.reduce((allNames, name) => {
    if(name in allNames) {
        allNames[name] += 1
    }else {
        allNames[name] = 1
    }
    return allNames
}, {})
console.log("countedNames is:", countedNames)

// 数组去重
let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
let myOrderedArray = myArray.reduce((acc, cur) => {
    if(!acc.includes(cur)) {
        acc.push(cur)
    }
    return acc
}, [])
console.log("去重后的数组是: ", myOrderedArray)