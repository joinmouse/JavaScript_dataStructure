namespace quick_normal {
  function sort(array: number[], lo: number = 0, hi = array.length - 1): void {
    if (hi <= lo) return;
    // pointIndex左边比它小，pointIndex右边比它大
    const pointIndex = partitio(array, lo, hi);
    // 递归排序区间: [lo, pointIndex)、(pointIndex+1, hi]
    sort(array, lo, pointIndex);
    sort(array, pointIndex + 1, hi);
  }

  function partitio(array: number[], low: number, high: number): number {
    const pivot = array[high];
    let i = low;
    // j扫描区间[low, high-1], i钉在区间的分割点
    for (let j = low; j <= high - 1; j++) {
      if (array[j] <= pivot) {
        swap(array, i, j);
        i += 1;
      }
    }
    // 将 pivot 的位置和i的位置对换，即可实现[low, i-1] < pivot < [i+1, high]
    swap(array, i, high);
    return i;
  }

  function swap(arr: number[], i: number, j: number) {
    const temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }

  const array = [12, 1, 10, 2, 9];
  sort(array);
  console.log("res", array);
}
