// 快排: 函数式版本，代码更易懂，但不是原地排序
function sort_func(nums: number[]): number[] {
  // base case
  if (nums.length < 2) return nums;
  const point = nums[0];
  const left = nums.slice(1).filter((item) => item < point);
  const right = nums.slice(1).filter((item) => item > point);
  // 递归
  const res = [...sort_func(left), point, ...sort_func(right)];
  return res;
}

const nums = [3, 5, 1, 6, 8, 10];
console.log(sort_func(nums));
