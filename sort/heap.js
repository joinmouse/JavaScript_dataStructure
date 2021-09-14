// 堆排序: O(nlogn)
// 堆排序是一种原地排序，不会占用额外的存储空间，
// 排序过程中可能改变相同值的位置，属于不稳定排序

// 1、建堆
function build_heap(tree, n) {
  let last_node = n - 1;
  let parent = (last_node - 1) / 2;
  for (let i = parent; i >= 0; i--) {
    heapify(tree, n, i);
  }
}

// 2、堆化操作
function heapify(tree, n, i) {
  if (i >= n) return;
  let c1 = 2 * i + 1;
  let c2 = 2 * i + 2;
  let max = i;
  if (c1 < n && c2 < n) {
    if (tree[c1] > tree[max]) {
      max = c1;
    }
    if (tree[c2] > tree[max]) {
      max = c2;
    }
    if (max !== i) {
      swap(tree, max, i);
      console.log("max", max);
      // console.log("tree", tree);
      // 继续向上堆化
      heapify(tree, n, max);
    }
  }
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function heap_sort(tree, n) {
  // 1、建堆&堆化
  build_heap(tree, n);
  // 2、排序: 将堆最后的元素和最顶的元素交换后，作为数组末尾项，之后重新堆化至结束
  for (let i = n - 1; i >= 0; i--) {
    swap(tree, i, 0);
    heapify(tree, i, 0);
  }
}

function main() {
  let tree = [15, 10, 3, 4, 1, 2, 11, 12];
  heap_sort(tree, tree.length);
  console.log(tree);
}

main();
