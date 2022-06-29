namespace DynamicProgramming_DPIndex {
  function fib(n: number): number {
    if (n === 0) return 0;
    const dp: number[] = Array.from({ length: n + 1 }).map(() => 0);
    // base case
    dp[0] = 0;
    dp[1] = 1;
    // 状态转移
    for (let i = 2; i <= n; i++) {
      dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
  }

  const time_1 = new Date().getTime();
  fib(400);
  const time_2 = new Date().getTime();
  console.log("fib_dp_time", time_2 - time_1);
}
