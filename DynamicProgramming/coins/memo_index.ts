/**
 * 给你 k 种面值的硬币，面值分别为 c1, c2 ... ck，每种硬币的数量无限，再给一个总金额 amount，
 * 问你最少需要几枚硬币凑出这个金额，如果不可能凑出，算法返回 -1
 */

namespace DPCoins_MemoIndex {
  function coinChange(coins: number[], amount: number): number {
    const memo: number[] = Array.from({ length: amount + 1 }).map(
      () => Number.MIN_SAFE_INTEGER
    );
    return dp(coins, amount, memo);
  }

  function dp(coins: number[], amount: number, memo: number[]): number {
    //base case
    if (amount < 0) return -1;
    if (amount === 0) return 0;
    // 防止重复计算
    if (memo[amount] !== Number.MIN_SAFE_INTEGER) return memo[amount];
    let res: number = Number.MAX_SAFE_INTEGER;
    // 状态方程
    for (const key in coins) {
      const subProblem = dp(coins, amount - coins[key], memo);
      if (subProblem === -1) continue;
      res = Math.min(res, subProblem + 1);
    }
    // 缓存
    memo[amount] = res === Number.MAX_SAFE_INTEGER ? -1 : res;
    return memo[amount];
  }

  const num = coinChange([1, 2, 5], 1001);
  console.log(num);
}
