/**
 * 给你 k 种面值的硬币，面值分别为 c1, c2 ... ck，每种硬币的数量无限，再给一个总金额 amount，
 * 问你最少需要几枚硬币凑出这个金额，如果不可能凑出，算法返回 -1
 */

namespace DPCoins_Index {
  function coinChange(coins: number[], amount: number): number {
    return dp(coins, amount);
  }

  function dp(coins: number[], amount: number): number {
    // base case
    if (amount === 0) return 0;
    if (amount < 0) return -1;
    let res: number = Number.MAX_SAFE_INTEGER;
    // 状态转移
    for (const key in coins) {
      // 子问题结果
      const subProblem = dp(coins, amount - coins[key]);
      // 子问题无解就跳过
      if (subProblem === -1) continue;
      // 子问题中寻中最优解
      res = Math.min(res, subProblem + 1);
    }
    return res === Number.MAX_SAFE_INTEGER ? -1 : res;
  }

  const num = coinChange([1, 2, 5], 11);
  console.log(num);
}
