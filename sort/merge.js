/*
* 合并排序
* 2020/5/25
*/
function merge(A, p, q, r) {
    // 存放左边临时空间
    let A1 = A.slice(p, q)
    // 存放右边临时空间
    let A2 = A.slice(q, r)
    // 追加哨兵
    A1.push(Number.MAX_SAFE_INTEGER)
    A2.push(Number.MAX_SAFE_INTEGER)
    for(let k = p, i = 0, j = 0; k < r; k++) {
        // k: 下一个要写入的位置
        // i: A1中回写的位置
        // j: A2中回写的位置
        A[k] = A1[i] < A2[j] ? A1[i++] : A2[j++]
    }
}

function merge_sort(A, p, r) {
    if(r - p < 2) return
    const q = Math.ceil((p + r)/2)
    // 递归分别对左右边排序后合并
    merge_sort(A, p, q)
    merge_sort(A, q, r)
    merge(A, p, q, r)
}

const A = [3, 4, 6, 12, 5, 4, 1]
merge_sort(A, 0, A.length)
console.log(A)