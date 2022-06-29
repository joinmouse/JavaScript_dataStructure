namespace DynamicProgramming_MemoIndex {
  function fib(n: number): number {
    if (n === 1 || n === 2) return 1;
    return fib(n - 1) + fib(n - 2);
  }

  const time_1 = new Date().getTime();
  fib(400);
  const time_2 = new Date().getTime();
  console.log("fib_time", time_2 - time_1);
}
