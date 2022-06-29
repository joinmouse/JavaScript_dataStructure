namespace DynamicProgramming_Index {
  function fib(n: number): number {
    const memo: number[] = Array.from({ length: n + 1 }).map(() => 0);
    return helper(memo, n);
  }

  function helper(memo: number[], n: number): number {
    // base case
    if (n === 0 || n === 1) return n;
    if (memo[n] !== 0) return memo[n];
    // 循环不变式
    memo[n] = helper(memo, n - 1) + helper(memo, n - 2);
    return memo[n];
  }

  const time_1 = new Date().getTime();
  const value = fib(10);
  const time_2 = new Date().getTime();
  console.log("fib_memo_time", value, time_2 - time_1);
}
