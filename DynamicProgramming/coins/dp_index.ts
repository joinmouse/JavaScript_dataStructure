/**
 * 给你 k 种面值的硬币，面值分别为 c1, c2 ... ck，每种硬币的数量无限，再给一个总金额 amount，
 * 问你最少需要几枚硬币凑出这个金额，如果不可能凑出，算法返回 -1
 */

namespace DPCoins_MemoIndex {
  function coinChange(coins: number[], amount: number): number {
    const dp: number[] = Array.from<number>({ length: amount + 1 });
    dp.fill(amount + 1);
    // base case
    dp[0] = 0;
    // 遍历所有状态的所有取值
    for (let i = 0; i < dp.length; i++) {
      //内层 for 循环在求所有选择的最小值
      for (const key in coins) {
        // 子问题无解
        if (i - coins[key] < 0) continue;
        dp[i] = Math.min(dp[i], 1 + dp[i - coins[key]]);
      }
    }
    return dp[amount] === amount + 1 ? -1 : dp[amount];
  }
  const num = coinChange([1, 2, 5], 101);
  console.log(num);
}
