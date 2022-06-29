/**
 * 输入一个无序的整数数组，请你找到其中最长的严格递增子序列的长度，
 * 比如: 输入 nums=[10,9,2,5,3,7,101,18]，其中最长的递增子序列是 [2,3,7,101] return 4
 */

function lengthOfLIS(nums: number[]): number {
  const dp = Array.from<number>({ length: nums.length + 1 });
  // 明确 dp 数组的定义: dp[i] 表示以 nums[i] 这个数结尾的最长递增子序列的长度
  dp.fill(1);
  for (let i = 0; i < nums.length; i++) {
    // 寻找小于dp[i]的子序列
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  // res
  let res = 0;
  for (let i = 0; i < dp.length; i++) {
    res = Math.max(res, dp[i]);
  }
  return res;
}

const nums = [10, 9, 2, 5, 3, 7, 101, 18];
const count = lengthOfLIS(nums);
console.log(count);
