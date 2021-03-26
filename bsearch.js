/* 二分搜索 */
function bsearch(array, num) {
    let l = 0  //查找范围左边界
    let r = array.length-1  //查找范围右边界
    let guess
    while(l <= r) {
        guess = Math.floor((l+r)/2)
        // *循环不变式
        if(num === array[guess]) return guess
        else if(num > array[guess]) l = guess+1
        else r = guess-1
    }
    return -1
}

// 测试
let arr = [3, 5, 19, 22, 25, 33, 45, 47, 57, 66, 71, 78]

console.log(bsearch(arr, 2))
console.log(bsearch(arr, 88))
console.log(bsearch(arr, 68))
console.log(bsearch(arr, 22))