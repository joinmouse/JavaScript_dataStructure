/*
* 数组拍平: 实现Array.prototype.flat()
* 参考: https://segmentfault.com/a/1190000021366004
*/
var arr = [1, 2, [3, 4, 5, 6, [7, 8, 9]]]
// arr.flat()

function flatDeep(array, d = 1){
    if( d > 0) {
        return array.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d-1) : val), [])
    }else {
        return array.slice()
    }
}
let arr1 = flatDeep(arr)
console.log(arr1)