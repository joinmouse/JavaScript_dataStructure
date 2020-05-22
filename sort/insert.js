function insert(A, i, x) {
    // p 指向下一个需要比较的元素
    // p+1 指向空位
    let p = i - 1
    while(p >= 0 && A[p] > x) {
        A[p+1] = A[p]
        p -= 1
    }
    A[p+1] = x
}

function insertion_sort(array) {
    for(let i = 1; i < array.length; i++) {
        insert(array, i, array[i])
    }
}

const A = [5, 8, 1, 4, 6, 11, 90, 23]
insertion_sort(A)
console.log(A)