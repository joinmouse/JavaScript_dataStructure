function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

function heapify(tree, n, i) {
    if(i >= n) return
    let c1 = 2*i + 1
    let c2 = 2*i + 2
    let max = i
    if(c1 < n && c2 < n) {
        if(tree[c1] > tree[max]) {
            max = c1
        }
        if(tree[c2] > tree[max]){
            max = c2
        } 
        if(max !== i) {
            swap(tree, max, i)
            heapify(tree, n, max)
        }
    }
}

function build_heap(tree, n) {
    let last_node = n-1
    let parent = (last_node-1)/2
    for(let i=parent; i>=0; i--) {
        heapify(tree, n, i)
    }
}

function heap_sort(tree, n) {
    build_heap(tree, n)
    for(let i=n-1; i>=0; i--) {
        swap(tree, i, 0)
        heapify(tree, i, 0);
    }
}

function main() {
    let tree = [15, 10, 3, 4, 1, 2]
    let n = 6
    heap_sort(tree, n)
    console.log(tree)
}

main()