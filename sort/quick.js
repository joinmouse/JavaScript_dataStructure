/*
* 快速排序
* author: joinmouse
* time: 2020/5/31
*/
function swap (A, i, j) {
    [A[i], A[j]] = [A[j], A[i]]
}

function partitio(A, lo, hi) {
    // pivot 中心点
    const pivot = A[hi-1]
    let i = lo, j = hi-1
    // 小于中心点范围: [lo, i)
    // 未确定的范围是: [i, j)
    // 大于中心点范围: [j, hi - 1)
    console.log('中心点:' + pivot)
    console.log(i)
    console.log(j)
    while(i !== j) {
        if(A[i] <= pivot) {
            i++
        }else {
            console.log(A)
            swap(A, i, --j)
        }
    }
    console.log(`j: ${j}`)
    console.log(`i: ${i}`)
    // 中心点交换
    swap(A, j, hi-1)
    return j
}

function qsort(A, left=0, right=A.length-1) {
    if(right <= left) return
    let p = partitio(A, left, right)
    qsort(A, left, p)
    qsort(A, p+1, right)
}

// 排序test
const A = [10, 50, 40, 90, 20, 70, 60, 99, 88, 22, 455]
qsort(A)
console.log(A)