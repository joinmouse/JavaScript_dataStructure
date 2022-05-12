/*
 * 快速排序
 * author: joinmouse
 * time: 2020/5/31
 */
function swap(A, i, j) {
  [A[i], A[j]] = [A[j], A[i]];
}

function partitio(A, lo, hi) {
  // pivot 中心点
  const pivot = A[hi];
  let i = lo,
    j = hi;
  // 小于中心点范围: [lo, i)
  // 未确定的范围是: [i, j)
  // 大于中心点范围: [j, hi - 1)
  while (i !== j) {
    if (A[i] <= pivot) {
      i++;
    } else {
      j -= 1;
      swap(A, i, j);
    }
  }
  // 中心点交换
  swap(A, j, hi);
  return j;
}

function qsort(A, left = 0, right = A.length - 1) {
  if (right <= left) return;
  let p = partitio(A, left, right);
  console.log("ppp", p);
  qsort(A, left, p);
  qsort(A, p + 1, right);
}

// 排序test
const A = [1, 5, 4, 9, 2, 7, 6, 10, 8, 3, 0];
qsort(A);
console.log("A:::", A);
