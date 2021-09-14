/*
 * 冒泡排序
 * 2020/5/25
 */
function swap(A, i, j) {
  let temp = A[i];
  A[i] = A[j];
  A[j] = temp;
}

function bubble_sort(A) {
  // 外层循环不变式
  for (let i = A.length - 1; i >= 1; i--) {
    // 内层循环不变式
    for (let j = 1; j <= i; j++) {
      // 循环结束j指向A[0]~A[j]中的最大值
      A[j - 1] > A[j] && swap(A, j - 1, j);
    }
  }
}

const A = [5, 8, 1, 3, 6, 9];
bubble_sort(A);
console.log(A);
