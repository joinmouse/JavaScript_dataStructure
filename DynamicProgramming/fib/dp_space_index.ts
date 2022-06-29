/**
 * dp_index的空间复杂度是O(n),
 * 当前函数就是再dp_index的基础上将空间复杂度降低到O(1)
 */
namespace DynamicProgramming_DPSpaceIndex {
  function fib(n: number): number {
    // base case
    if (n === 0 || n === 1) return n;
    // 分别代表dp[n-1], dp[n-2]
    let dpn_1 = 1;
    let dpn_2 = 0;
    let dpn = 0;
    // 状态转移
    for (let i = 2; i <= n; i++) {
      dpn = dpn_1 + dpn_2;
      // 滚动更新(迭代)
      dpn_2 = dpn_1;
      dpn_1 = dpn;
    }
    return dpn;
  }
  // 调用
  const val = fib(10);
  console.log(val);
}
